'use client';

import { Mail, MessageSquare, MapPin, Phone, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "support@plantoapp.info",
      action: "mailto:support@plantoapp.info"
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Get help from our community",
      contact: "Visit Forum",
      action: "#"
    },
    {
      icon: Phone,
      title: "Priority Support",
      description: "Premium users only",
      contact: "Available in-app",
      action: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
  };

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
              Contact
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Have a question, suggestion, or need help? We&apos;d love to hear from you. Our team typically responds within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <Reveal key={index} delay={index * 90}>
                <a
                  href={method.action}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 transition-colors duration-300 group-hover:bg-brand-100/60" />
                  <div className="relative">
                    <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                      <method.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl">{method.title}</h3>
                    <p className="mb-4 text-muted-foreground">{method.description}</p>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-brand-700 transition-colors group-hover:text-brand-600">
                      {method.contact}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                  Message Us
                </span>
                <h2 className="mt-5 text-4xl sm:text-5xl">
                  Send Us a <span className="text-gradient">Message</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you as soon as possible. For urgent issues, Premium users can access priority support in the app.
                </p>
                <div className="mt-10 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Remote - Serving customers worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">support@plantoapp.info</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-base font-semibold text-foreground">Response Time</h4>
                      <p className="text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="glass-card rounded-3xl p-8 sm:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      required
                      className="mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell us more about your question or issue..."
                      rows={6}
                      required
                      className="mt-2 w-full resize-y rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-4 text-base font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 hover:shadow-float"
                  >
                    Send Message
                  </button>
                  <p className="text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to our Privacy Policy
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-600 text-white shadow-float">
              <div className="absolute -left-24 -top-24 h-80 w-80 bg-white/10 blob-mask animate-blob" />
              <div className="absolute -bottom-28 right-10 h-72 w-72 bg-emerald-300/20 blob-mask animate-blob [animation-delay:-7s]" />
              <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
              <div className="relative px-8 py-16 text-center sm:px-12 md:py-20">
                <h2 className="text-4xl text-white sm:text-5xl">
                  Looking for Quick Answers?
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
                  Check out our FAQ page for instant answers to common questions
                </p>
                <div className="mt-8 flex justify-center">
                  <a
                    href="/faq"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    View FAQ
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
