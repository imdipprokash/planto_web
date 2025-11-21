import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Apple, Smartphone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto">
        <div className="bg-green-600 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="p-8 lg:p-16">
              <h2 className="text-4xl lg:text-5xl text-white mb-6">
                Start Identifying Plants Today
              </h2>
              <p className="text-xl text-green-50 mb-8">
                Join 1,500+ monthly active users and discover
                the world of plants. Download now and get
                started for free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.plantgenius"
                  className="flex flex-row items:center bg-green-700 text-white hover:bg-green-800 flex:row px-4 py-3 rounded-lg text-white"
                  target="_blank"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Google Play
                </a>
              </div>

              <div className="flex items-center gap-6 text-green-50">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>4.8/5 Rating</span>
                </div>
                <div className="text-green-50">•</div>
                <div>Free to Download</div>
              </div>
            </div>

            <div className="hidden lg:block relative h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1679326641325-88ad342065ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBwbGFudHN8ZW58MXx8fHwxNzYzNjY5MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Botanical garden"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}