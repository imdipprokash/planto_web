import { Camera, Scan, BookOpen, Bell } from "lucide-react";

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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray-900 mb-6">
            How Planto Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Identify any plant in four simple steps. It's fast, accurate, and incredibly easy to use.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full mb-4">
                    Step {step.number}
                  </div>
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-gray-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div className="space-y-3">
                    {step.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2.5 h-2.5 bg-green-600 rounded-full" />
                        </div>
                        <span className="text-gray-700">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center">
                    <step.icon className="w-32 h-32 text-green-600 opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">
            Start Identifying Plants Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 1,500+ users who have already identified over 500 plants
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.plantgenius"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white transition-colors"
            target="_blank"
          >
            Download Planto
          </a>
        </div>
      </section>
    </div>
  );
}
