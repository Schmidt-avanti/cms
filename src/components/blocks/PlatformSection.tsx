'use client';

import React from 'react';
import Image from 'next/image';

interface PlatformImage {
  image: {
    url: string;
    alt: string;
  };
  altText: string;
  id: string;
}

interface PlatformSectionBlockProps {
  eyebrow?: string;
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
  images: PlatformImage[];
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
          <p key={index} className="mb-3">
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

export const PlatformSectionBlock: React.FC<PlatformSectionBlockProps> = ({
  eyebrow,
  title,
  description,
  images = [],
}) => {
  return (
    <section className="bg-white py-5" id="platform-section">
      <div className="custom-container py-5 bg-white" style={{minHeight: '80vh'}}>
        <div className="row align-items-center" id="platform-row">
          <div className="col-lg-6 col-12" id="platform-text">
            <div className="testimonial-card">
              <div className="pb-5">
                {eyebrow && <p className="text-muted mb-2">{eyebrow}</p>}
                <h1 className="fw-bold mb-0 animate fade-in">{title}</h1>
                <span className="orangeU animate delay-100"></span>
              </div>  
              <div className="animate fade-in delay-200">
                {renderRichText(description)}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 text-center">
            {images.map((imageItem, index) => (
              <Image
                key={imageItem.id}
                src={imageItem.image.url}
                alt={imageItem.altText}
                width={500}
                height={300}
                className="img-fluid rounded-4 animate slide-in-right delay-200 mb-3"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
