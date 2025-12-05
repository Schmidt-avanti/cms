import React from 'react';
import Image from 'next/image';

interface ContactSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  phone?: string;
  formTitle?: string;
  teamMember?: {
    name: string;
    position: string;
    quote: string;
    image: {
      url: string;
      alt: string;
    };
  };
}

export const ContactSectionBlock: React.FC<ContactSectionProps> = ({
  eyebrow,
  title,
  description,
  phone,
  formTitle,
  teamMember
}) => {
  return (
    <section className="pt-5 bg-white position-relative" id="contactSection">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-6 col-12 bg-white lastSection">
            <div className="consult-left p-4 p-md-5">
              {eyebrow && (
                <div className="eyebrow fw-semibold mb-2 text-muted small">{eyebrow}</div>
              )}
              <h2 className="fw-bold mb-4 text-dark" style={{fontSize: '2.5rem', lineHeight: '1.2', color: '#172B52'}}>{title}</h2>
              <p className="mb-4 text-dark" style={{fontSize: '1.1rem', lineHeight: '1.6', color: '#333'}}>{description}</p>
              {phone && (
                <a className="consult-phone fw-bold" href={`tel:${phone}`} style={{fontSize: '1.2rem', color: '#172B52', textDecoration: 'underline'}}>{phone}</a>
              )}
            </div>
          </div>
          
          <div className="col-lg-6 col-12 lastSection">
            <div className="p-0 mt-5 rounded-4 shadow position-relative z-2 consult-card" style={{backgroundColor: '#172B52', background: '#172B52'}}>
              <div className="p-4 p-md-5 d-flex flex-column h-100">
                <h5 className="text-white fw-semibold mb-4">{formTitle || 'Ja, ich interessiere mich für ein Erstgespräch.'}</h5>
                <div id="contact-form-container">
                  <form id="contact-form" className="contact-form-modern">
                    <div className="input-with-icon mb-3 position-relative">
                      <span className="position-absolute" style={{left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '18px'}}>👤</span>
                      <input type="text" name="name" className="form-control modern" placeholder="Vor und Nachname" required style={{backgroundColor: 'white', border: 'none', borderRadius: '8px', padding: '12px 16px 12px 45px', fontSize: '14px', color: '#333'}} />
                    </div>
                    <div className="input-with-icon mb-3 position-relative">
                      <span className="position-absolute" style={{left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '18px'}}>🏢</span>
                      <input type="text" name="company" className="form-control modern" placeholder="Unternehmen (optional)" style={{backgroundColor: 'white', border: 'none', borderRadius: '8px', padding: '12px 16px 12px 45px', fontSize: '14px', color: '#333'}} />
                    </div>
                    <div className="input-with-icon mb-3 position-relative">
                      <span className="position-absolute" style={{left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '18px'}}>📋</span>
                      <input type="text" name="position" className="form-control modern" placeholder="Position (optional)" style={{backgroundColor: 'white', border: 'none', borderRadius: '8px', padding: '12px 16px 12px 45px', fontSize: '14px', color: '#333'}} />
                    </div>
                    <div className="input-with-icon mb-3 position-relative">
                      <span className="position-absolute" style={{left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '18px'}}>📞</span>
                      <input type="tel" name="phone" className="form-control modern" placeholder="Telefon (optional)" style={{backgroundColor: 'white', border: 'none', borderRadius: '8px', padding: '12px 16px 12px 45px', fontSize: '14px', color: '#333'}} />
                    </div>
                    <div className="input-with-icon mb-3 position-relative">
                      <span className="position-absolute" style={{left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999', fontSize: '18px'}}>✉️</span>
                      <input type="email" name="email" className="form-control modern" placeholder="E‑Mail" required style={{backgroundColor: 'white', border: 'none', borderRadius: '8px', padding: '12px 16px 12px 45px', fontSize: '14px', color: '#333'}} />
                    </div>
                    <div className="form-check mb-3 d-flex align-items-center">
                      <input className="form-check-input me-2" type="checkbox" id="privacy-check" required style={{width: '18px', height: '18px'}} />
                      <label className="form-check-label text-white" htmlFor="privacy-check" style={{fontSize: '14px'}}>
                        Ich akzeptiere die Datenschutzerklärung
                      </label>
                    </div>
                    <button type="submit" className="btn btn-cta w-100" style={{backgroundColor: '#e67e22', border: 'none', borderRadius: '8px', padding: '12px', fontWeight: 'bold'}}>Erstgespräch anfragen →</button>
                    <div className="privacy-note mt-3 text-center small">Wir behandeln Ihre Daten vertraulich.</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {teamMember && (
        <div className="bg-white py-5">
          <div className="custom-container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-12 text-center">
                <div className="team-member-image-large">
                  <Image
                    src={teamMember.image.url}
                    alt={teamMember.image.alt || teamMember.name}
                    width={300}
                    height={380}
                    className="img-fluid"
                    style={{objectFit: 'cover', borderRadius: '8px'}}
                  />
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="team-member-content ps-lg-3">
                  <div className="position-relative">
                    <div className="orange-accent-line position-absolute" style={{
                      left: '0',
                      top: '0',
                      bottom: '0',
                      width: '4px',
                      backgroundColor: '#e67e22'
                    }}></div>
                    <div className="ps-4">
                      <blockquote className="mb-4">
                        <p className="fs-5 mb-4" style={{lineHeight: '1.6', color: '#333'}}>
                          &ldquo;{teamMember.quote}&rdquo;
                        </p>
                      </blockquote>
                      <div className="team-member-info">
                        <h4 className="fw-bold mb-1" style={{color: '#172B52', fontSize: '1.5rem'}}>{teamMember.name}</h4>
                        <p className="text-muted mb-0" style={{fontSize: '1.1rem'}}>{teamMember.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
