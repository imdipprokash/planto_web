"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_URL =
  "https://play.google.com/store/apps/details?id=com.plantgenius";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

const RESOURCES = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > lastY.current && y > 80) setHidden(true);
      else if (y < lastY.current) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-page">
        <div
          className={`mt-3 flex h-16 items-center justify-between gap-4 rounded-2xl border px-4 transition-all duration-300 sm:px-6 ${
            scrolled || mobileOpen
              ? "glass border-white/60 shadow-card"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Planto home"
          >
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden">
              <img
                src="https://play-lh.googleusercontent.com/8Fpxd6sLTWy6saCYZXR-Hyl0I6t6gy6drPktH9n8tSIO1QP4PIW7Ji4QKqOg8vBF4jA=w480-h960-rw"
                alt="Planto"
                width={40}
                height={40}
                className="h-full w-full squircle object-contain"
              />
            </span>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Planto
            </span>
          </Link>

          <nav
            className="mr-auto ml-6 hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-muted-foreground hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-700"
                aria-expanded={resourcesOpen}
                onClick={() => setResourcesOpen((v) => !v)}
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-[calc(100%+0.5rem)] min-w-52 rounded-2xl border border-border bg-popover p-2 shadow-float transition-all duration-200 ${
                  resourcesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0"
                }`}
              >
                {RESOURCES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              Download App
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-[34rem]" : "max-h-0"
          }`}
        >
          <div className="glass mt-2 flex flex-col rounded-2xl border border-white/60 p-3 shadow-card">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 font-medium text-foreground transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Resources
            </div>
            {RESOURCES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-brand"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
