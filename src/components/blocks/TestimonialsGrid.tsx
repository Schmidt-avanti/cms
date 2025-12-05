import React from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image?: {
    url: string;
    alt: string;
  };
}

interface TestimonialsGridProps {
  title?: string;
  testimonials: Testimonial[];
}

export const TestimonialsGridBlock: React.FC<TestimonialsGridProps> = ({ 
  title, 
  testimonials 
}) => {
  return (
    <section id="testimonials" className="section-padding testimonials-alt">
      <div className="container-fluid px-3 px-lg-5">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h2 className="section-subtitle">
              {title || 'Was avanti-Auftraggeber über uns sagen'}
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row g-4 testimonial-grid">
              {testimonials?.map((testimonial, index) => (
                <div key={index} className="col-12 col-lg-6 col-xl-4">
                  <div className="card testimonial-card-aspect shadow">
                    {testimonial.image?.url && (
                      <Image 
                        src={testimonial.image.url} 
                        alt={testimonial.image.alt || testimonial.author} 
                        className="face-down"
                        width={300}
                        height={300}
                      />
                    )}
                    <div className="overlay"></div>
                    <div className="overlay-content">
                      <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                      <p className="testimonial-author">{testimonial.author},</p>
                      <p className="testimonial-company">{testimonial.company}</p>
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
