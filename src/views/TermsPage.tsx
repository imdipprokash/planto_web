export function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: November 21, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <div className="text-gray-700 space-y-8">
            <div>
              <h2 className="text-gray-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using the Planto mobile application ("App"), you
                agree to be bound by these Terms of Service ("Terms"). If you
                disagree with any part of these terms, you may not use our App.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Description of Service</h2>
              <p>
                Planto provides an AI-powered plant identification and care
                management service. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plant identification using image recognition technology</li>
                <li>Plant care guides and recommendations</li>
                <li>Care reminders and notifications</li>
                <li>Community forum and support</li>
                <li>Disease detection (Premium feature)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">User Accounts</h2>
              <h3 className="text-gray-900 mb-3">Account Creation</h3>
              <p>
                To access certain features, you must create an account. You
                agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">Account Termination</h3>
              <p>
                We reserve the right to suspend or terminate your account if you
                violate these Terms or engage in fraudulent, illegal, or abusive
                behavior.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Subscription and Payments</h2>
              <h3 className="text-gray-900 mb-3">Premium Subscriptions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Premium subscriptions are billed monthly or as a one-time
                  lifetime payment
                </li>
                <li>
                  Subscriptions automatically renew unless canceled before the
                  renewal date
                </li>
                <li>
                  Refunds are provided in accordance with our 30-day money-back
                  guarantee
                </li>
                <li>
                  Prices may change with 30 days notice to existing subscribers
                </li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">Free Trial</h3>
              <p>
                We may offer a free trial period. You won't be charged until the
                trial ends. Cancel anytime during the trial to avoid charges.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">User Content</h2>
              <h3 className="text-gray-900 mb-3">Your Content</h3>
              <p>
                You retain ownership of any photos, notes, or other content you
                submit to Planto. By submitting content, you grant us a license
                to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use your content to provide and improve our services</li>
                <li>Store and process your content on our servers</li>
                <li>
                  Display your content in community features (if you choose to
                  share)
                </li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">Prohibited Content</h3>
              <p>You may not submit content that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violates any laws or regulations</li>
                <li>Infringes on others' intellectual property rights</li>
                <li>Contains harmful, offensive, or inappropriate material</li>
                <li>Contains spam or unsolicited promotional content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Accuracy of Information</h2>
              <p>
                While we strive for accuracy, Planto's plant identifications and
                care recommendations are provided "as is" without warranties. We
                cannot guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>100% accuracy in plant identification</li>
                <li>
                  That following care recommendations will ensure plant health
                </li>
                <li>The effectiveness of disease treatments</li>
              </ul>
              <p className="mt-4">
                Always consult with professional horticulturists or botanists
                for critical decisions about plant care or identification of
                potentially harmful plants.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Intellectual Property</h2>
              <p>
                The Planto App, including its design, features, and content
                (excluding user-generated content), is owned by us and protected
                by copyright, trademark, and other intellectual property laws.
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, modify, or distribute our App or content</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use our trademarks without permission</li>
                <li>Create derivative works based on our App</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Planto and its
                affiliates shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>
                  Plant damage or death resulting from following our
                  recommendations
                </li>
                <li>Errors or inaccuracies in plant identifications</li>
              </ul>
              <p className="mt-4">
                Our total liability shall not exceed the amount you paid for
                Premium services in the past 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p>
                The App is provided "as is" and "as available" without
                warranties of any kind, either express or implied, including but
                not limited to warranties of merchantability, fitness for a
                particular purpose, or non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Third-Party Services</h2>
              <p>
                Our App may contain links to third-party websites or services.
                We are not responsible for the content, privacy policies, or
                practices of third parties.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Modifications to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part
                of our service at any time, with or without notice. We will not
                be liable for any modification, suspension, or discontinuance.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which we operate, without
                regard to conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you
                of material changes by posting the new Terms in the App and
                updating the "Last updated" date. Your continued use after
                changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <ul className="list-none space-y-2 mt-4">
                <li>Support: support@plantoapp.info</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
