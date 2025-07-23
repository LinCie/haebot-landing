"use client";

import dynamic from "next/dynamic";
import HeroSection from "./sections/hero";
import {
  AboutSectionSkeleton,
  CarouselSectionSkeleton,
  ProductSectionSkeleton,
  LatestProductSectionSkeleton,
  WarrantySectionSkeleton,
  CustomerSectionSkeleton,
  FeatureSectionSkeleton,
  FaqSectionSkeleton,
  CtaSectionSkeleton,
  ContactSectionSkeleton,
} from "./skeletons";

const AboutSection = dynamic(
  () => import("./sections/about").then((mod) => mod),
  { loading: () => <AboutSectionSkeleton /> },
);

const CarouselSection = dynamic(
  () => import("./sections/carousel").then((mod) => mod),
  { loading: () => <CarouselSectionSkeleton /> },
);

const ProductSection = dynamic(
  () => import("./sections/product").then((mod) => mod),
  { loading: () => <ProductSectionSkeleton /> },
);

const LatestProductSection = dynamic(
  () => import("./sections/latest-product").then((mod) => mod),
  { loading: () => <LatestProductSectionSkeleton /> },
);

const WarrantySection = dynamic(
  () => import("./sections/warranty").then((mod) => mod),
  { loading: () => <WarrantySectionSkeleton /> },
);

const CustomerSection = dynamic(
  () => import("./sections/customer").then((mod) => mod),
  { loading: () => <CustomerSectionSkeleton /> },
);

const FeatureSection = dynamic(
  () => import("./sections/feature").then((mod) => mod),
  { loading: () => <FeatureSectionSkeleton /> },
);

const FaqSection = dynamic(() => import("./sections/faq").then((mod) => mod), {
  loading: () => <FaqSectionSkeleton />,
});

const CtaSection = dynamic(() => import("./sections/cta").then((mod) => mod), {
  loading: () => <CtaSectionSkeleton />,
});

const ContactSection = dynamic(
  () => import("./sections/contact").then((mod) => mod),
  { loading: () => <ContactSectionSkeleton /> },
);

export function LandingPage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />

      <AboutSection />

      <FeatureSection />

      <CarouselSection />

      <LatestProductSection />

      <ProductSection />

      <WarrantySection />

      <CustomerSection />

      <FaqSection />

      <CtaSection />

      <ContactSection />
    </div>
  );
}
