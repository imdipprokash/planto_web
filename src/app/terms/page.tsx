import { TermsPage } from "@/views/TermsPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/terms");

export default function Page() {
  return <TermsPage />;
}
