import { BlogPage } from "@/views/BlogPage";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/blog");

export default function Page() {
  return <BlogPage />;
}
