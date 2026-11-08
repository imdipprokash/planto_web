import { TermsPage } from "@/views/TermsPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/terms");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Terms of Service" path="/terms" />
      <TermsPage />
    </>
  );
}
