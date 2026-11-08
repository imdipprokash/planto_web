import { PricingPage } from "@/views/PricingPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/pricing");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Pricing" path="/pricing" />
      <PricingPage />
    </>
  );
}
