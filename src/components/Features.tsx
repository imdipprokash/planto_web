import { Camera, BookOpen, Bell, Shield, Zap, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: Camera,
      title: "Instant Identification",
      description: "Snap a photo and get instant results with 99% accuracy powered by advanced AI technology."
    },
    {
      icon: BookOpen,
      title: "Detailed Plant Info",
      description: "Access comprehensive information including care guides, growing tips, and fascinating facts."
    },
    {
      icon: Bell,
      title: "Care Reminders",
      description: "Never forget to water or fertilize with personalized care reminders for all your plants."
    },
    {
      icon: Shield,
      title: "Disease Detection",
      description: "Identify plant diseases and pests early with AI-powered diagnosis and treatment recommendations."
    },
    {
      icon: Zap,
      title: "Works Offline",
      description: "Identify plants even without internet connection with our offline database."
    },
    {
      icon: Heart,
      title: "Plant Collection",
      description: "Build your personal plant collection and track their growth journey over time."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Everything You Need to Care for Plants</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From identification to care guides, we've got all the tools you need to become a plant expert
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl hover:bg-gray-50 transition-colors">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-green-50 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            <div>
              <h3 className="text-3xl text-gray-900 mb-6">Powered by Advanced AI Technology</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our machine learning models have been trained on millions of plant images to provide you with the most accurate identification results possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Recognizes over 10,000 plant species</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Continuously improving with user feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Fast results in under 2 seconds</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1650731900879-b5f25088ff31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYXZlcyUyMG5hdHVyZXxlbnwxfHx8fDE3NjM3MTM4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Plant leaves"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
