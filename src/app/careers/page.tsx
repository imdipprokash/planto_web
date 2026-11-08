import { CareersPage } from "@/views/CareersPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/careers");

export default function Page() {
  return <CareersPage />;
}
