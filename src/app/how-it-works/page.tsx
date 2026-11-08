import { HowItWorksPage } from "@/views/HowItWorksPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/how-it-works");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="How It Works" path="/how-it-works" />
      <HowItWorksPage />
    </>
  );
}
