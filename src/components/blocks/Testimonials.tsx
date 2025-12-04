'use client';

import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  company: string;
  position?: string;
  quote: string;
  image: {
    url: string;
    alt: string;
  };
  id: string;
}

interface TestimonialsBlockProps {
  title: string;
  testimonials: Testimonial[];
}

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ({
  title,
  testimonials = [],
}) => {
  return (
    <section id="testimonials" className="section-padding testimonials-alt">
      <div className="container-fluid px-3 px-lg-5">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h2 className="section-subtitle">{title}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row g-4 testimonial-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="col-12 col-lg-6 col-xl-4">
                  <div className="card testimonial-card-aspect shadow" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Image
                      src={testimonial.image.url}
                      alt={testimonial.image.alt}
                      width={400}
                      height={300}
                      className="face-down"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    <div 
                      className="overlay-content"
                      style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '30px',
                        right: '30px',
                        color: 'white',
                        opacity: 1,
                        transform: 'translateY(0)',
                        transition: 'none',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      <p className="testimonial-quote" style={{ fontSize: '20px', marginBottom: '15px', fontStyle: 'italic', lineHeight: '1.4', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>"{testimonial.quote}"</p>
                      <p className="testimonial-author" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>{testimonial.name},</p>
                      <p className="testimonial-company" style={{ fontSize: '16px', marginBottom: '0', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
