import React from 'react';
import Image from 'next/image';

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
              <Image 
                key={index}
                src={logoItem.logo.url} 
                alt={logoItem.altText}
                width={120}
                height={60}
                className="logo-image"
              />
            ) : null
          ))}
          {/* Duplicate for seamless loop */}
          {logos?.map((logoItem, index) => (
            logoItem.logo ? (
              <Image 
                key={`duplicate-${index}`}
                src={logoItem.logo.url} 
                alt={logoItem.altText}
                width={120}
                height={60}
                className="logo-image"
              />
            ) : null
          ))}
        </div>
      </div>
    </section>
  );
};
