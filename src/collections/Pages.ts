import type { CollectionConfig } from 'payload';

import { SimpleText } from '../blocks/SimpleText';
import { HtmlContent } from '../blocks/HtmlContent';
import { AvantiHero } from '../blocks/AvantiHero';
import { LogoMarquee } from '../blocks/LogoMarquee';
import { Testimonials } from '../blocks/Testimonials';
import { TestimonialsGrid } from '../blocks/TestimonialsGrid';
import { ServicesGrid } from '../blocks/ServicesGrid';
import { AdditionalServices } from '../blocks/AdditionalServices';
import { AdditionalOptions } from '../blocks/AdditionalOptions';
import { AboutSection } from '../blocks/AboutSection';
import { VideoSection } from '../blocks/VideoSection';
import { PlatformSection } from '../blocks/PlatformSection';
import { Industries } from '../blocks/Industries';
import { ContactSection } from '../blocks/ContactSection';
import { Navigation } from '../blocks/Navigation';
import { Footer } from '../blocks/Footer';
import { PricingHero } from '../blocks/PricingHero';
import { ServicePackages } from '../blocks/ServicePackages';
import { PackageIncludes } from '../blocks/PackageIncludes';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        Navigation,
        AvantiHero,
        PricingHero,
        ServicePackages,
        PackageIncludes,
        AdditionalOptions,
        LogoMarquee,
        Testimonials,
        TestimonialsGrid,
        AboutSection,
        ServicesGrid,
        AdditionalServices,
        VideoSection,
        PlatformSection,
        Industries,
        ContactSection,
        Footer,
        HtmlContent,
        SimpleText,
      ],
    },
  ],
};
