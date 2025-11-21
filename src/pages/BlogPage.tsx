import { Calendar, User, ArrowRight } from "lucide-react";
import { Card } from "../components/ui/card";

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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-gray-900 mb-6">
              Planto Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips, plant care guides, and the latest in plant technology to help you grow your green thumb.
            </p>
          </div>

          {/* Featured Post */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto bg-gradient-to-br from-green-100 to-emerald-100" />
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-green-600 text-white rounded-full text-sm w-fit mb-4">
                  Featured
                </div>
                <h2 className="text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100" />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 hover:bg-gray-200 px-8 py-4 rounded-lg text-gray-900 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6">
            Get Plant Care Tips in Your Inbox
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter for weekly plant care tips, guides, and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
