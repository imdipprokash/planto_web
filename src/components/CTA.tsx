'use client';

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";
import { Star, Play, Download } from "lucide-react";

const APP_URL =
  "https://play.google.com/store/apps/details?id=com.plantgenius";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-600 shadow-float">
            <div className="absolute -left-24 -top-24 h-80 w-80 bg-white/10 blob-mask animate-blob" />
            <div className="absolute -bottom-28 right-10 h-72 w-72 bg-emerald-300/20 blob-mask animate-blob [animation-delay:-7s]" />
            <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <h2 className="text-4xl text-white sm:text-5xl">
                  Start Identifying Plants Today
                </h2>
                <p className="mt-6 text-lg text-white/85">
                  Join 2999+ monthly active users and discover the world of
                  plants. Download now and get started for free.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    <Play className="h-5 w-5 fill-brand-600 text-brand-600" />
                    Get it on Google Play
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/85">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                    <span className="font-medium">4.8 / 5 Rating</span>
                  </div>
                  <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
                  <div className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    <span className="font-medium">Free to Download</span>
                  </div>
                </div>
              </div>

              <div className="relative hidden h-full min-h-80 lg:block">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-700/40" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679326641325-88ad342065ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBwbGFudHN8ZW58MXx8fHwxNzYzNjY5MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Botanical garden"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
