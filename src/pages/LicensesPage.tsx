export function LicensesPage() {
  const licenses = [
    {
      name: "React",
      version: "18.x",
      license: "MIT License",
      author: "Meta Platforms, Inc.",
      description: "A JavaScript library for building user interfaces"
    },
    {
      name: "Tailwind CSS",
      version: "4.x",
      license: "MIT License",
      author: "Tailwind Labs Inc.",
      description: "A utility-first CSS framework"
    },
    {
      name: "Lucide React",
      version: "Latest",
      license: "ISC License",
      author: "Lucide Contributors",
      description: "Beautiful & consistent icon toolkit"
    },
    {
      name: "TensorFlow Lite",
      version: "2.x",
      license: "Apache License 2.0",
      author: "Google LLC",
      description: "Machine learning framework for on-device inference"
    },
    {
      name: "Firebase",
      version: "Latest",
      license: "Apache License 2.0",
      author: "Google LLC",
      description: "Backend services for authentication and analytics"
    },
    {
      name: "React Navigation",
      version: "6.x",
      license: "MIT License",
      author: "React Navigation Contributors",
      description: "Routing and navigation for React Native apps"
    },
    {
      name: "Axios",
      version: "1.x",
      license: "MIT License",
      author: "Matt Zabriskie",
      description: "Promise based HTTP client"
    }
  ];

  const imageAttributions = [
    {
      source: "Unsplash",
      description: "High-quality stock photos used throughout the app and website",
      license: "Unsplash License",
      url: "https://unsplash.com/license"
    },
    {
      source: "PlantNet",
      description: "Plant images used in our training dataset",
      license: "CC BY-SA 4.0",
      url: "https://plantnet.org"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-gray-900 mb-4">
            Open Source Licenses & Attributions
          </h1>
          <p className="text-gray-600">
            Planto is built with amazing open source software. We're grateful to the developers and contributors of these projects.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Software Licenses */}
          <div className="mb-16">
            <h2 className="text-gray-900 mb-8">
              Open Source Software
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {licenses.map((license, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-gray-900">
                      {license.name}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {license.version}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {license.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{license.author}</span>
                    <span className="text-green-600">{license.license}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Attributions */}
          <div className="mb-16">
            <h2 className="text-gray-900 mb-8">
              Image Attributions
            </h2>
            <div className="space-y-6">
              {imageAttributions.map((attribution, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-gray-900">
                      {attribution.source}
                    </h3>
                    <span className="text-sm text-green-600">
                      {attribution.license}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {attribution.description}
                  </p>
                  <a
                    href={attribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 text-sm"
                  >
                    View License →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* License Texts */}
          <div>
            <h2 className="text-gray-900 mb-8">
              Common License Texts
            </h2>
            
            <div className="space-y-8">
              {/* MIT License */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-gray-900 mb-4">MIT License</h3>
                <div className="text-sm text-gray-600 font-mono space-y-4">
                  <p>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                  </p>
                  <p>
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                  </p>
                  <p>
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                  </p>
                </div>
              </div>

              {/* Apache License 2.0 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-gray-900 mb-4">Apache License 2.0</h3>
                <div className="text-sm text-gray-600 space-y-4">
                  <p>
                    Licensed under the Apache License, Version 2.0 (the "License");
                    you may not use this file except in compliance with the License.
                  </p>
                  <p>
                    Unless required by applicable law or agreed to in writing, software
                    distributed under the License is distributed on an "AS IS" BASIS,
                    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    See the License for the specific language governing permissions and
                    limitations under the License.
                  </p>
                  <a
                    href="https://www.apache.org/licenses/LICENSE-2.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 inline-block mt-2"
                  >
                    View Full License →
                  </a>
                </div>
              </div>

              {/* ISC License */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-gray-900 mb-4">ISC License</h3>
                <div className="text-sm text-gray-600 font-mono space-y-4">
                  <p>
                    Permission to use, copy, modify, and/or distribute this software for any
                    purpose with or without fee is hereby granted, provided that the above
                    copyright notice and this permission notice appear in all copies.
                  </p>
                  <p>
                    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
                    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
                    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
                    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
                    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
                    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
                    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acknowledgments */}
          <div className="mt-16 bg-green-50 rounded-xl p-8">
            <h2 className="text-gray-900 mb-4">
              Acknowledgments
            </h2>
            <p className="text-gray-700 mb-4">
              We extend our heartfelt thanks to the open source community. The software and resources
              listed above have been instrumental in building Planto, and we're grateful for the
              countless hours of work that contributors have put into these projects.
            </p>
            <p className="text-gray-700">
              If you believe we've missed any attribution or have questions about our use of
              open source software, please contact us at support@plantoapp.info
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
