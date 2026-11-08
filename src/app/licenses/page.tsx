import { LicensesPage } from "@/views/LicensesPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/licenses");

export default function Page() {
  return <LicensesPage />;
}
