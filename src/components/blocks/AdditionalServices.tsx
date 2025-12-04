'use client';

import React from 'react';

interface Service {
  title: string;
  icon: string; // SVG string
  id: string;
}

interface AdditionalServicesBlockProps {
  title: string;
  services: Service[];
}

export const AdditionalServicesBlock: React.FC<AdditionalServicesBlockProps> = ({
  title,
  services = [],
}) => {
  return (
    <section>
      <div className="bg-main py-5">
        <div className="custom-container">
          <div className="text-center mb-4">
            <h2 className="text-white fw-bold mb-0 animate">{title}</h2>
            <span className="orangeU mx-auto animate delay-100"></span>
          </div>
          <div className="row py-5">
            <div className="col-lg-3 p-0"></div>
            <div className="col-lg-6 p-0">
              <div className="row p-0">
                {services.slice(0, 4).map((service, index) => (
                  <div key={service.id} className="col-lg-3 col-sm-6 pt-lg-0 pt-3">
                    <div className="iconContainer d-flex flex-column align-items-center animate zoom-in delay-200">
                      <div dangerouslySetInnerHTML={{ __html: service.icon }} />
                      <p className="text-white text-center pt-3">{service.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              {services.length > 4 && (
                <div className="row px-lg-5">
                  {services.slice(4).map((service, index) => (
                    <div key={service.id} className="col-lg-4 col-sm-6 pt-4">
                      <div className="iconContainer d-flex flex-column align-items-center">
                        <div dangerouslySetInnerHTML={{ __html: service.icon }} />
                        <p className="text-white pt-3">{service.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-3 p-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
