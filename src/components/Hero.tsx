import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Camera, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Trusted by 1,500+ plant lovers</span>
            </div>

            <h1 className="text-5xl lg:text-6xl text-gray-900">
              Identify Any Plant in Seconds
            </h1>

            <p className="text-xl text-gray-600">
              Simply snap a photo and discover the name, care tips, and
              fascinating facts about any plant. Join thousands of gardeners and
              nature enthusiasts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 px-8 py-6">
                <Camera className="w-5 h-5 mr-2" />
                Download Now
              </Button>
              <Button variant="outline" className="px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-gray-900">1,500+</div>
                <div className="text-sm text-gray-600">Monthly Users</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Plants Identified</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-green-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690553562074-210d110466d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudCUyMGlkZW50aWZpY2F0aW9uJTIwcGhvbmV8ZW58MXx8fHwxNzYzNzIxMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Plant Identification App"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-900">Catharanthus roseus</div>
                <div className="text-xs text-gray-600">
                  Madagascar periwinkle plant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
