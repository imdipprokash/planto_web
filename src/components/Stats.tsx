'use client';

import { Users, Camera, Star, Globe } from "lucide-react";
import { Reveal } from "./Reveal";

const STATS = [
  { icon: Users, value: "2999+", label: "Active Users Monthly", tint: "from-brand-500 to-emerald-500" },
  { icon: Camera, value: "500+", label: "Daily Identifications", tint: "from-sky-500 to-cyan-500" },
  { icon: Star, value: "4.8", label: "Average Rating", tint: "from-amber-500 to-yellow-500" },
  { icon: Globe, value: "50+", label: "Countries", tint: "from-violet-500 to-fuchsia-500" },
];

export function Stats() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl">
            Trusted by Plant Lovers{" "}
            <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our growing community of botanists and gardeners
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 90}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <div
                  className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r ${stat.tint} opacity-0 transition-opacity group-hover:opacity-100`}
                />
                <div
                  className={`mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.tint} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}
                >
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
