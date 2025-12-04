'use client';

import React from 'react';
import Image from 'next/image';

interface SocialMedia {
  platform: string;
  url: string;
  icon: {
    url: string;
    alt: string;
  };
  id: string;
}

interface Award {
  image: {
    url: string;
    alt: string;
  };
  altText: string;
  id: string;
}

interface LegalLink {
  label: string;
  url: string;
}

interface ContactInfo {
  companyName: string;
  address: string;
  phone: string;
  email: string;
}

interface FooterBlockProps {
  logo: {
    url: string;
    alt: string;
  };
  socialMedia: SocialMedia[];
  awards: Award[];
  contactInfo: ContactInfo;
  legalLinks: LegalLink[];
  copyrightText: string;
}

export const FooterBlock: React.FC<FooterBlockProps> = ({
  logo,
  socialMedia = [],
  awards = [],
  contactInfo,
  legalLinks = [],
  copyrightText,
}) => {
  console.log('Footer component props:', { legalLinks, contactInfo, copyrightText });
  
  // Function to ensure URL has proper protocol
  const ensureAbsoluteUrl = (url: string): string => {
    if (!url) return url;
    
    // If URL already has protocol, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If URL starts with //, add https:
    if (url.startsWith('//')) {
      return `https:${url}`;
    }
    
    // If URL is a relative path (starts with /), return as is for internal links
    if (url.startsWith('/')) {
      return url;
    }
    
    // If URL looks like a domain or external URL without protocol, add https://
    if (url.includes('.') && !url.startsWith('#')) {
      return `https://${url}`;
    }
    
    // Return as is for anchor links or other special cases
    return url;
  };
  
  // Fallback legal links if none are provided
  const defaultLegalLinks = [
    { label: 'Impressum', url: '/impressum' },
    { label: 'Datenschutz', url: '/datenschutz' }
  ];
  
  const finalLegalLinks = legalLinks.length > 0 ? legalLinks : defaultLegalLinks;
  console.log('Using finalLegalLinks:', finalLegalLinks);
  
  return (
    <footer className="site-footer">
      <div className="custom-container d-flex justify-content-between test-footer">
        <div>
          <Image 
            className="footerLogo" 
            src={logo.url} 
            alt={logo.alt}
            width={120}
            height={40}
          />
          <div className="d-flex mt-4 gap-4 socail-media-logos">
            {socialMedia.map((social) => (
              <a key={social.id} href={ensureAbsoluteUrl(social.url)} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={social.icon.url} 
                  alt={social.icon.alt}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="d-flex flex-row gap-4 flex-wrap test-footer-col">
          <div>
            {awards.map((award) => (
              <Image
                key={award.id}
                src={award.image.url}
                alt={award.altText}
                width={100}
                height={100}
                style={{ maxHeight: '100px', width: 'auto' }}
              />
            ))}
          </div>
          <div className="footer-col-1">
            <h3 className="footer-title mb-0">Kontakt</h3>
            <span className="orangeU"></span>
            <p className="py-3" dangerouslySetInnerHTML={{ __html: contactInfo.address.replace(/\n/g, '<BR>') }} />
            <a className="text-white d-block py-3" href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}>
                <path d="M21 16.92v2a2 2 0 0 1-2.18 2 19.78 19.78 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.78 19.78 0 0 1 1.08 5.2 2 2 0 0 1 3.06 3h2a2 2 0 0 1 2 1.72c.12.9.3 1.77.57 2.61a2 2 0 0 1-.45 2.11L6.1 10.9a16 16 0 0 0 6 6l1.46-1.06a2 2 0 0 1 2.11-.45c.84.27 1.71.45 2.61.57A2 2 0 0 1 21 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {contactInfo.phone}
            </a>
            <a className="text-white d-block" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </div>
          <div className="footer-col-2 d-flex flex-column gap-1">
            <h3 className="footer-title mb-0">Rechtliches</h3>
            <span className="orangeU"></span>
            {finalLegalLinks.map((link, index) => (
              <span key={index} className={index === 0 ? "py-3 d-block" : "d-block"}>
                {link.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="blue-line">
          <p className="footer-text py-3 bg-main">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};
