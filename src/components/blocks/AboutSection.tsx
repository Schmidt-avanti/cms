import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  quote: string;
  image: {
    url: string;
    alt: string;
  };
}

interface AboutSectionProps {
  title: string;
  subtitle: string;
  description: any; // Rich text content
  ctaText?: string;
  ctaUrl?: string;
  teamMember: TeamMember;
}

export const AboutSectionBlock: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaUrl,
  teamMember
}) => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <h2 className="section-title">{title}</h2>
            <h3 className="section-subtitle" style={{color:'#082041'}}>{subtitle}</h3>
            <div className="mb-4" style={{ color: '#333' }}>
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : description?.root?.children ? (
                <div>
                  {description.root.children.map((child: any, index: number) => {
                    if (child.type === 'paragraph') {
                      return (
                        <p key={index} className="mb-4">
                          {child.children?.map((textNode: any, textIndex: number) => (
                            <span key={textIndex}>{textNode.text}</span>
                          ))}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: description?.html || '' }} />
              )}
            </div>
            {ctaText && ctaUrl && (
              <a href={ctaUrl} className="btn btn-primary-custom text-white">
                {ctaText}
              </a>
            )}
          </div>
          <div className="col-lg-3">
            {teamMember?.image?.url && (
              <Image 
                src={teamMember.image.url} 
                alt={teamMember.image.alt || teamMember.name} 
                width={300}
                height={400}
                className="hero-image"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            )}
            {teamMember?.quote && (
              <div className="testimonial-card" style={{maxWidth: '100%', marginTop: '16px'}}>
                <p className="mb-4">&ldquo;{teamMember.quote}&rdquo;</p>
                {teamMember.name && (
                  <h4 className="mb-1" style={{color:'#43bede'}}>{teamMember.name}</h4>
                )}
                {teamMember.position && (
                  <p className="text-muted">{teamMember.position}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
