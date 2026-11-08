import PrivacyPage from "@/views/PrivacyPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/privacy");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Privacy Policy" path="/privacy" />
      <PrivacyPage />
    </>
  );
}
