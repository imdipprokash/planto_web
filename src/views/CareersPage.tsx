import { Briefcase, Heart, Zap, Users } from "lucide-react";
import { Card } from "../components/ui/card";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-gray-900 mb-6">
            Join Our Growing Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us make plant care accessible to everyone. We're a small, passionate team building something special.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-gray-900 mb-12">
            What We Value
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center text-gray-900 mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Remote First</h3>
                <p className="text-gray-600">Work from anywhere in the world. We value output, not location.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Flexible Hours</h3>
                <p className="text-gray-600">Set your own schedule. We trust you to manage your time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Learn new skills and grow with the company as we scale.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600">Your work directly helps thousands of plant lovers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-center text-gray-900 mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
                        {position.type}
                      </span>
                      <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:support@plantoapp.info?subject=Application for ${position.title}`}
                    className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white transition-colors whitespace-nowrap text-center"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-gray-600">
                  {position.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Briefcase className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="mb-6">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented people. Send us your resume and let's talk!
          </p>
          <a
            href="mailto:support@plantoapp.info"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
