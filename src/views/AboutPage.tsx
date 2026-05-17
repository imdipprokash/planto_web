import { Heart, Target, Users, Zap } from "lucide-react";
import { Card } from "../components/ui/card";

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
      description: "Our growing community of 1,500+ plant enthusiasts helps us improve and expand our plant database every day."
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
      description: "Crossed 1,500 monthly active users and 500+ successful plant identifications. Expanded plant database to 10,000+ species."
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray-900 mb-6">
            About Planto
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're on a mission to make plant care accessible to everyone through the power of AI and community.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-700">
            <div>
              <div className="text-4xl text-green-600 mb-2">1,500+</div>
              <div>Active Users</div>
            </div>
            <div>
              <div className="text-4xl text-green-600 mb-2">500+</div>
              <div>Identifications</div>
            </div>
            <div>
              <div className="text-4xl text-green-600 mb-2">10,000+</div>
              <div>Plant Species</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center text-gray-900 mb-12">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-6">
              Planto was born from a simple frustration: trying to identify a mysterious plant at a local nursery and wishing there was an easier way. As plant enthusiasts and technology lovers, we knew there had to be a better solution.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              We started building Planto with the goal of making plant identification instant, accurate, and accessible to everyone. What began as a weekend project quickly grew into a full-fledged app that thousands of people now use daily.
            </p>
            <p className="text-xl leading-relaxed">
              Today, Planto serves over 1,500 monthly active users who have successfully identified and learned to care for more than 500 plants. We're proud to be part of your plant journey, whether you're a beginner or an experienced gardener.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center text-gray-900 mb-12">
            Our Journey
          </h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 flex-grow bg-green-200 mt-4" />
                  )}
                </div>
                <div className="flex-grow pb-12">
                  <h3 className="text-gray-900 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-gray-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            We're a small but passionate team dedicated to helping you succeed with your plants.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6" />
                <h3 className="text-gray-900 mb-3">
                  {member.role}
                </h3>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the journey as we help plant lovers worldwide
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
