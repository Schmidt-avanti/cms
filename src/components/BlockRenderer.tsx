'use client';

import React from 'react';
import { HtmlContentBlock } from './blocks/HtmlContent';
import { RichTextBlock } from './blocks/RichText';
import { TestimonialsGridBlock } from './blocks/TestimonialsGrid';
import { TestimonialsBlock } from './blocks/Testimonials';
import { AvantiHeroBlock } from './blocks/AvantiHero';
import { LogoMarqueeBlock } from './blocks/LogoMarquee';
import { ServicesGridBlock } from './blocks/ServicesGrid';
import { AboutSectionBlock } from './blocks/AboutSection';
import { ContactSectionBlock } from './blocks/ContactSection';
import { NavigationBlock } from './blocks/Navigation';
import { VideoSectionBlock } from './blocks/VideoSection';
import { PlatformSectionBlock } from './blocks/PlatformSection';
import { AdditionalServicesBlock } from './blocks/AdditionalServices';
import { IndustriesBlock } from './blocks/Industries';
import { FooterBlock } from './blocks/Footer';
import { PricingHeroBlock } from './blocks/PricingHero';
import { ServicePackagesBlock } from './blocks/ServicePackages';
import { PackageIncludesBlock } from './blocks/PackageIncludes';
import { AdditionalOptionsBlock } from './blocks/AdditionalOptions';
import { TestServicePackagesBlock } from './blocks/TestServicePackages';

interface Block {
  blockType: string;
  [key: string]: any;
}

interface BlockRendererProps {
  blocks: Block[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  console.log('Rendering blocks:', blocks); // Debug log
  
  return (
    <div className="block-renderer">
      {blocks?.map((block, index) => {
        console.log(`Rendering block ${index}:`, block.blockType, block); // Debug log
        
        switch (block.blockType) {
          case 'htmlContent':
            return (
              <HtmlContentBlock
                key={index}
                title={block.title}
                htmlContent={block.htmlContent}
                customCss={block.customCss}
                customJs={block.customJs}
              />
            );
          
          case 'richText':
            return (
              <RichTextBlock
                key={index}
                content={block.content}
              />
            );
          
          case 'testimonialsGrid':
            return (
              <TestimonialsGridBlock
                key={index}
                title={block.title}
                testimonials={block.testimonials || []}
              />
            );
          
          case 'avantiHero':
            return (
              <AvantiHeroBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                ctaText={block.ctaText}
                ctaUrl={block.ctaUrl}
                heroImage={block.heroImage}
              />
            );
          
          case 'logoMarquee':
            return (
              <LogoMarqueeBlock
                key={index}
                logos={block.logos || []}
              />
            );
          
          case 'servicesGrid':
            return (
              <ServicesGridBlock
                key={index}
                title={block.title}
                services={block.services || []}
              />
            );
          
          case 'aboutSection':
            return (
              <AboutSectionBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                description={block.description}
                ctaText={block.ctaText}
                ctaUrl={block.ctaUrl}
                teamMember={block.teamMember}
              />
            );
          
          case 'contactSection':
            return (
              <ContactSectionBlock
                key={index}
                eyebrow={block.eyebrow}
                title={block.title}
                description={block.description}
                phone={block.phone}
                formTitle={block.formTitle}
                teamMember={block.teamMember}
              />
            );
          
          case 'hero':
            return (
              <div key={index} className="hero-block">
                <h1>{block.title}</h1>
                {block.subtitle && <h2>{block.subtitle}</h2>}
                {block.lead && <p>{block.lead}</p>}
                {block.ctaLabel && block.ctaUrl && (
                  <a href={block.ctaUrl} className="cta-button">
                    {block.ctaLabel}
                  </a>
                )}
              </div>
            );
          
          case 'services':
            return (
              <div key={index} className="services-block">
                {block.introText && <p>{block.introText}</p>}
                <div className="services-grid">
                  {block.services?.map((service: any, serviceIndex: number) => (
                    <div key={serviceIndex} className="service-item">
                      <h3>{service.title}</h3>
                      {service.description && <p>{service.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            );
          
          case 'navigation':
            return (
              <NavigationBlock
                key={index}
                logo={block.logo}
                awardBadge={block.awardBadge}
                tooltip={block.tooltip}
                menuItems={block.menuItems || []}
                phoneNumber={block.phoneNumber}
                phoneUrl={block.phoneUrl}
              />
            );

          case 'testimonials':
            return (
              <TestimonialsBlock
                key={index}
                title={block.title}
                testimonials={block.testimonials || []}
              />
            );

          case 'videoSection':
            return (
              <VideoSectionBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                videoFile={block.videoFile}
                videoPoster={block.videoPoster}
                playButtonIcon={block.playButtonIcon}
              />
            );

          case 'platformSection':
            return (
              <PlatformSectionBlock
                key={index}
                eyebrow={block.eyebrow}
                title={block.title}
                description={block.description}
                images={block.images || []}
              />
            );

          case 'additionalServices':
            return (
              <AdditionalServicesBlock
                key={index}
                title={block.title}
                services={block.services || []}
              />
            );

          case 'industries':
            return (
              <IndustriesBlock
                key={index}
                eyebrow={block.eyebrow}
                title={block.title}
                industries={block.industries || []}
              />
            );

          case 'footer':
            return (
              <FooterBlock
                key={index}
                logo={block.logo}
                socialMedia={block.socialMedia || []}
                awards={block.awards || []}
                contactInfo={block.contactInfo}
                legalLinks={block.legalLinks || []}
                copyrightText={block.copyrightText}
              />
            );

          case 'pricingHero':
            return (
              <PricingHeroBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                onboardingPrice={block.onboardingPrice}
                ctaText={block.ctaText}
                ctaUrl={block.ctaUrl}
                packages={block.packages || []}
              />
            );

          case 'servicePackages':
            console.log('Rendering servicePackages block:', block);
            console.log('Packages data:', block.packages);
            return (
              <ServicePackagesBlock
                key={index}
                packages={block.packages || []}
              />
            );

          case 'testServicePackages':
            return <TestServicePackagesBlock key={index} />;

          case 'packageIncludes':
            return (
              <PackageIncludesBlock
                key={index}
                title={block.title}
                features={block.features || []}
              />
            );

          case 'additionalOptions':
            return (
              <AdditionalOptionsBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                options={block.options || []}
                footerNotes={block.footerNotes || []}
              />
            );

          default:
            console.warn(`Unknown block type: ${block.blockType}`);
            return (
              <div key={index} className="unknown-block" style={{padding: '20px', background: '#f0f0f0', margin: '10px 0'}}>
                <p><strong>Unknown block type:</strong> {block.blockType}</p>
                <pre>{JSON.stringify(block, null, 2)}</pre>
              </div>
            );
        }
      })}
    </div>
  );
};
