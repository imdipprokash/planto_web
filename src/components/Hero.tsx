'use client';

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";
import { Sparkles, Camera, Leaf, ArrowRight, Star } from "lucide-react";

const APP_URL =
  "https://play.google.com/store/apps/details?id=com.plantgenius";

const STATS = [
  { value: "2999+", label: "Monthly Users" },
  { value: "500+", label: "Plants Identified" },
  { value: "99%", label: "Accuracy" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] bg-brand-300/50 blob-mask animate-blob" />
        <div className="absolute -top-20 right-[-8rem] h-[26rem] w-[26rem] bg-emerald-200/50 blob-mask animate-blob [animation-delay:-6s]" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-soft backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Trusted by 2999+ plant lovers
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Identify Any Plant
                <span className="block text-gradient">in Seconds</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
                Simply snap a photo and discover the name, care tips, and
                fascinating facts about any plant. Join thousands of gardeners
                and nature enthusiasts.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-base font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:shadow-float"
                >
                  Download App
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/70 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white"
                >
                  See How It Works
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                {STATS.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {s.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                    {i < STATS.length - 1 && (
                      <div className="hidden h-12 w-px bg-border sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-400/40 via-emerald-300/30 to-transparent blur-2xl" />
              <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rotate-3 rounded-[2rem] bg-brand-200/60" />
              <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-float">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1690553562074-210d110466d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGlkZW50aWZpY2F0aW9uJTIwcGhvbmV8ZW58MXx8fHwxNzYzNzIxMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Plant Identification App"
                  className="h-auto w-full"
                />
              </div>

              <div className="absolute -left-6 top-10 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-card backdrop-blur animate-float">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    Catharanthus roseus
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Madagascar periwinkle
                  </div>
                </div>
              </div>

              <div className="absolute -right-5 bottom-12 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-card backdrop-blur animate-float [animation-delay:-3s]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-foreground">
                    99% match <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Identified in 1.2s
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
