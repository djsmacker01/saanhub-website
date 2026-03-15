import React, { useState, useEffect } from "react";
import useSEO, { breadcrumbSchema, webPageSchema, SITE } from "../hooks/useSEO";
import {
  Calendar,
  Clock,
  Plus,
  ArrowRight,
  Tag,
  Search,
  BookOpen,
  TrendingUp,
  Lock,
  X,
} from "lucide-react";
import BlogPost from "./BlogPost";
import CreateBlogPost from "./CreateBlogPost";

const CATEGORIES = ["All", "AI & Automation", "Web Development", "Digital Transformation", "Strategy"];

const initialBlogPosts = [
  {
    id: "how-saan-hub-solutions-helps-businesses-integrate-ai-for-success",
    title: "How Saan-hub Solutions Helps Businesses Integrate AI for Success",
    excerpt:
      "Discover how Saan-hub Solutions is helping businesses leverage AI to streamline operations and drive growth through innovative solutions.",
    author: "Success Adedeji",
    role: "Founder & Lead Developer",
    date: "2025-05-19",
    readTime: "7 min read",
    category: "AI & Automation",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&w=1200&q=75",
    sections: [
      {
        type: "paragraph",
        content:
          "In today's rapidly evolving business landscape, Artificial Intelligence (AI) is no longer just a futuristic concept—it's a critical tool for competitive advantage. At Saan-hub Solutions, we specialise in helping businesses of all sizes seamlessly integrate AI into their operations, driving efficiency, innovation, and significant growth.",
      },
      { type: "heading", content: "Why AI Integration Matters for Your Business" },
      {
        type: "paragraph",
        content:
          "The benefits of AI are extensive, ranging from automating mundane tasks to providing deep insights from vast datasets. Businesses that embrace AI can expect:",
      },
      {
        type: "list",
        items: [
          "Increased Efficiency: Automate repetitive tasks, allowing your team to focus on strategic initiatives.",
          "Enhanced Decision-Making: Leverage data-driven insights for smarter, more informed business choices.",
          "Improved Customer Experience: Personalise interactions and provide 24/7 support with AI-powered tools.",
          "Cost Reduction: Optimise operations and resource allocation through predictive analytics.",
          "Innovation: Unlock new possibilities and create groundbreaking products and services.",
        ],
      },
      { type: "heading", content: "Saan-hub Solutions' Approach to AI Integration" },
      {
        type: "paragraph",
        content:
          "Our methodology is designed to be comprehensive yet flexible, ensuring that AI solutions are tailored to your unique business needs. We follow a structured process:",
      },
      {
        type: "orderedList",
        items: [
          "1. Assessment & Strategy: We begin by understanding your current operations, identifying pain points, and pinpointing areas where AI can deliver the most impact.",
          "2. Solution Design: Based on the assessment, we design custom AI models and systems — from ML algorithms for predictive analysis to NLP for customer support.",
          "3. Development & Implementation: Our expert team develops and rigorously tests the AI solutions, handling end-to-end implementation with minimal disruption.",
          "4. Training & Support: We provide comprehensive training for your team and ongoing support to keep AI systems optimised.",
          "5. Monitoring & Optimisation: We continuously monitor performance, gather feedback, and make iterative improvements.",
        ],
      },
      { type: "heading", content: "Real-World Impact: Our AI Success Stories" },
      {
        type: "paragraph",
        content: "Saan-hub Solutions has a proven track record of helping businesses achieve remarkable results through AI:",
      },
      {
        type: "list",
        items: [
          "For a leading e-commerce platform, we implemented an AI-powered recommendation engine that increased customer engagement by 30% and boosted sales by 15% within six months.",
          "We developed an intelligent automation system for a manufacturing client, reducing operational costs by 20% and improving production efficiency by 25%.",
          "Our AI-driven chatbot for a financial services firm enhanced customer service response times by 60% and reduced call centre volume by 40%.",
        ],
      },
    ],
  },
  {
    id: "custom-software-development-trends-2025",
    title: "Custom Software Development Trends in 2025",
    excerpt:
      "Explore the latest trends shaping custom software development in 2025, from AI integration to cloud-native solutions and beyond.",
    author: "Success Adedeji",
    role: "Founder & Lead Developer",
    date: "2025-05-15",
    readTime: "5 min read",
    category: "Web Development",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&w=800&q=75",
    sections: [],
  },
  {
    id: "digital-transformation-success-stories",
    title: "Digital Transformation Success Stories",
    excerpt:
      "Real-world examples of successful digital transformation projects and the key lessons learned from each implementation.",
    author: "Success Adedeji",
    role: "Founder & Lead Developer",
    date: "2025-03-10",
    readTime: "4 min read",
    category: "Digital Transformation",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=800&q=75",
    sections: [],
  },
  {
    id: "web-development-best-practices-2025",
    title: "Web Development Best Practices for 2025",
    excerpt:
      "Essential best practices for modern web development, focusing on performance, accessibility, security, and user experience.",
    author: "Success Adedeji",
    role: "Founder & Lead Developer",
    date: "2025-01-20",
    readTime: "6 min read",
    category: "Web Development",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=800&q=75",
    sections: [],
  },
];

const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

const BLOG_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      url: `${SITE.URL}/blog`,
      name: "Technology Blog | AI, Web Development & Digital Transformation",
      description: "Expert insights on AI automation, web development, digital transformation, and startup growth from Saan-hub Solutions' technology team.",
    }),
    breadcrumbSchema([
      { name: "Home", url: `${SITE.URL}/` },
      { name: "Blog", url: `${SITE.URL}/blog` },
    ]),
    {
      "@type": "Blog",
      "@id": `${SITE.URL}/blog#blog`,
      "name": "Saan-hub Solutions Technology Blog",
      "description": "Expert insights on AI, web development, digital transformation, and startup growth.",
      "url": `${SITE.URL}/blog`,
      "inLanguage": "en-GB",
      "publisher": { "@id": `${SITE.URL}/#organization` },
      "author": { "@id": `${SITE.URL}/#founder` },
      "about": ["Artificial Intelligence", "Web Development", "Digital Transformation", "SaaS", "Startup Technology"],
    },
  ],
};

const BlogPage = ({ setActivePage }) => {
  useSEO({
    title: "Technology Blog | AI, Web Development & Digital Innovation Insights",
    description: "Expert articles on AI automation, custom web development, digital transformation, and startup growth. Practical insights from the Saan-hub Solutions team across the UK.",
    keywords: "technology blog, AI automation blog, web development insights, digital transformation articles, startup technology, Cardiff tech blog, React development tutorial, Node.js tips, SaaS growth",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&w=1200&q=75",
    structuredData: BLOG_STRUCTURED_DATA,
  });

  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const isAdmin = true;

  const handleAddPost = (newPost) => {
    const newId = newPost.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-*|-*$/g, "");
    setBlogPosts((prev) => [{ ...newPost, id: newId, featured: false }, ...prev]);
    setIsCreating(false);
  };

  const handlePasswordSubmit = () => {
    if (password === "admin123") {
      setIsCreating(true);
      setShowPasswordPrompt(false);
      setPassword("");
    } else {
      setAuthError("Incorrect password. Please try again.");
    }
  };

  const filteredPosts = blogPosts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featuredPost = filteredPosts.find((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  if (isCreating) {
    return <CreateBlogPost onBack={() => setIsCreating(false)} onPostCreated={handleAddPost} />;
  }

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  if (showPasswordPrompt) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Admin Access</h2>
            </div>
            <button
              onClick={() => setShowPasswordPrompt(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <input
            type="password"
            placeholder="Enter admin password"
            className="w-full px-4 py-3 mb-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
          />
          {authError && (
            <p className="text-red-500 text-sm mb-4 flex items-center space-x-1">
              <X className="w-4 h-4" />
              <span>{authError}</span>
            </p>
          )}
          <button
            onClick={handlePasswordSubmit}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Verify Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[360px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&w=1920&q=70"
            alt="Blog and insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/92 via-blue-950/88 to-indigo-950/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300 tracking-wide">
                Insights &amp; Updates
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 text-white">
              Our Blog
            </h1>
            <p className="text-xl text-blue-100/90 leading-relaxed">
              Stay updated with the latest insights on AI, digital transformation,
              and technology from the Saan-hub Solutions team.
            </p>
          </div>
        </div>
      </div>

      {/* ── Controls: Search + Category + Admin ── */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:text-blue-600"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
            {/* Search + admin */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-48"
                />
              </div>
              {isAdmin && (
                <button
                  onClick={() => { setAuthError(""); setShowPasswordPrompt(true); }}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 whitespace-nowrap">
                  <Plus className="w-4 h-4" />
                  <span>New Post</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-14">

          {/* ── Featured Post ── */}
          {featuredPost && (
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Featured
                </span>
              </div>
              <article
                onClick={() => setSelectedPost(featuredPost)}
                className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          SA
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">{featuredPost.author}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{featuredPost.role}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                        <span>Read article</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* ── Regular Posts Grid ── */}
          {regularPosts.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <Tag className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  {activeCategory === "All" ? "Latest Articles" : activeCategory}
                </span>
                <span className="ml-2 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                  {regularPosts.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&w=600&q=70`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {post.category && (
                        <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/80 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            SA
                          </div>
                          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                            {post.author}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-2">No posts found</h3>
              <p className="text-gray-400 dark:text-gray-500">
                Try a different category or search term.
              </p>
            </div>
          )}

          {/* ── Newsletter CTA ── */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white p-10 sm:p-14 text-center shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #6366f1 0%, transparent 60%), radial-gradient(circle at 75% 30%, #3b82f6 0%, transparent 55%)" }} />
            <div className="relative max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Stay in the Loop</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Get the latest articles on AI, digital transformation, and technology strategy delivered straight to your inbox.
              </p>
              <button
                onClick={() => setActivePage("contact")}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
