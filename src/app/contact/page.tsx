import { ContactPage } from "@/views/ContactPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Contact" path="/contact" />
      <ContactPage />
    </>
  );
}
