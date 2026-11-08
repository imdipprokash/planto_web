import { CareersPage } from "@/views/CareersPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/careers");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Careers" path="/careers" />
      <CareersPage />
    </>
  );
}
