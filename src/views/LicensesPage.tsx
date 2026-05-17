'use client';

import { Reveal } from "../components/Reveal";

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
            <h1 className="mt-5 text-4xl sm:text-5xl">
              Open Source Licenses &amp; Attributions
            </h1>
            <p className="mt-4 text-muted-foreground">
              Planto is built with amazing open source software. We're grateful to the developers and contributors of these projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="container-page max-w-3xl">
          {/* Software Licenses */}
          <div className="mb-16">
            <h2 className="text-2xl text-foreground mb-6">
              Open Source Software
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {licenses.map((license, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-card"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg text-foreground">
                      {license.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-border bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                      {license.version}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {license.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{license.author}</span>
                    <span className="font-medium text-brand-700">{license.license}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Attributions */}
          <div className="mb-16">
            <h2 className="text-2xl text-foreground mb-6">
              Image Attributions
            </h2>
            <div className="space-y-5">
              {imageAttributions.map((attribution, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg text-foreground">
                      {attribution.source}
                    </h3>
                    <span className="shrink-0 text-sm font-medium text-brand-700">
                      {attribution.license}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-3">
                    {attribution.description}
                  </p>
                  <a
                    href={attribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-700 underline underline-offset-2"
                  >
                    View License →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* License Texts */}
          <div>
            <h2 className="text-2xl text-foreground mb-6">
              Common License Texts
            </h2>

            <div className="space-y-6">
              {/* MIT License */}
              <div className="rounded-2xl border border-border bg-brand-50/40 p-8">
                <h3 className="text-xl text-foreground mb-4">MIT License</h3>
                <div className="space-y-4 font-mono text-sm leading-relaxed text-foreground/70">
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
              <div className="rounded-2xl border border-border bg-brand-50/40 p-8">
                <h3 className="text-xl text-foreground mb-4">Apache License 2.0</h3>
                <div className="space-y-4 text-sm leading-relaxed text-foreground/70">
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
                    className="inline-block mt-2 font-medium text-brand-700 underline underline-offset-2"
                  >
                    View Full License →
                  </a>
                </div>
              </div>

              {/* ISC License */}
              <div className="rounded-2xl border border-border bg-brand-50/40 p-8">
                <h3 className="text-xl text-foreground mb-4">ISC License</h3>
                <div className="space-y-4 font-mono text-sm leading-relaxed text-foreground/70">
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
          <div className="mt-16 rounded-2xl border border-brand-200 bg-brand-50 p-8">
            <h2 className="text-2xl text-foreground mb-4">
              Acknowledgments
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We extend our heartfelt thanks to the open source community. The software and resources
              listed above have been instrumental in building Planto, and we're grateful for the
              countless hours of work that contributors have put into these projects.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              If you believe we've missed any attribution or have questions about our use of
              open source software, please contact us at support@plantoapp.info
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
