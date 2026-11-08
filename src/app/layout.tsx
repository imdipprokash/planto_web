import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { PLAY_STORE_URL, SITE_NAME, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Planto: Identify Plants by Photo | Free Plant ID & Care App",
  description:
    "Identify any plant in seconds with Planto. Snap a photo to get instant plant ID, disease detection and personalized care reminders.",
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Planto: identify any plant in seconds" }],
    title: "Planto: Identify Plants by Photo | Free Plant ID & Care App",
    description:
      "Identify any plant in seconds with Planto. Snap a photo to get instant plant ID, disease detection and personalized care reminders.",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
    title: "Planto: Identify Plants by Photo",
    description:
      "Instant plant identification, disease detection and care reminders in one app.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "MobileApplication",
      name: SITE_NAME,
      operatingSystem: "ANDROID",
      applicationCategory: "LifestyleApplication",
      description:
        "Plant identification and care app: identify plants from a photo, detect plant diseases and get care reminders.",
      url: SITE_URL,
      downloadUrl: PLAY_STORE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
