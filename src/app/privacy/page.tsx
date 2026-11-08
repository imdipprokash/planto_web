import PrivacyPage from "@/views/PrivacyPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/privacy");

export default function Page() {
  return <PrivacyPage />;
}
