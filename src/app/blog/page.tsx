import { BlogPage } from "@/views/BlogPage";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("/blog");

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd name="Blog" path="/blog" />
      <BlogPage />
    </>
  );
}
