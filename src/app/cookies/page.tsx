import { CookiePage } from "@/views/CookiePage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/cookies");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Cookie Policy" path="/cookies" />
      <CookiePage />
    </>
  );
}
