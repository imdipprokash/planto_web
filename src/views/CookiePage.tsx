'use client';

import { Reveal } from "../components/Reveal";

export function CookiePage() {
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
            <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Legal
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl">Cookie Policy</h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: November 21, 2024
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="container-page max-w-3xl">
          <div className="space-y-10 text-foreground/80 leading-relaxed [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:text-foreground [&_p]:leading-relaxed [&_ul]:my-4 [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:marker:text-brand-500 [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-2">
            <div>
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you use our mobile application or website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
              </p>
            </div>

            <div>
              <h2>How We Use Cookies</h2>
              <p>
                Planto uses cookies and similar technologies for several purposes:
              </p>
              <ul>
                <li>To keep you signed in to your account</li>
                <li>To remember your preferences and settings</li>
                <li>To understand how you use our App and improve performance</li>
                <li>To analyze usage patterns and optimize features</li>
                <li>To provide personalized recommendations</li>
                <li>To measure the effectiveness of our marketing campaigns</li>
              </ul>
            </div>

            <div>
              <h2>Types of Cookies We Use</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the App to function properly. They enable core functionality such as:
              </p>
              <ul>
                <li>User authentication and account access</li>
                <li>Security and fraud prevention</li>
                <li>Loading and saving your plant collection</li>
                <li>Processing payments for Premium subscriptions</li>
              </ul>
              <p className="mt-4">
                You cannot opt out of essential cookies as they are required for the App to work.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                These cookies help us understand how users interact with our App:
              </p>
              <ul>
                <li>Which features are most popular</li>
                <li>How long users spend in the App</li>
                <li>Where users encounter difficulties</li>
                <li>App performance and crash reports</li>
              </ul>
              <p className="mt-4">
                We use tools like Google Analytics and Firebase Analytics for this purpose.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul>
                <li>Remembering your plant care preferences</li>
                <li>Saving your notification settings</li>
                <li>Storing your display preferences (theme, language)</li>
                <li>Remembering plants you've recently viewed</li>
              </ul>

              <h3>Advertising Cookies</h3>
              <p>
                For free users, we use advertising cookies to:
              </p>
              <ul>
                <li>Display relevant advertisements</li>
                <li>Measure ad campaign effectiveness</li>
                <li>Limit the number of times you see an ad</li>
              </ul>
              <p className="mt-4">
                Premium users do not see advertisements and are not subject to advertising cookies.
              </p>
            </div>

            <div>
              <h2>Third-Party Cookies</h2>
              <p>
                We work with trusted third-party partners who may also set cookies:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> For usage analytics and insights</li>
                <li><strong>Firebase:</strong> For authentication, analytics, and crash reporting</li>
                <li><strong>Advertising Networks:</strong> To display relevant ads to free users</li>
                <li><strong>Payment Processors:</strong> To process Premium subscriptions securely</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies and cookie policies, which we encourage you to review.
              </p>
            </div>

            <div>
              <h2>Managing Cookies</h2>

              <h3>In the App</h3>
              <p>
                You can manage some cookie preferences in the App settings:
              </p>
              <ul>
                <li>Go to Settings &gt; Privacy</li>
                <li>Toggle analytics and functional cookies on/off</li>
                <li>Note: Essential cookies cannot be disabled</li>
              </ul>

              <h3>On Your Device</h3>
              <p>
                You can also manage cookies through your device settings:
              </p>
              <ul>
                <li>Android: Settings &gt; Apps &gt; Planto &gt; Storage &gt; Clear Data</li>
                <li>Browser (for website): Use your browser's privacy settings</li>
              </ul>
              <p className="mt-4">
                Please note that disabling certain cookies may affect your experience and limit some features.
              </p>
            </div>

            <div>
              <h2>Cookie Duration</h2>

              <h3>Session Cookies</h3>
              <p>
                These are temporary cookies that expire when you close the App. They help maintain your session state.
              </p>

              <h3>Persistent Cookies</h3>
              <p>
                These remain on your device for a set period or until you delete them. Duration varies:
              </p>
              <ul>
                <li><strong>Authentication:</strong> Up to 30 days</li>
                <li><strong>Preferences:</strong> Up to 1 year</li>
                <li><strong>Analytics:</strong> Up to 2 years</li>
                <li><strong>Advertising:</strong> Up to 13 months</li>
              </ul>
            </div>

            <div>
              <h2>Do Not Track</h2>
              <p>
                Some browsers include a "Do Not Track" feature. Currently, there is no industry standard for how to respond to Do Not Track signals. We do not currently respond to Do Not Track browser signals, but you can manage cookies through your App and device settings as described above.
              </p>
            </div>

            <div>
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by updating the "Last updated" date and posting a notice in the App.
              </p>
            </div>

            <div>
              <h2>More Information</h2>
              <p>
                For more information about how we handle your data, please review our:
              </p>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us:
              </p>
              <ul className="!list-none !pl-0 mt-4">
                <li>Email: privacy@plantoapp.info</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
