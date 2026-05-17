'use client';

import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Home Gardener",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "This app is a game-changer! I've identified so many plants in my garden and learned how to care for them properly. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Landscape Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "As a professional, I need accurate plant identification. This app delivers every time with impressive accuracy and detailed information.",
  },
  {
    name: "Emma Davis",
    role: "Plant Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "I love building my plant collection in the app. The care reminders are incredibly helpful and have helped me keep my plants thriving!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            Testimonials
          </span>
          <h2 className="mt-5 text-4xl sm:text-5xl">
            Loved by <span className="text-gradient">Plant Enthusiasts</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our users have to say
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.name} delay={index * 110}>
              <figure className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <Quote className="h-9 w-9 text-brand-200 transition-colors group-hover:text-brand-300" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4.5 w-4.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-foreground/85">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {t.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
