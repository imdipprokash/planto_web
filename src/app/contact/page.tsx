import { ContactPage } from "@/views/ContactPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/contact");

export default function Page() {
  return <ContactPage />;
}
