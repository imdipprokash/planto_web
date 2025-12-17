import { Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
            <img
              src="https://play-lh.googleusercontent.com/8Fpxd6sLTWy6saCYZXR-Hyl0I6t6gy6drPktH9n8tSIO1QP4PIW7Ji4QKqOg8vBF4jA=w480-h960-rw"
              alt="Girl in a jacket"
              width="500"
              height="600"
            />
          </div>
          <span className="text-xl text-gray-900">Planto</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pricing
          </Link>
       
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.plantgenius"
            className="bg-green-600 hover:bg-green-700 p-3 rounded-lg text-white"
            target="_blank"
          >
            Download App
          </a>
        </div>
      </div>
    </header>
  );
}
