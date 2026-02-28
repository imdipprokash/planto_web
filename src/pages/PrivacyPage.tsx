import React from "react";
import { Header } from "../components/Header";
import {
  ShieldCheck,
  Check,
  Camera,
  MapPin,
  Lock,
  Share2,
  Users,
  Trash2,
  Mail,
} from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "February 28, 2026";
  const supportEmail = "support@plantoapp.info";

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50 text-slate-800 font-sans">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Your Privacy Matters
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-lg">
            Last Updated: <span className="font-semibold">{lastUpdated}</span>
          </p>
        </section>

        {/* Intro */}
        <section className="mb-12">
          <p className="text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
            Welcome to Planto. Your privacy is our priority. This policy
            explains how we collect, use, and protect your information when you
            use our plant identification and care services.
          </p>
        </section>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Google Authentication */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              <span className="text-black font-bold text-xl ">G</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Google Authentication
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Planto uses Google Sign-In exclusively for secure access. We
              collect your
              <span className="font-semibold text-slate-700"> Email</span>,
              <span className="font-semibold text-slate-700"> Name</span>, and
              <span className="font-semibold text-slate-700">
                {" "}
                Profile Picture
              </span>{" "}
              from Google.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <Check className="w-4 h-4" />
              We never see your Google password
            </div>
          </div>

          {/* Camera & Photos */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6" color="#000000" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Camera & Photos
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We request access to your camera and photo gallery only when you
              initiate a plant identification. Photos are processed solely for
              species identification.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <Check className="w-4 h-4" />
              Not used for any other purpose
            </div>
          </div>

          {/* Location Data */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-amber-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" color="#000000" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Location Data
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              With your consent, we collect{" "}
              <span className="font-semibold text-slate-700">
                approximate location
              </span>{" "}
              (non-precise) to provide hyper-local weather data and
              climate-specific plant care recommendations.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <Check className="w-4 h-4" />
              Only with your permission
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-purple-100 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6" color="#000000" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Data Security
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              We implement industry-standard{" "}
              <span className="font-semibold text-slate-700">
                SSL/TLS encryption
              </span>{" "}
              for all data in transit. Your account info is stored with{" "}
              <span className="font-semibold text-slate-700">
                AES-256 encryption
              </span>{" "}
              at rest.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
              <Check className="w-4 h-4" />
              Enterprise-grade protection
            </div>
          </div>
        </div>

        {/* Advertising Section - Full Width */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl shadow-xl mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">Ad</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Advertising & Analytics
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              AdMob Integration
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-2xl">
              To keep our services free, we use Google AdMob to display
              advertisements. AdMob may collect and use your{" "}
              <span className="text-white font-medium">
                Advertising ID (AAID)
              </span>{" "}
              to personalize ads and provide analytics. This data is handled
              according to Google's Advertising Privacy Policy.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-white/10 text-slate-300 px-4 py-2 rounded-full border border-white/10">
                No Data Sales
              </span>
              <span className="text-xs bg-white/10 text-slate-300 px-4 py-2 rounded-full border border-white/10">
                Google Privacy Compliant
              </span>
              <span className="text-xs bg-white/10 text-slate-300 px-4 py-2 rounded-full border border-white/10">
                Analytics Only
              </span>
            </div>
          </div>
        </div>

        {/* Data Sharing Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Share2 className="w-6 h-6" color="#000000" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Data Sharing & Disclosure
              </h2>
              <p className="text-sm text-slate-500">
                We do not sell your personal information
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                Service Providers
              </h3>
              <p className="text-xs text-slate-600">
                We share location data with weather API providers to fetch your
                local climate info.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                Advertising Partners
              </h3>
              <p className="text-xs text-slate-600">
                Device identifiers are shared with Google AdMob for ad delivery.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                Legal Requirements
              </h3>
              <p className="text-xs text-slate-600">
                We may disclose data if required by law or to protect our legal
                rights.
              </p>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border border-pink-100 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-pink-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                Children's Privacy
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Planto is not intended for use by children under the age of 13.
                We do not knowingly collect personal information from children.
                If we discover such data has been collected, it will be deleted
                immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Account Deletion - CTA Section */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100 mb-8">
          <div className="text-center max-w-xl mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Trash2 className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Account Deletion
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In compliance with Google Play policies, you have the right to
              delete your account and all associated data at any time. We will
              permanently delete your profile, plant history, and saved data
              within <span className="font-semibold">30 days</span>.
            </p>
            <a
              href={`mailto:${supportEmail}?subject=Account Deletion Request&body=Please delete my Planto account associated with this email.`}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-red-500/25 hover:bg-red-700 hover:shadow-red-500/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5" color="#000000" />
            </a>
            <p className="text-xs text-slate-500 mt-4">
              Send from your registered Google email to verify your identity
            </p>
          </div>
        </div>

        {/* Contact Footer */}
        <footer className="text-center py-12 border-t border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Questions or Concerns?
          </h3>
          <p className="text-slate-500 mb-4">
            Our support team is here to help
          </p>
          <a
            href={`mailto:${supportEmail}`}
            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            {supportEmail}
          </a>
        </footer>
      </main>
    </div>
  );
}
