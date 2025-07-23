import { Skeleton } from "@/components/ui/skeleton";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SectionSkeleton = ({
  children,
  hasTitle = true,
}: {
  children: React.ReactNode;
  hasTitle?: boolean;
}) => (
  <Section>
    <div className="container mx-auto max-w-5xl px-4">
      {hasTitle && (
        <div className="mb-8 flex flex-col items-center text-center">
          <Skeleton className="mb-4 h-8 w-1/2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      )}
      {children}
    </div>
  </Section>
);

export const AboutSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-64 w-full rounded-lg" />
    </div>
  </SectionSkeleton>
);

export const CarouselSectionSkeleton = () => (
  <SectionSkeleton hasTitle={false}>
    <Skeleton className="h-[50vh] w-full" />
  </SectionSkeleton>
);

export const ProductSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center space-y-2">
          <Skeleton className="h-24 w-24 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

export const LatestProductSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-48 w-full" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  </SectionSkeleton>
);

export const WarrantySectionSkeleton = () => (
  <SectionSkeleton hasTitle={false}>
    <Skeleton className="h-32 w-full rounded-lg" />
  </SectionSkeleton>
);

export const CustomerSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <Skeleton className="h-64 w-full rounded-lg md:h-96" />
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-lg" />
        ))}
      </div>
    </div>
  </SectionSkeleton>
);

export const FeatureSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col items-center space-y-2 text-center"
        >
          <Skeleton className="h-16 w-16 rounded-full" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-40" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

export const FaqSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex justify-between rounded-lg border p-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-6" />
        </div>
      ))}
    </div>
  </SectionSkeleton>
);

export const CtaSectionSkeleton = () => (
  <SectionSkeleton hasTitle={false}>
    <Skeleton className="h-48 w-full" />
  </SectionSkeleton>
);

export const ContactSectionSkeleton = () => (
  <SectionSkeleton>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="col-span-1 md:col-span-2">
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-4 w-48" />
      </div>
    </div>
  </SectionSkeleton>
);
