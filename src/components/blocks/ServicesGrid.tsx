import React from 'react';

interface Service {
  title: string;
  description: {
    root: {
      type: string;
      children: {
        type: any;
        children?: {
          text: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
  };
  icon?: string;
}

interface ServicesGridProps {
  title?: string;
  services: Service[];
}

// Helper function to render rich text content
const renderRichText = (content: any) => {
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }
  
  if (content?.root?.children) {
    return (
      <div>
        {content.root.children.map((child: any, index: number) => (
          <p key={index}>
            {child.children?.map((textNode: any, textIndex: number) => (
              <span key={textIndex}>{textNode.text || ''}</span>
            ))}
          </p>
        ))}
      </div>
    );
  }
  
  return <p>No description available</p>;
};

export const ServicesGridBlock: React.FC<ServicesGridProps> = ({ 
  title, 
  services 
}) => {
  return (
    <section className="position-relative" id="serviceSection">
      <div className="custom-container pt-5">
        <div>
          <h2 className="fw-bold text-center mb-0 animate">
            {title || 'Leistungen'}
          </h2>
          <span className="orangeU mx-auto animate delay-100"></span>
        </div>
        
        <div className="row py-5 g-2">
          {services?.map((service, index) => (
            <div key={index} className="col-xxl-6 col-lg-6 position-relative z-2 col-md-6 col-12 p-0 mt-3">
              <div className="showCardContainer p-4" style={{background: 'transparent', border: 'none', boxShadow: 'none'}}>
                <div className="cardIcon" style={{background: 'transparent', borderRadius: '0', border: 'none', boxShadow: 'none'}}>
                  {service.icon ? (
                    <div 
                      style={{background: 'transparent', borderRadius: '0', border: 'none', boxShadow: 'none'}}
                      dangerouslySetInnerHTML={{ __html: service.icon }} 
                    />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hero-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  )}
                </div>
                <h3 className="fw-bold pt-3 d-inline-block">{service.title}</h3>
                <div className="pt-2">
                  {renderRichText(service.description)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
