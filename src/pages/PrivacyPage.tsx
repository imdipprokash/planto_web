export function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: November 21, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl prose prose-lg">
          <div className="text-gray-700 space-y-8">
            <div>
              <h2 className="text-gray-900 mb-4">Introduction</h2>
              <p>
                Welcome to Planto. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our mobile application and tell you about your privacy rights.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-gray-900 mb-3">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (email address, username)</li>
                <li>Plant photos you upload for identification</li>
                <li>Plant care notes and reminders you create</li>
                <li>Community forum posts and comments</li>
                <li>Support inquiries and correspondence</li>
              </ul>

              <h3 className="text-gray-900 mb-3 mt-6">Information Automatically Collected</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (model, operating system version)</li>
                <li>App usage data and analytics</li>
                <li>Crash reports and performance data</li>
                <li>Location data (only if you grant permission)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our plant identification service</li>
                <li>Personalize your experience and provide relevant care recommendations</li>
                <li>Send you care reminders and notifications you've enabled</li>
                <li>Respond to your support requests and inquiries</li>
                <li>Analyze app usage to improve features and performance</li>
                <li>Prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your data only in these limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party services that help us operate the app (cloud storage, analytics, payment processing)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal data by employees</li>
                <li>Secure cloud infrastructure</li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Your Privacy Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your data</li>
                <li><strong>Export:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at support@plantoapp.info
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When you delete your account, we will delete or anonymize your personal data within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Children's Privacy</h2>
              <p>
                Planto is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">International Data Transfers</h2>
              <p>
                Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy in the app and updating the "Last updated" date. Your continued use of Planto after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or our data practices, please contact us:
              </p>
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
