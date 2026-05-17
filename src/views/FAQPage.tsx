'use client';

import { useState } from "react";
import { ChevronDown, HelpCircle, LifeBuoy, Download } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Planto?",
          answer: "Planto is an AI-powered plant identification app that helps you identify plants, learn about their care requirements, and manage your plant collection. With over 2999 active users and 500+ successful identifications, we're helping plant lovers worldwide."
        },
        {
          question: "How accurate is the plant identification?",
          answer: "Our AI has a 95% accuracy rate across 10,000+ plant species. The accuracy depends on the photo quality - well-lit, clear images of distinctive features (leaves, flowers, bark) provide the best results."
        },
        {
          question: "Do I need an internet connection?",
          answer: "The initial download requires internet. After that, core identification features work offline. Some advanced features like community support and cloud sync require an active connection."
        },
        {
          question: "Is Planto available for iOS?",
          answer: "Currently, Planto is available on Android via Google Play Store. We're working on an iOS version - sign up for our newsletter to be notified when it launches!"
        }
      ]
    },
    {
      category: "Features & Usage",
      questions: [
        {
          question: "How many plants can I identify?",
          answer: "Free users can identify up to 5 plants per day. Premium users enjoy unlimited identifications. All identifications are saved to your personal collection."
        },
        {
          question: "Can Planto identify diseased plants?",
          answer: "Yes! Premium users have access to our disease detection feature that can identify common plant diseases, pests, and provide treatment recommendations."
        },
        {
          question: "How do care reminders work?",
          answer: "After identifying a plant, you can set custom reminders for watering, fertilizing, pruning, and more. The app will send push notifications at your scheduled times."
        },
        {
          question: "Can I track multiple plants?",
          answer: "Absolutely! You can add unlimited plants to your collection, each with individual care schedules, photos, and notes. Think of it as your digital plant diary."
        }
      ]
    },
    {
      category: "Pricing & Subscriptions",
      questions: [
        {
          question: "Is Planto free to use?",
          answer: "Yes! Planto offers a free plan with 5 daily identifications and basic features. Premium plans ($4.99/month or $49.99 lifetime) unlock unlimited identifications, disease detection, and more."
        },
        {
          question: "Can I try Premium before paying?",
          answer: "Yes! We offer a 7-day free trial of Premium. No credit card required. Try all premium features risk-free before committing."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel anytime through the Google Play Store subscription settings. Your Premium access continues until the end of your billing period."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with Premium, contact us for a full refund, no questions asked."
        }
      ]
    },
    {
      category: "Privacy & Data",
      questions: [
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use industry-standard encryption to protect your data. Your plant photos and information are stored securely and never shared without your permission."
        },
        {
          question: "Do you sell my information?",
          answer: "Never. We respect your privacy and will never sell your personal information or plant data to third parties. Read our Privacy Policy for full details."
        },
        {
          question: "Can I export my plant collection?",
          answer: "Yes! Premium users can export their entire plant collection, including photos, notes, and care history, in multiple formats (PDF, CSV, JSON)."
        },
        {
          question: "What happens to my data if I delete the app?",
          answer: "If you have an account, your data is safely stored in the cloud. Reinstall the app and sign in to restore everything. Without an account, local data is deleted with the app."
        }
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          question: "The app isn't identifying my plant correctly. What should I do?",
          answer: "Try taking another photo with better lighting and focus on distinctive features. Make sure the plant fills most of the frame. You can also use the 'Report Issue' feature to get help from our community."
        },
        {
          question: "I'm not receiving reminder notifications.",
          answer: "Check that notifications are enabled for Planto in your device settings. Also ensure battery optimization isn't blocking background notifications. Visit Settings > Notifications in the app."
        },
        {
          question: "The app is running slowly or crashing.",
          answer: "Try clearing the app cache in your device settings or reinstalling the app. Make sure you're running the latest version. If issues persist, contact our support team."
        },
        {
          question: "How do I contact support?",
          answer: "You can reach us through the app (Settings > Help & Support), email us at support@plantoapp.info, or visit our community forum where experts and other users can help."
        }
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
          <div className="absolute -bottom-24 -right-16 h-80 w-80 bg-emerald-300/30 blob-mask animate-blob [animation-delay:-7s]" />
        </div>
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Find answers to common questions about Planto. Can't find what you're looking for? Contact our support team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-16 last:mb-0">
                <Reveal className="mb-8">
                  <div className="flex items-center gap-4">
                    <h2 className="text-3xl sm:text-4xl">
                      {category.category}
                    </h2>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand-200 to-transparent" />
                  </div>
                </Reveal>
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const globalIndex = faqCategories
                      .slice(0, catIndex)
                      .reduce((acc, cat) => acc + cat.questions.length, 0) + qIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <Reveal key={qIndex} delay={(qIndex % 4) * 70}>
                        <div
                          className={`group overflow-hidden rounded-2xl border bg-card transition-all duration-300 ${
                            isOpen
                              ? "border-brand-300 shadow-card"
                              : "border-border shadow-soft hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                          }`}
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="flex w-full items-center justify-between gap-6 p-6 text-left"
                          >
                            <h3 className="text-lg text-foreground transition-colors group-hover:text-brand-700">
                              {faq.question}
                            </h3>
                            <span
                              className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                isOpen
                                  ? "bg-brand-600 text-white"
                                  : "bg-brand-50 text-brand-600 group-hover:bg-brand-100"
                              }`}
                            >
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          </button>
                          <div
                            className={`grid transition-all duration-300 ease-out ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-600 text-white shadow-float">
              <div className="absolute -left-24 -top-24 h-80 w-80 bg-white/10 blob-mask animate-blob" />
              <div className="absolute -bottom-28 right-10 h-72 w-72 bg-emerald-300/20 blob-mask animate-blob [animation-delay:-7s]" />
              <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

              <div className="relative mx-auto max-w-3xl px-8 py-16 text-center sm:px-12 sm:py-20">
                <h2 className="text-4xl text-white sm:text-5xl">
                  Still Have Questions?
                </h2>
                <p className="mt-6 text-lg text-white/85">
                  Our support team is here to help you get the most out of Planto
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50"
                  >
                    <LifeBuoy className="h-5 w-5 text-brand-600" />
                    Contact Support
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plantgenius"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
                    target="_blank"
                  >
                    <Download className="h-5 w-5" />
                    Download App
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
