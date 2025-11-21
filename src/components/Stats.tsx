import { Users, Camera, Star, Globe } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "1,500+",
      label: "Active Users Monthly",
      color: "text-green-600"
    },
    {
      icon: Camera,
      value: "500+",
      label: "Daily Identifications",
      color: "text-blue-600"
    },
    {
      icon: Star,
      value: "4.8",
      label: "Average Rating",
      color: "text-yellow-600"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Trusted by Plant Lovers Worldwide</h2>
          <p className="text-xl text-gray-600">Join our growing community of botanists and gardeners</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
