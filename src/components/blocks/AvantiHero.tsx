import React from 'react';

interface AvantiHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaUrl?: string;
  heroImage?: {
    url: string;
    alt: string;
  };
}

export const AvantiHeroBlock: React.FC<AvantiHeroProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaUrl,
  heroImage
}) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="section-title" data-cms-bind="title">{title}</h1>
              <h2 id="hero-subtitle" className="section-subtitle" data-cms-bind="subtitle">{subtitle}</h2>
              <p className="lead mb-4">{description}</p>
              {ctaText && ctaUrl && (
                <a 
                  id="hero-cta" 
                  href={ctaUrl}
                  className="btn btn-lg text-white" 
                  style={{
                    backgroundColor: '#e67e22', 
                    borderRadius: '25px', 
                    padding: '12px 30px', 
                    fontWeight: '600'
                  }}
                >
                  {ctaText}
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            {heroImage?.url && (
              <img 
                id="hero-image" 
                src={heroImage.url} 
                alt={heroImage.alt || "Hero image"} 
                className="hero-image"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
