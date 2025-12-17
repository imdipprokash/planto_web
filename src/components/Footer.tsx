import {
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <img
                  src="https://play-lh.googleusercontent.com/8Fpxd6sLTWy6saCYZXR-Hyl0I6t6gy6drPktH9n8tSIO1QP4PIW7Ji4QKqOg8vBF4jA=w480-h960-rw"
                  alt="Girl in a jacket"
                   className="w-10 h-10 object-cover rounded-xl" />
              </div>
              <span className="text-xl text-white">Planto</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your personal plant identification and care
              companion. Trusted by thousands worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/licenses"
                  className="hover:text-white transition-colors"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Planto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
