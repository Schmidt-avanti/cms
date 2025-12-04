import React from 'react';

interface Logo {
  logo: {
    url: string;
    alt: string;
  };
  altText: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
}

export const LogoMarqueeBlock: React.FC<LogoMarqueeProps> = ({ logos }) => {
  return (
    <section className="logo-marquee" aria-label="Kundenlogos">
      <div className="container-fluid px-4">
        <div className="marquee-track">
          {logos?.map((logoItem, index) => (
            logoItem.logo ? (
              <img 
                key={index}
                src={logoItem.logo.url} 
                alt={logoItem.altText}
              />
            ) : null
          ))}
          {/* Duplicate for seamless loop */}
          {logos?.map((logoItem, index) => (
            logoItem.logo ? (
              <img 
                key={`duplicate-${index}`}
                src={logoItem.logo.url} 
                alt={logoItem.altText}
              />
            ) : null
          ))}
        </div>
      </div>
    </section>
  );
};
