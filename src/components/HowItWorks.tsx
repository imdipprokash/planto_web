'use client';

import { Camera, Sparkles, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: Camera, step: "01", title: "Take a Photo", description: "Snap a clear picture of any plant, flower, or leaf you want to identify." },
  { icon: Sparkles, step: "02", title: "Get Instant Results", description: "Our AI analyzes the image and provides accurate identification within seconds." },
  { icon: BookOpen, step: "03", title: "Learn & Care", description: "Access detailed care guides, tips, and add the plant to your personal collection." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white to-brand-50/60" />
      <div className="container-page">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            How It Works
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl">
            Identify Any Plant in{" "}
            <span className="text-gradient">Three Simple Steps</span>
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-0 right-0 top-[4.5rem] hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-3">
            {STEPS.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="group relative h-full rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                  <div className="relative mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-brand transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-9 w-9" />
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-sm font-bold text-brand-600 shadow-soft">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
