'use client';

import { Calendar, User, ArrowRight, Newspaper, Clock } from "lucide-react";
import { Reveal } from "../components/Reveal";

export function BlogPage() {
  const featuredPost = {
    title: "10 Easy-to-Care-For Houseplants Perfect for Beginners",
    excerpt: "Starting your plant journey? These low-maintenance plants are nearly impossible to kill and will boost your confidence as a new plant parent.",
    date: "November 15, 2024",
    author: "Planto Team",
    category: "Plant Care",
    readTime: "5 min read",
    image: "houseplants beginner"
  };

  const blogPosts = [
    {
      title: "How to Identify Plant Diseases Using AI",
      excerpt: "Learn how artificial intelligence is revolutionizing plant disease detection and what you can do to keep your plants healthy.",
      date: "November 10, 2024",
      author: "Planto Team",
      category: "Technology",
      readTime: "4 min read",
      image: "plant disease leaves"
    },
    {
      title: "The Ultimate Guide to Watering Your Plants",
      excerpt: "Overwatering or underwatering? Discover the secrets to perfect plant hydration and avoid common mistakes.",
      date: "November 5, 2024",
      author: "Planto Team",
      category: "Plant Care",
      readTime: "6 min read",
      image: "watering plants"
    },
    {
      title: "Top 5 Succulents for Small Spaces",
      excerpt: "Living in an apartment? These compact succulents thrive in small spaces and require minimal care.",
      date: "October 28, 2024",
      author: "Planto Team",
      category: "Plant Guides",
      readTime: "3 min read",
      image: "succulent collection"
    },
    {
      title: "Understanding Plant Light Requirements",
      excerpt: "Not all plants need the same amount of light. Learn how to match your plants with the perfect spot in your home.",
      date: "October 20, 2024",
      author: "Planto Team",
      category: "Plant Care",
      readTime: "5 min read",
      image: "plant sunlight window"
    },
    {
      title: "Building Your First Plant Collection",
      excerpt: "Ready to expand beyond your first plant? Here's how to build a diverse and thriving indoor garden.",
      date: "October 12, 2024",
      author: "Planto Team",
      category: "Getting Started",
      readTime: "7 min read",
      image: "indoor plant collection"
    },
    {
      title: "Common Plant Pests and How to Eliminate Them",
      excerpt: "Spotted something crawling on your plants? Identify and eliminate common pests before they cause damage.",
      date: "October 5, 2024",
      author: "Planto Team",
      category: "Plant Health",
      readTime: "6 min read",
      image: "plant pest control"
    }
  ];

  const categories = [
    "All Posts",
    "Plant Care",
    "Technology",
    "Plant Guides",
    "Getting Started",
    "Plant Health"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
          <div className="absolute -top-24 -left-20 h-96 w-96 bg-brand-300/40 blob-mask animate-blob" />
          <div className="absolute -bottom-24 -right-16 h-80 w-80 bg-emerald-300/30 blob-mask animate-blob [animation-delay:-7s]" />
        </div>
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <Newspaper className="h-4 w-4" />
              Planto Blog
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl">
              Planto <span className="text-gradient">Blog</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Expert tips, plant care guides, and the latest in plant technology to help you grow your green thumb.
            </p>
          </Reveal>

          {/* Featured Post */}
          <Reveal delay={120} className="mt-16">
            <article className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand-500 to-emerald-500 md:aspect-auto">
                  <div className="absolute -right-16 -top-16 h-56 w-56 bg-white/15 blob-mask animate-blob" />
                  <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="h-16 w-16 text-white/40" aria-label={featuredPost.image} />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <div className="mb-5 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-brand-600 to-emerald-600 px-4 py-1.5 text-sm font-medium text-white">
                    Featured
                  </div>
                  <h2 className="text-3xl sm:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-600" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-brand-600" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="group/link mt-8 inline-flex w-fit items-center gap-2 text-base font-semibold text-brand-700 transition-colors hover:text-brand-800"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-page">
          {/* Categories Filter */}
          <Reveal className="mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  index === 0
                    ? "border-brand-600 bg-brand-600 text-white shadow-soft"
                    : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
                }`}
              >
                {category}
              </button>
            ))}
          </Reveal>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={index} delay={(index % 3) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-brand-400 to-emerald-500">
                    <div className="absolute -right-12 -top-12 h-40 w-40 bg-white/15 blob-mask transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-dots opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 shadow-soft backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl text-foreground transition-colors group-hover:text-brand-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-brand-600" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="group/link mt-5 inline-flex w-fit items-center gap-2 font-semibold text-brand-700 transition-colors hover:text-brand-800"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Load More */}
          <Reveal className="mt-16 text-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-8 py-4 text-base font-semibold text-brand-700 transition-all hover:-translate-y-0.5 hover:bg-brand-100">
              Load More Articles
            </button>
          </Reveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-600 text-white shadow-float">
              <div className="absolute -left-24 -top-24 h-80 w-80 bg-white/10 blob-mask animate-blob" />
              <div className="absolute -bottom-28 right-10 h-72 w-72 bg-emerald-300/20 blob-mask animate-blob [animation-delay:-7s]" />
              <div className="absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

              <div className="relative mx-auto max-w-3xl px-8 py-16 text-center sm:px-12 sm:py-20">
                <h2 className="text-4xl text-white sm:text-5xl">
                  Get Plant Care Tips in Your Inbox
                </h2>
                <p className="mt-6 text-lg text-white/85">
                  Subscribe to our newsletter for weekly plant care tips, guides, and updates.
                </p>
                <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow rounded-full border border-white/30 bg-white/95 px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-7 py-3 text-base font-semibold text-brand-700 shadow-float transition-all hover:-translate-y-0.5 hover:bg-brand-50">
                    Subscribe
                  </button>
                </div>
                <p className="mt-5 text-sm text-white/70">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
