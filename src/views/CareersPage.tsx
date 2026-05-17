'use client';

import { Briefcase, Heart, Zap, Users, Globe, Clock, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function CareersPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Nature",
      description: "We love plants and technology. If you share this passion, you'll fit right in."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We're constantly pushing boundaries and exploring new ways to help plant lovers."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Our users are at the heart of everything we do. We build for them."
    }
  ];

  const positions = [
    {
      title: "Full Stack Developer",
      type: "Full-time",
      location: "Remote",
      description: "Help us build and scale Planto's core platform. Experience with React, Node.js, and cloud infrastructure required."
    },
    {
      title: "Machine Learning Engineer",
      type: "Full-time",
      location: "Remote",
      description: "Improve our plant identification AI. Experience with TensorFlow, computer vision, and model optimization needed."
    },
    {
      title: "Community Manager",
      type: "Part-time",
      location: "Remote",
      description: "Build and nurture our growing community. Passion for plants and social media experience required."
    },
    {
      title: "Botanist / Content Creator",
      type: "Contract",
      location: "Remote",
      description: "Create accurate, engaging plant care content. Botany degree or equivalent experience required."
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote First",
      description: "Work from anywhere in the world. We value output, not location."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Set your own schedule. We trust you to manage your time."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Learn new skills and grow with the company as we scale."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Your work directly helps thousands of plant lovers worldwide."
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
          <div className="absolute -top-10 right-0 h-80 w-80 bg-emerald-300/30 blob-mask animate-blob [animation-delay:-6s]" />
        </div>
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <Sparkles className="h-4 w-4" />
              Careers
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl">
              Join Our{" "}
              <span className="text-gradient">Growing Team</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Help us make plant care accessible to everyone. We&apos;re a small, passionate team building something special.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Our Culture
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              What We <span className="text-gradient">Value</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The things that matter most to us as a team.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={index} delay={index * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 transition-colors duration-300 group-hover:bg-brand-100/60" />
                  <div className="relative">
                    <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-4 text-xl">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Perks
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Why Work <span className="text-gradient">With Us</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We take care of our team so they can do their best work.
            </p>
          </Reveal>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal key={index} delay={(index % 2) * 90}>
                <div className="group flex h-full items-start gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="inline-flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Open Roles
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Open <span className="text-gradient">Positions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find the role where you can make the biggest impact.
            </p>
          </Reveal>
          <div className="mx-auto max-w-4xl space-y-6">
            {positions.map((position, index) => (
              <Reveal key={index} delay={(index % 2) * 90}>
                <div className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-3 text-xl">{position.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
                          {position.type}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:support@plantoapp.info?subject=Application for ${position.title}`}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-base font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:shadow-float"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-5 border-t border-border pt-5 text-muted-foreground">
                    {position.description}
                  </p>
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
                <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white shadow-soft">
                  <Briefcase className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-4xl text-white sm:text-5xl">
                  Don&apos;t See a Perfect Fit?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
                  We&apos;re always looking for talented people. Send us your resume and let&apos;s talk!
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href="mailto:support@plantoapp.info"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    Get in Touch
                    <ArrowRight className="h-5 w-5" />
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
