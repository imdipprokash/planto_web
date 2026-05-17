import { Camera, BookOpen, Bell, Users, Sparkles, Shield } from "lucide-react";
import { Card } from "../components/ui/card";

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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray-900 mb-6">
            Powerful Features for Plant Lovers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to identify, care for, and nurture your plants. Backed by advanced AI and a passionate community.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {allFeatures.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join over 1,500 plant enthusiasts already using Planto
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.plantgenius"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white transition-colors"
            target="_blank"
          >
            Download Now
          </a>
        </div>
      </section>
    </div>
  );
}
