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

interface ServicePackagesProps {
  packages: ServicePackage[];
}

export const ServicePackagesBlock: React.FC<ServicePackagesProps> = ({
  packages = []
}) => {
  console.log('ServicePackages rendering with packages:', packages);
  
  if (!packages || packages.length === 0) {
    console.log('No packages provided to ServicePackages component');
    return null;
  }

  return (
    <section className="py-5 bg-main">
      <div className="container">
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
      </div>
    </section>
  );
};
