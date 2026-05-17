'use client';

import React from "react";
import { Reveal } from "../components/Reveal";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>
        <div className="container-page max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <ShieldCheck className="h-4 w-4" />
              Your Privacy Matters
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">
              Last Updated:{" "}
              <span className="font-semibold text-foreground">
                {lastUpdated}
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="container-page max-w-3xl">
          <div className="space-y-10 text-foreground/80 leading-relaxed [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:text-foreground [&_p]:leading-relaxed [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-2">
            {/* Intro */}
            <p>
              Welcome to Planto. Your privacy is our priority. This policy
              explains how we collect, use, and protect your information when you
              use our plant identification and care services.
            </p>

            {/* Google Authentication */}
            <div>
              <h2 className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <span className="text-base font-bold">G</span>
                </span>
                Google Authentication
              </h2>
              <p>
                Planto uses Google Sign-In exclusively for secure access. We
                collect your
                <span className="font-semibold text-foreground"> Email</span>,
                <span className="font-semibold text-foreground"> Name</span>, and
                <span className="font-semibold text-foreground">
                  {" "}
                  Profile Picture
                </span>{" "}
                from Google.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-brand-700">
                <Check className="h-4 w-4" />
                We never see your Google password
              </div>
            </div>

            {/* Camera & Photos */}
            <div>
              <h2 className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <Camera className="h-5 w-5" />
                </span>
                Camera &amp; Photos
              </h2>
              <p>
                We request access to your camera and photo gallery only when you
                initiate a plant identification. Photos are processed solely for
                species identification.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-brand-700">
                <Check className="h-4 w-4" />
                Not used for any other purpose
              </div>
            </div>

            {/* Location Data */}
            <div>
              <h2 className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <MapPin className="h-5 w-5" />
                </span>
                Location Data
              </h2>
              <p>
                With your consent, we collect{" "}
                <span className="font-semibold text-foreground">
                  approximate location
                </span>{" "}
                (non-precise) to provide hyper-local weather data and
                climate-specific plant care recommendations.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-brand-700">
                <Check className="h-4 w-4" />
                Only with your permission
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <Lock className="h-5 w-5" />
                </span>
                Data Security
              </h2>
              <p>
                We implement industry-standard{" "}
                <span className="font-semibold text-foreground">
                  SSL/TLS encryption
                </span>{" "}
                for all data in transit. Your account info is stored with{" "}
                <span className="font-semibold text-foreground">
                  AES-256 encryption
                </span>{" "}
                at rest.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-brand-700">
                <Check className="h-4 w-4" />
                Enterprise-grade protection
              </div>
            </div>

            {/* Advertising & Analytics */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Advertising &amp; Analytics
              </p>
              <h2>AdMob Integration</h2>
              <p>
                To keep our services free, we use Google AdMob to display
                advertisements. AdMob may collect and use your{" "}
                <span className="font-semibold text-foreground">
                  Advertising ID (AAID)
                </span>{" "}
                to personalize ads and provide analytics. This data is handled
                according to Google's Advertising Privacy Policy.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700">
                  No Data Sales
                </span>
                <span className="rounded-full border border-border bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700">
                  Google Privacy Compliant
                </span>
                <span className="rounded-full border border-border bg-brand-50 px-4 py-2 text-xs font-medium text-brand-700">
                  Analytics Only
                </span>
              </div>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <Share2 className="h-5 w-5" />
                </span>
                Data Sharing &amp; Disclosure
              </h2>
              <p className="text-muted-foreground">
                We do not sell your personal information
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <h3 className="mb-2 text-base text-foreground">
                    Service Providers
                  </h3>
                  <p className="text-sm">
                    We share location data with weather API providers to fetch your
                    local climate info.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <h3 className="mb-2 text-base text-foreground">
                    Advertising Partners
                  </h3>
                  <p className="text-sm">
                    Device identifiers are shared with Google AdMob for ad delivery.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                  <h3 className="mb-2 text-base text-foreground">
                    Legal Requirements
                  </h3>
                  <p className="text-sm">
                    We may disclose data if required by law or to protect our legal
                    rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="rounded-2xl border border-border bg-brand-50/50 p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="!mt-0 !text-xl">Children's Privacy</h2>
                  <p>
                    Planto is not intended for use by children under the age of 13.
                    We do not knowingly collect personal information from children.
                    If we discover such data has been collected, it will be deleted
                    immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Account Deletion */}
            <div className="rounded-2xl border border-border bg-brand-50/50 p-8 text-center">
              <span className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <Trash2 className="h-7 w-7" />
              </span>
              <h2 className="!mt-0">Account Deletion</h2>
              <p className="mx-auto max-w-xl">
                In compliance with Google Play policies, you have the right to
                delete your account and all associated data at any time. We will
                permanently delete your profile, plant history, and saved data
                within{" "}
                <span className="font-semibold text-foreground">30 days</span>.
              </p>
              <a
                href={`mailto:${supportEmail}?subject=Account Deletion Request&body=Please delete my Planto account associated with this email.`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-8 py-4 font-semibold text-white no-underline shadow-brand transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                <Mail className="h-5 w-5" />
                Request Account Deletion
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Send from your registered Google email to verify your identity
              </p>
            </div>

            {/* Contact Footer */}
            <div className="border-t border-border pt-12 text-center">
              <h3 className="!mt-0 mb-2 text-xl text-foreground">
                Questions or Concerns?
              </h3>
              <p className="mb-4 text-muted-foreground">
                Our support team is here to help
              </p>
              <a
                href={`mailto:${supportEmail}`}
                className="inline-flex items-center gap-2 font-semibold text-brand-700"
              >
                <Mail className="h-5 w-5" />
                {supportEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
