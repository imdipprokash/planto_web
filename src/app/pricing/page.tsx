import { PricingPage } from "@/views/PricingPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/pricing");

export default function Page() {
  return <PricingPage />;
}
