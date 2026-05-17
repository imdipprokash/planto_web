'use client';

import { Camera, BookOpen, Bell, Users, Sparkles, Shield, Check, Star, Play, Download } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function FeaturesPage() {
  const allFeatures = [
    {
      icon: Camera,
      title: "Advanced AI Identification",
      description: "Our cutting-edge AI technology can identify over 10,000 plant species with 95% accuracy. Simply snap a photo and get instant results.",
      benefits: [
        "Identifies 10,000+ plant species",
        "95% accuracy rate",
        "Works offline after initial download",
        "Regular model updates"
      ]
    },
    {
      icon: BookOpen,
      title: "Comprehensive Plant Care Guides",
      description: "Access detailed care instructions for every plant in our database. Learn about watering schedules, sunlight needs, soil requirements, and more.",
      benefits: [
        "Detailed watering schedules",
        "Sunlight and temperature requirements",
        "Soil and fertilizer recommendations",
        "Seasonal care tips"
      ]
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never forget to water your plants again. Set up personalized reminders based on each plant's specific needs.",
      benefits: [
        "Customizable watering reminders",
        "Fertilizing schedule notifications",
        "Pruning and repotting alerts",
        "Seasonal care reminders"
      ]
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of plant enthusiasts. Share photos, ask questions, and get advice from experienced gardeners.",
      benefits: [
        "Active community forum",
        "Expert advice available",
        "Share your plant journey",
        "Learn from others' experiences"
      ]
    },
    {
      icon: Sparkles,
      title: "Disease Detection",
      description: "Identify plant diseases and pests early. Get treatment recommendations to keep your plants healthy and thriving.",
      benefits: [
        "Early disease detection",
        "Pest identification",
        "Treatment recommendations",
        "Prevention tips"
      ]
    },
    {
      icon: Shield,
      title: "Plant Health Monitoring",
      description: "Track your plant's health over time with our comprehensive monitoring tools. Get insights and recommendations.",
      benefits: [
        "Health score tracking",
        "Growth progress monitoring",
        "Personalized care insights",
        "Photo timeline of your plants"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute -top-24 -left-20 h-96 w-96 bg-brand-300/40 blob-mask animate-blob" />
          <div className="absolute -bottom-32 right-0 h-80 w-80 bg-emerald-300/30 blob-mask animate-blob [animation-delay:-6s]" />
        </div>
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Features
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl">
              Powerful Features for{" "}
              <span className="text-gradient">Plant Lovers</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Everything you need to identify, care for, and nurture your plants. Backed by advanced AI and a passionate community.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {allFeatures.map((feature, index) => (
              <Reveal key={index} delay={(index % 2) * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 transition-colors duration-300 group-hover:bg-brand-100/60" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <div className="mt-6 space-y-3 border-t border-border pt-6">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-foreground/80">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-600 text-white shadow-float">
              <div className="absolute -left-24 -top-24 h-80 w-80 bg-white/10 blob-mask animate-blob" />
              <div className="absolute -bottom-28 right-10 h-72 w-72 bg-emerald-300/20 blob-mask animate-blob [animation-delay:-7s]" />
              <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

              <div className="relative px-8 py-16 text-center sm:px-12 lg:px-16 lg:py-20">
                <h2 className="mx-auto max-w-2xl text-4xl text-white sm:text-5xl">
                  Ready to Experience These Features?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                  Join over 2999 plant enthusiasts already using Planto
                </p>

                <div className="mt-10 flex justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plantgenius"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                    target="_blank"
                  >
                    <Play className="h-5 w-5 fill-brand-600 text-brand-600" />
                    Download Now
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/85">
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
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
