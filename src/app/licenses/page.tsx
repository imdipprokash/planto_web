import { LicensesPage } from "@/views/LicensesPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/licenses");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Licenses" path="/licenses" />
      <LicensesPage />
    </>
  );
}
