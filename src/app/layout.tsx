import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Planto — Plant Identification App",
  description:
    "Your personal plant identification and care companion. Trusted by thousands worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
