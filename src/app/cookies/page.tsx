import { CookiePage } from "@/views/CookiePage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/cookies");

export default function Page() {
  return <CookiePage />;
}
