import React from 'react';

interface Option {
  option: string;
  oneTimePrice?: string;
  monthlyPrice?: string;
}

interface FooterNote {
  note: string;
}

interface AdditionalOptionsProps {
  title: string;
  subtitle?: string;
  options: Option[];
  footerNotes?: FooterNote[];
}

export const AdditionalOptionsBlock: React.FC<AdditionalOptionsProps> = ({
  title,
  subtitle,
  options = [],
  footerNotes = []
}) => {
  return (
    <section className="py-5 bg-main" id="add-ons">
      <div className="container">
        <h2 className="fw-bold text-orange text-center mb-4 animate">{title}</h2>
        {subtitle && (
          <p className="text-orange text-center mb-5 animate delay-200">{subtitle}</p>
        )}
        
        <div className="options-table-container animate delay-300">
          <table className="options-table">
            <thead>
              <tr>
                <th>Option</th>
                <th>Einmalig</th>
                <th>Monatlich</th>
              </tr>
            </thead>
            <tbody>
              {options.map((option, index) => (
                <tr key={index}>
                  <td>{option.option}</td>
                  <td>{option.oneTimePrice || '/'}</td>
                  <td>{option.monthlyPrice || '/'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {footerNotes.length > 0 && (
            <div className="footer-notes">
              {footerNotes.map((note, index) => (
                <p key={index} className="footer-note">{note.note}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
