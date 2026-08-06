export interface ActionButton {
  text: string;
  href: string;
}

export interface ProductBannerData {
  titlePrefix?: string;
  titleHighlight?: string;
  highlightColor?: string;
  themeColor?: string;
  tagline?: string;
  description?: string;
  highlights?: string[];
  primaryCta?: ActionButton;
  secondaryCta?: ActionButton;
  mockupBadge?: {
    title: string;
    subtitle: string;
  };
  mockupImage?: string;
}

export interface FeatureItem {
  title: string;
  badge?: string;
  description: string;
  icon?: string; // Icon identifier like "shield", "folder", "activity", "cloud", "zap", "truck", "ship", etc.
}

export interface FeaturesData {
  badge?: string;
  heading: string;
  description: string;
  items: FeatureItem[];
}

export interface CounterData {
  target: number;
  suffix?: string;
  description: string;
}

export interface AudienceItem {
  title: string;
  icon?: string; // Icon identifier like "users", "globe", "truck", "ship", "anchor", "box", etc.
}

export interface TargetAudienceData {
  badge?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  description: string;
  trustedByText?: string;
  audiences: AudienceItem[];
  image?: string;
}

export interface LogoCarouselData {
  title?: string;
  logos?: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  title: string;
}

export interface CTAData {
  heading: string;
  description: string;
  primaryCta?: ActionButton;
  secondaryCta?: ActionButton;
}

export interface SEZFeature {
  title: string;
  description: string;
}

export interface SEZData {
  badge?: string;
  heading: string;
  description: string;
  features?: SEZFeature[];
  benefits?: string[];
  image?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  aliases?: string[];
  titlePrefix: string;
  titleHighlight: string;
  tagline: string;
  shortDescription: string;
  logo: string;
  mockupImage: string;
  themeColor?: string;
  banner: ProductBannerData;
  features: FeaturesData;
  sez?: SEZData;
  counter: CounterData;
  targetAudience: TargetAudienceData;
  logoCarousel?: LogoCarouselData;
  testimonials?: TestimonialItem[];
  cta: CTAData;
}
