import { Camera, Sparkles, BookOpen } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      step: "Step 1",
      title: "Take a Photo",
      description: "Snap a clear picture of any plant, flower, or leaf you want to identify."
    },
    {
      icon: Sparkles,
      step: "Step 2",
      title: "Get Instant Results",
      description: "Our AI analyzes the image and provides accurate identification within seconds."
    },
    {
      icon: BookOpen,
      step: "Step 3",
      title: "Learn & Care",
      description: "Access detailed care guides, tips, and add the plant to your personal collection."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Identify any plant in three simple steps</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 text-center h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6">
                  <item.icon className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-sm text-green-600 mb-2">{item.step}</div>
                <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
