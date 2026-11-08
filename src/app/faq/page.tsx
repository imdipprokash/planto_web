import { FAQPage } from "@/views/FAQPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/faq");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="FAQ" path="/faq" />
      <FAQPage />
    </>
  );
}
