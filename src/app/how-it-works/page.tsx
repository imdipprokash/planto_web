import { HowItWorksPage } from "@/views/HowItWorksPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/how-it-works");

export default function Page() {
  return <HowItWorksPage />;
}
