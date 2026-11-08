import type { Metadata } from "next";
import { ROUTES } from "./site";

export function pageMetadata(path: string): Metadata {
  const r = ROUTES.find((x) => x.path === path);
  if (!r) throw new Error(`No SEO entry for ${path}`);
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: path },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
    openGraph: {
      title: r.title,
      description: r.description,
      url: path,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Planto: identify any plant in seconds" }],
    },
  };
}
