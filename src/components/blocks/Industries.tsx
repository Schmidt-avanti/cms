'use client';

import React from 'react';

interface Industry {
  name: string;
  materialIcon: string;
  id: string;
}

interface IndustriesBlockProps {
  eyebrow?: string;
  title: string;
  industries: Industry[];
}

export const IndustriesBlock: React.FC<IndustriesBlockProps> = ({
  eyebrow,
  title,
  industries = [],
}) => {
  return (
    <section className="section-padding industries-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 mb-4 text-center">
            <div className="industries-header">
              {eyebrow && <div className="eyebrow text-white fw-semibold">{eyebrow}</div>}
              <h2 className="industries-title industries-title--only text-white">
                {title.split(' ').map((word, _index) => {
                  if (word === 'Unternehmen') {
                    return <span key={_index} className="line-break">{word}</span>;
                  }
                  return word + ' ';
                })}
              </h2>
            </div>
          </div>
        </div>
        <div className="row industries-grid">
          {industries.map((industry, index) => (
            <div key={industry.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex align-items-start gap-3">
                <span className="material-symbols-outlined ind-icon" aria-hidden="true">
                  {industry.materialIcon}
                </span>
                <span className="ind-label">{industry.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
