import React from 'react';

interface ServicePackage {
  name: string;
  price: string;
  pricePrefix?: string;
  priceSuffix?: string;
  weekdayHours: string;
  weekdayTime: string;
  weekendHours?: string;
  weekendTime?: string;
  holidayInfo: string;
  tooltip?: string;
  hasTooltip?: boolean;
}

interface PricingHeroProps {
  title: string;
  subtitle?: string;
  onboardingPrice?: string;
  ctaText?: string;
  ctaUrl?: string;
  packages?: ServicePackage[];
}

export const PricingHeroBlock: React.FC<PricingHeroProps> = ({
  title,
  subtitle,
  onboardingPrice,
  ctaText,
  ctaUrl,
  packages = []
}) => {
  return (
    <section className="py-5 bg-main" style={{paddingTop: '80px'}}>
      <div className="container text-center">
        <h1 className="fw-bold text-orange animate">{title}</h1>
        {subtitle && (
          <p className="text-orange mb-4 animate delay-200">{subtitle}</p>
        )}
        
        {/* Service Packages Cards */}
        {packages && packages.length > 0 && (
          <div className="row g-4 mb-5">
            {packages.map((pkg, index) => (
              <div key={index} className="col-md-3">
                <div className={`pricing-card slide-in-${index < 2 ? 'left' : 'right'} delay-${(index % 2 + 1) * 100}`}>
                  <div>
                    <div className="d-flex justify-content-between align-items-start">
                      <h3>{pkg.name}</h3>
                      {pkg.hasTooltip && pkg.tooltip && (
                        <span className="small info-tooltip">ⓘ
                          <span className="tooltip-text">
                            {pkg.tooltip}
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="pricing-amount">
                      {pkg.pricePrefix && (
                        <div className="price-prefix">{pkg.pricePrefix}</div>
                      )}
                      <span className="price-large">{pkg.price}</span>
                      {pkg.priceSuffix && (
                        <div className="price-suffix">{pkg.priceSuffix}</div>
                      )}
                    </div>
                    
                    <div className="pricing-time">
                      <p className="mb-1">{pkg.weekdayHours}</p>
                      <p className="mb-3 time-highlight">{pkg.weekdayTime}</p>
                      {pkg.weekendHours && pkg.weekendTime && (
                        <>
                          <p className="mb-1">{pkg.weekendHours}</p>
                          <p className="mb-3 time-highlight">{pkg.weekendTime}</p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="holiday-info">
                    <p className={pkg.weekendHours ? "mb-1" : ""}>{pkg.holidayInfo}</p>
                    {!pkg.weekendHours && <p></p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {onboardingPrice && (
          <div className="bottom-info-bar zoom-in delay-500">
            <p className="mb-0">{onboardingPrice}</p>
          </div>
        )}
        
        <div className="col-md-8 col-12 pt-5 mx-auto"></div>
        
        {ctaText && ctaUrl && (
          <div className="d-flex justify-content-center mt-1 mb-2">
            <a 
              href={ctaUrl}
              onClick={ctaUrl.includes('Calendly') ? 
                (e) => {
                  e.preventDefault();
                  // @ts-ignore
                  if (typeof Calendly !== 'undefined') {
                    // @ts-ignore
                    Calendly.initPopupWidget({url: 'https://calendly.com/aa-schmidt-ja-dialog/30min'});
                  }
                } : undefined
              }
              className="border-26 w-fit text-white fw-bold demo-btn"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
