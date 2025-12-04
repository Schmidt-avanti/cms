import React from 'react';

interface Feature {
  text: string;
  type: 'feature' | 'separator';
  separatorText?: string;
}

interface PackageIncludesProps {
  title: string;
  features: Feature[];
}

export const PackageIncludesBlock: React.FC<PackageIncludesProps> = ({
  title,
  features = []
}) => {
  return (
    <section className="py-5 bg-main">
      <div className="package-includes animate">
        <h2 className="animate delay-100">{title}</h2>
        
        {features.map((feature, index) => {
          if (feature.type === 'separator') {
            return (
              <div key={index} className={`feature-separator animate delay-${(index + 2) * 100}`}>
                {feature.separatorText || 'und'}
              </div>
            );
          }
          
          return (
            <div key={index} className={`feature-item animate delay-${(index + 2) * 100}`}>
              <span className="check-icon">✓</span>
              <div>{feature.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
