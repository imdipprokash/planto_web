'use client';

import { Camera, BookOpen, Bell, Shield, Zap, Heart, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";

const FEATURES = [
  { icon: Camera, title: "Instant Identification", description: "Snap a photo and get instant results with 99% accuracy powered by advanced AI technology." },
  { icon: BookOpen, title: "Detailed Plant Info", description: "Access comprehensive information including care guides, growing tips, and fascinating facts." },
  { icon: Bell, title: "Care Reminders", description: "Never forget to water or fertilize with personalized care reminders for all your plants." },
  { icon: Shield, title: "Disease Detection", description: "Identify plant diseases and pests early with AI-powered diagnosis and treatment recommendations." },
  { icon: Zap, title: "Works Offline", description: "Identify plants even without an internet connection with our offline database." },
  { icon: Heart, title: "Plant Collection", description: "Build your personal plant collection and track their growth journey over time." },
];

const AI_POINTS = [
  "Recognizes over 10,000 plant species",
  "Continuously improving with user feedback",
  "Fast results in under 2 seconds",
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="container-page">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            Features
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl">
            Everything You Need to{" "}
            <span className="text-gradient">Care for Plants</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From identification to care guides, we&apos;ve got all the tools you
            need to become a plant expert.
          </p>
        </Reveal>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 transition-colors duration-300 group-hover:bg-brand-100/60" />
                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-200/60 bg-gradient-to-br from-brand-600 to-emerald-600 text-white shadow-float">
            <div className="absolute -right-20 -top-24 h-72 w-72 bg-white/10 blob-mask animate-blob" />
            <div className="grid items-center gap-12 p-8 lg:grid-cols-2 lg:p-16">
              <div>
                <h3 className="text-3xl sm:text-4xl">
                  Powered by Advanced AI Technology
                </h3>
                <p className="mt-5 text-lg text-white/85">
                  Our machine learning models have been trained on millions of
                  plant images to provide you with the most accurate
                  identification results possible.
                </p>
                <ul className="mt-8 space-y-4">
                  {AI_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-white/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-white/20 blur-xl" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYXZlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NjM3MTM4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Plant leaves"
                  className="h-auto w-full rounded-3xl shadow-float"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
