import React from 'react';

export const TestServicePackagesBlock: React.FC = () => {
  const testPackages = [
    {
      name: "Prepaid",
      price: "850€",
      pricePrefix: "Ab",
      priceSuffix: "/Monat",
      weekdayHours: "Montag bis Freitag",
      weekdayTime: "09:00 bis 17:30 Uhr",
      holidayInfo: "An bundeseinheitlichen Feiertagen geschlossen",
      hasTooltip: true,
      tooltip: "*Sie zahlen 2.550 € (entspricht 3 × 850 €) im Voraus für drei Monate per Kreditkarte."
    },
    {
      name: "Value",
      price: "950€",
      pricePrefix: "Ab",
      priceSuffix: "/Monat",
      weekdayHours: "Montag bis Freitag",
      weekdayTime: "09:00 bis 17:30 Uhr",
      holidayInfo: "An bundeseinheitlichen Feiertagen geschlossen",
      hasTooltip: false
    },
    {
      name: "Extended",
      price: "1.250€",
      pricePrefix: "Ab",
      priceSuffix: "/Monat",
      weekdayHours: "Montag bis Freitag",
      weekdayTime: "08:00 bis 20:00 Uhr",
      weekendHours: "Samstag",
      weekendTime: "10:00 bis 18:00 Uhr",
      holidayInfo: "An bundeseinheitlichen Feiertagen geschlossen",
      hasTooltip: false
    },
    {
      name: "Super 365",
      price: "1.950€",
      pricePrefix: "Ab",
      priceSuffix: "/Monat",
      weekdayHours: "Montag bis Sonntag",
      weekdayTime: "08:00 bis 20:00 Uhr",
      holidayInfo: "An Feiertagen geöffnet",
      hasTooltip: false
    }
  ];

  return (
    <section className="py-5 bg-main">
      <div className="container">
        <div className="row g-4 mb-5">
          {testPackages.map((pkg, index) => (
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
