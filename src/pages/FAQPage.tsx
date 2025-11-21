import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is Planto?",
          answer: "Planto is an AI-powered plant identification app that helps you identify plants, learn about their care requirements, and manage your plant collection. With over 1,500 active users and 500+ successful identifications, we're helping plant lovers worldwide."
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Planto. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h2 className="text-gray-900 mb-8 pb-4 border-b-2 border-green-600">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = faqCategories
                    .slice(0, catIndex)
                    .reduce((acc, cat) => acc + cat.questions.length, 0) + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={qIndex}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h3 className="text-gray-900 pr-8">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`w-5 h-5 text-green-600 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you get the most out of Planto
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white transition-colors"
            >
              Contact Support
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.plantgenius"
              className="bg-gray-200 hover:bg-gray-300 px-8 py-4 rounded-lg text-gray-900 transition-colors"
              target="_blank"
            >
              Download App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
