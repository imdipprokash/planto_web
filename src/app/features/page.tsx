import { FeaturesPage } from "@/views/FeaturesPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/features");

export default function Page() {
  return <FeaturesPage />;
}
