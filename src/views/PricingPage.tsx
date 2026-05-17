'use client';

import { Check, X, Sparkles, Play, Star, Download } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for casual plant enthusiasts",
      features: [
        "3 plant identifications per day",
        "Plant ID information",
      ],
      notIncluded: [
        "Unlimited plant scans",
        "Care tips",
        "Plant disease detection",
      ],
      cta: "Get Started",
      highlighted: false,
      comingSoon: false,
    },
    {
      name: "Pro",
      price: "$2.49",
      period: "per month",
      description: "For serious plant lovers who want it all",
      features: [
        "Unlimited plant scans",
        "Plant ID information",
        "Care tips",
        "Plant disease detection",
      ],
      notIncluded: [],
      cta: "Get Pro",
      highlighted: true,
      comingSoon: false,
    },
    {
      name: "Yearly",
      price: "$24",
      period: "per year",
      description: "Best value — billed annually",
      features: [
        "Everything in Pro",
        "Unlimited plant scans",
        "Care tips",
        "Plant disease detection",
      ],
      notIncluded: [],
      cta: "Coming Soon",
      highlighted: false,
      comingSoon: true,
    },
  ];

  const faqs = [
    {
      question: "What does the Free plan include?",
      answer:
        "The Free plan gives you 3 plant identifications per day with full plant ID information — no credit card required.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and Google Pay through the Google Play Store.",
    },
    {
      question: "Can I switch plans anytime?",
      answer:
        "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time from within the app.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your purchase, no questions asked.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "Your plant collection and data remain accessible even if you cancel Pro. You can always export your data.",
    },
    {
      question: "When will the Yearly plan be available?",
      answer:
        "The Yearly plan ($24/year) is coming soon. It includes everything in Pro — unlimited plant scans, care tips, and plant disease detection — at the best annual value.",
    },
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
              Pricing
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl">
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Choose the plan that's right for you. All plans include our core
              plant identification features.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={index} delay={index * 90}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "border-2 border-brand-500 bg-card shadow-float ring-2 ring-brand-500/20 lg:scale-105 lg:p-10"
                      : "border border-border bg-card shadow-soft hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
                  }`}
                >
                  {plan.highlighted && (
                    <>
                      <div className="absolute -right-16 -top-16 h-44 w-44 bg-brand-100/70 blob-mask" />
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-emerald-500 px-4 py-1.5 text-sm font-semibold text-white shadow-brand">
                          <Sparkles className="h-4 w-4" />
                          Most Popular
                        </span>
                      </div>
                    </>
                  )}

                  <div className="relative">
                    <div className="text-center">
                      <h3 className="text-xl">{plan.name}</h3>
                      <div className="mt-4 flex items-end justify-center gap-1">
                        <span className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                          {plan.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {plan.period}
                      </p>
                      <p className="mt-4 text-muted-foreground">
                        {plan.description}
                      </p>
                    </div>

                    <div className="my-8 h-px w-full bg-border" />

                    <div className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 opacity-50"
                        >
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                            <X className="h-3 w-3" />
                          </span>
                          <span className="text-muted-foreground line-through">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {plan.comingSoon ? (
                    <span
                      aria-disabled="true"
                      className="relative mt-8 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border bg-neutral-100 px-8 py-4 text-base font-semibold text-muted-foreground"
                    >
                      {plan.cta}
                    </span>
                  ) : (
                    <a
                      href="https://play.google.com/store/apps/details?id=com.plantgenius"
                      className={`relative mt-8 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-brand hover:-translate-y-0.5 hover:shadow-float"
                          : "border border-border bg-white/70 text-foreground hover:border-brand-300 hover:bg-white"
                      }`}
                      target="_blank"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Trust Indicators */}
          <Reveal>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium">30-day money-back</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              FAQ
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl">
              Pricing <span className="text-gradient">FAQs</span>
            </h2>
          </Reveal>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={(index % 2) * 70}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <h3 className="mb-3 text-xl">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
                  Ready to Get Started?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                  Join 2999+ plant enthusiasts using Planto
                </p>

                <div className="mt-10 flex justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plantgenius"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                    target="_blank"
                  >
                    <Play className="h-5 w-5 fill-brand-600 text-brand-600" />
                    Start Free Trial
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
