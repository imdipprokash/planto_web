'use client';

import { Camera, Scan, BookOpen, Bell, Check, Play, Star, Download } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: Camera,
      title: "Capture a Photo",
      description: "Take a clear photo of any plant, leaf, flower, or tree. Our AI works best with well-lit, close-up images.",
      tips: [
        "Ensure good lighting",
        "Focus on distinctive features",
        "Include leaves and flowers if possible",
        "Clean the camera lens for clarity"
      ]
    },
    {
      number: "02",
      icon: Scan,
      title: "AI Identification",
      description: "Our advanced AI analyzes your photo against our database of 10,000+ species in seconds.",
      tips: [
        "Analysis takes 2-5 seconds",
        "Works with most plant types",
        "Multiple suggestions provided",
        "Confidence scores shown"
      ]
    },
    {
      number: "03",
      icon: BookOpen,
      title: "Learn & Care",
      description: "Access comprehensive information about your plant including care instructions, fun facts, and growth tips.",
      tips: [
        "Detailed care guides",
        "Watering schedules",
        "Sunlight requirements",
        "Common problems and solutions"
      ]
    },
    {
      number: "04",
      icon: Bell,
      title: "Set Reminders",
      description: "Create personalized care reminders so you never forget to water, fertilize, or tend to your plants.",
      tips: [
        "Custom reminder schedules",
        "Multiple plants tracking",
        "Push notifications",
        "Calendar integration"
      ]
    }
  ];

  const faqs = [
    {
      question: "How accurate is the plant identification?",
      answer: "Our AI has a 95% accuracy rate across 10,000+ plant species. Accuracy improves with clear, well-lit photos."
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes! After the initial download, core identification features work offline. Some advanced features require internet connection."
    },
    {
      question: "How many plants can I identify?",
      answer: "Unlimited! You can identify as many plants as you want with no restrictions."
    },
    {
      question: "What if the identification is wrong?",
      answer: "You can report incorrect identifications, and our community experts will help provide the correct information."
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
              How It Works
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl">
              How <span className="text-gradient">Planto</span> Works
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Identify any plant in four simple steps. It's fast, accurate, and incredibly easy to use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps Section */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <Reveal key={index}>
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-16`}
                >
                  <div className="flex-1">
                    <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                      Step {step.number}
                    </span>
                    <div className="mt-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <h2 className="mt-6 text-3xl sm:text-4xl">{step.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {step.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-foreground/80">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex-1">
                    <div className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-2 shadow-card">
                      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-emerald-600">
                        <div className="absolute -right-16 -top-16 h-56 w-56 bg-white/10 blob-mask animate-blob" />
                        <div className="absolute -bottom-20 -left-12 h-48 w-48 bg-emerald-300/20 blob-mask animate-blob [animation-delay:-7s]" />
                        <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm">
                          <step.icon className="h-16 w-16 text-white" />
                        </div>
                        <span className="absolute right-8 top-8 text-7xl font-bold text-white/15 sm:text-8xl">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
          </Reveal>
          <div className="mx-auto max-w-3xl space-y-5">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 70}>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
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
                  Start Identifying Plants Today
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
                  Join 2999+ users who have already identified over 500 plants
                </p>

                <div className="mt-10 flex justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plantgenius"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                    target="_blank"
                  >
                    <Play className="h-5 w-5 fill-brand-600 text-brand-600" />
                    Download Planto
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
