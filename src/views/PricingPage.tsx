import { Check } from "lucide-react";
import { Card } from "../components/ui/card";

export function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for casual plant enthusiasts",
      features: [
        "5 plant identifications per day",
        "Basic plant care guides",
        "Access to community forum",
        "Watering reminders",
        "Ad-supported",
      ],
      notIncluded: [
        "Unlimited identifications",
        "Disease detection",
        "Expert consultation",
        "Ad-free experience",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$0.99",
      period: "per month",
      description: "For serious plant lovers who want it all",
      features: [
        "Unlimited plant identifications",
        "Advanced disease detection",
        "Detailed care schedules",
        "Priority community support",
        "Plant health monitoring",
        "Ad-free experience",
        "Offline mode",
        "Export plant collection",
      ],
      notIncluded: [],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Lifetime",
      price: "$19.99",
      period: "one-time",
      description: "Best value - pay once, use forever",
      features: [
        "Everything in Premium",
        "Lifetime updates",
        "Priority support",
        "Early access to new features",
        "Exclusive community badge",
        "Support indie development",
      ],
      notIncluded: [],
      cta: "Buy Lifetime Access",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I try Premium for free?",
      answer:
        "Yes! We offer a 7-day free trial for Premium. No credit card required. Cancel anytime.",
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
        "Your plant collection and data remain accessible even if you cancel Premium. You can always export your data.",
    },
    {
      question: "Is the Lifetime plan really lifetime?",
      answer:
        "Yes! Pay once and enjoy all Premium features forever, including future updates. No recurring charges.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include our core
            plant identification features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.highlighted
                    ? "border-2 border-green-600 shadow-xl scale-105"
                    : "border border-gray-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl text-gray-900">{plan.price}</span>
                  </div>
                  <p className="text-gray-500">{plan.period}</p>
                  <p className="text-gray-600 mt-4">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 opacity-40"
                    >
                      <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-3 h-0.5 bg-gray-400" />
                      </div>
                      <span className="text-gray-500 line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://play.google.com/store/apps/details?id=com.plantgenius"
                  className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                    plan.highlighted
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                  target="_blank"
                >
                  {plan.cta}
                </a>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>30-day money-back</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center text-gray-900 mb-12">Pricing FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1,500+ plant enthusiasts using Planto
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.plantgenius"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white transition-colors"
            target="_blank"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
