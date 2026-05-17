'use client';

import { Heart, Target, Users, Zap, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Plants",
      description: "We believe everyone can be a plant parent. Our mission is to make plant care accessible, enjoyable, and successful for all."
    },
    {
      icon: Target,
      title: "Accuracy First",
      description: "We're committed to providing the most accurate plant identifications and care information, backed by science and expert knowledge."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our growing community of 2999+ plant enthusiasts helps us improve and expand our plant database every day."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to make plant identification fast, accurate, and accessible to everyone."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Planto was born from a simple idea: make plant care easier for everyone. Started as a side project by plant enthusiasts."
    },
    {
      year: "2024",
      title: "Launch & Growth",
      description: "Officially launched on Google Play Store. Reached 500 downloads in the first month and received overwhelming positive feedback."
    },
    {
      year: "2024",
      title: "Milestone Achievement",
      description: "Crossed 2999 monthly active users and 500+ successful plant identifications. Expanded plant database to 10,000+ species."
    },
    {
      year: "2025",
      title: "Future Forward",
      description: "Working on iOS version, community features, and advanced AI capabilities. Your feedback drives our roadmap!"
    }
  ];

  const team = [
    {
      role: "Founder & Developer",
      description: "Passionate plant lover and software engineer combining technology with nature to help people care for plants."
    },
    {
      role: "AI & Machine Learning",
      description: "Continuously improving our identification algorithms to provide the most accurate results across thousands of species."
    },
    {
      role: "Community Manager",
      description: "Building and nurturing our community of plant enthusiasts, ensuring everyone gets the help they need."
    },
    {
      role: "Content Creator",
      description: "Researching and writing detailed plant care guides to help you succeed with every plant in your collection."
    }
  ];

  const stats = [
    { value: "2999+", label: "Active Users" },
    { value: "500+", label: "Identifications" },
    { value: "10,000+", label: "Plant Species" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute -top-24 -left-20 h-96 w-96 bg-brand-300/40 blob-mask animate-blob" />
          <div className="absolute -top-10 right-0 h-80 w-80 bg-emerald-300/30 blob-mask animate-blob [animation-delay:-6s]" />
        </div>
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <Sparkles className="h-4 w-4" />
              About Planto
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl">
              Growing a greener world,{" "}
              <span className="text-gradient">one plant at a time</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We&apos;re on a mission to make plant care accessible to everyone through the power of AI and community.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
                >
                  <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Our Story
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              From a weekend idea to{" "}
              <span className="text-gradient">a daily habit</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="mx-auto max-w-3xl space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Planto was born from a simple frustration: trying to identify a mysterious plant at a local nursery and wishing there was an easier way. As plant enthusiasts and technology lovers, we knew there had to be a better solution.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We started building Planto with the goal of making plant identification instant, accurate, and accessible to everyone. What began as a weekend project quickly grew into a full-fledged app that thousands of people now use daily.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, Planto serves over 2999 monthly active users who have successfully identified and learned to care for more than 500 plants. We&apos;re proud to be part of your plant journey, whether you&apos;re a beginner or an experienced gardener.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Our Values
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              What we <span className="text-gradient">stand for</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide every decision we make.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={index} delay={(index % 2) * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 transition-colors duration-300 group-hover:bg-brand-100/60" />
                  <div className="relative">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Our Journey
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Milestones along <span className="text-gradient">the way</span>
            </h2>
          </Reveal>
          <div className="mx-auto max-w-3xl">
            {milestones.map((milestone, index) => (
              <Reveal key={index} delay={(index % 2) * 90}>
                <div className="flex gap-6 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-600 text-sm font-semibold text-white shadow-brand">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="mt-3 w-px flex-grow bg-gradient-to-b from-brand-300 to-brand-100" />
                    )}
                  </div>
                  <div className="flex-grow pb-12">
                    <div className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                      <h3 className="mb-3 text-xl">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              The Team
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re a small but passionate team dedicated to helping you succeed with your plants.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={index} delay={(index % 2) * 90}>
                <div className="group flex h-full items-start gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="h-16 w-16 flex-shrink-0 rounded-2xl bg-gradient-to-br from-brand-400 to-emerald-500 shadow-soft transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="mb-3 text-xl">{member.role}</h3>
                    <p className="text-muted-foreground">{member.description}</p>
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
              <div className="relative px-8 py-16 text-center sm:px-12 md:py-20">
                <h2 className="text-4xl text-white sm:text-5xl">
                  Join Our Growing Community
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
                  Be part of the journey as we help plant lovers worldwide
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plantgenius"
                    target="_blank"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    Download Planto
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
