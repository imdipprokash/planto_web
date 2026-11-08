import { AboutPage } from "@/views/AboutPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/about");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="About" path="/about" />
      <AboutPage />
    </>
  );
}
