import React, { useState, useEffect } from "react";
import { Calendar, Clock, Plus } from "lucide-react";
import BlogPost from "./BlogPost";
import CreateBlogPost from "./CreateBlogPost";

const BlogPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Blog | Saan-hub Solutions";
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const isAdmin = true; // For demonstration: set to true for admin access

  const initialBlogPosts = [
    {
      id: "how-saan-hub-solutions-helps-businesses-integrate-ai-for-success",
      title: "How Saan-hub Solutions Helps Businesses Integrate AI for Success",
      excerpt:
        "Discover how Saan-hub Solutions is helping businesses leverage AI to streamline operations and drive growth through innovative solutions.",
      author: "Nurudeen Adedeji",
      role: "Founder & Software Engineer",
      date: "2025-05-19",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      sections: [
        {
          type: "paragraph",
          content:
            "In today's rapidly evolving business landscape, Artificial Intelligence (AI) is no longer just a futuristic concept—it's a critical tool for competitive advantage. At Saan-hub Solutions, we specialize in helping businesses of all sizes seamlessly integrate AI into their operations, driving efficiency, innovation, and significant growth.",
        },
        {
          type: "heading",
          content: "Why AI Integration Matters for Your Business",
        },
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
            "Improved Customer Experience: Personalize interactions and provide 24/7 support with AI-powered tools.",
            "Cost Reduction: Optimize operations and resource allocation through predictive analytics.",
            "Innovation: Unlock new possibilities and create groundbreaking products and services.",
          ],
        },
        {
          type: "heading",
          content: "Saan-hub Solutions' Approach to AI Integration",
        },
        {
          type: "paragraph",
          content:
            "Our methodology is designed to be comprehensive yet flexible, ensuring that AI solutions are tailored to your unique business needs. We follow a structured process:",
        },
        {
          type: "orderedList",
          items: [
            "1. Assessment & Strategy: We begin by understanding your current operations, identifying pain points, and pinpointing areas where AI can deliver the most impact. This involves detailed consultations and a thorough analysis of your data infrastructure.",
            "2. Solution Design: Based on the assessment, we design custom AI models and systems. Whether it's a machine learning algorithm for predictive analysis, natural language processing (NLP) for customer support, or AI-driven automation tools, our solutions are built to scale and integrate seamlessly with your existing systems.",
            "3. Development & Implementation: Our expert team develops and rigorously tests the AI solutions. We then handle the end-to-end implementation, ensuring minimal disruption to your daily operations. This includes data preparation, model training, and deployment.",
            "4. Training & Support: We provide comprehensive training for your team to ensure they are proficient in using the new AI tools. Our ongoing support and maintenance services ensure that your AI systems remain optimized, up-to-date, and performant.",
            "5. Monitoring & Optimization: AI is not a one-time deployment. We continuously monitor the performance of your AI solutions, gather feedback, and make iterative improvements to ensure they continue to deliver maximum value as your business evolves.",
          ],
        },
        {
          type: "heading",
          content: "Real-World Impact: Our AI Success Stories",
        },
        {
          type: "paragraph",
          content:
            "Saan-hub Solutions has a proven track record of helping businesses achieve remarkable results through AI:",
        },
        {
          type: "list",
          items: [
            "For a leading e-commerce platform, we implemented an AI-powered recommendation engine that increased customer engagement by 30% and boosted sales by 15% within six months.",
            "We developed an intelligent automation system for a manufacturing client, reducing operational costs by 20% and improving production efficiency by 25%.",
            "Our AI-driven chatbot for a financial services firm enhanced customer service response times by 60% and reduced call center volume by 40%.",
          ],
        },
        {
          type: "heading",
          content: "Partner with Saan-hub Solutions for Your AI Journey",
        },
        {
          type: "paragraph",
          content:
            "Integrating AI into your business is a transformative journey, and Saan-hub Solutions is your ideal partner. Our expertise in cutting-edge AI technologies, combined with our commitment to understanding your unique business challenges, ensures that you receive solutions that are not just advanced, but also practical and impactful.",
        },
        {
          type: "paragraph",
          content:
            "Ready to explore how AI can revolutionize your business? Contact Saan-hub Solutions today for a consultation. Let's build a smarter, more efficient future together.",
        },
      ],
    },
    {
      id: "custom-software-development-trends-2025",
      title: "Custom Software Development Trends in 2025",
      excerpt:
        "Explore the latest trends shaping custom software development in 2025, from AI integration to cloud-native solutions.",
      author: "Nurudeen Adedeji",
      role: "Founder & Software Engineer",
      date: "2025-05-19",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    },
    {
      id: "digital-transformation-success-stories",
      title: "Digital Transformation Success Stories",
      excerpt:
        "Real-world examples of successful digital transformation projects and the lessons learned from implementation.",
      author: "Nurudeen Adedeji",
      role: "Founder & Software Engineer",
      date: "2025-01-03",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    },
    {
      id: "web-development-best-practices-2025",
      title: "Web Development Best Practices for 2025",
      excerpt:
        "Essential best practices for modern web development, focusing on performance, security, and user experience.",
      author: "Nurudeen Adedeji",
      role: "Founder & Software Engineer",
      date: "2025-05-01",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    },
  ];

  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  const handleAddPost = (newPost) => {
    // Assign a unique ID to the new post (you might want a more robust ID generation)
    const newId = newPost.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-*|-*$/g, "");
    setBlogPosts((prevPosts) => [...prevPosts, { ...newPost, id: newId }]);
    console.log("BlogPosts updated in BlogPage:", [
      ...blogPosts,
      { ...newPost, id: newId },
    ]);
    setIsCreating(false); // Go back to blog list after creation
  };

  const handleCreatePostClick = () => {
    setAuthError("");
    setShowPasswordPrompt(true);
  };

  const handlePasswordSubmit = () => {
    const correctPassword = "admin123"; // Hardcoded for demonstration
    if (password === correctPassword) {
      setIsCreating(true);
      setShowPasswordPrompt(false);
      setPassword("");
    } else {
      setAuthError("You are not the admin, please keep reading");
    }
  };

  if (isCreating) {
    return (
      <CreateBlogPost
        onBack={() => setIsCreating(false)}
        onPostCreated={handleAddPost}
      />
    );
  }

  if (selectedPost) {
    return (
      <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
    );
  }

  if (showPasswordPrompt) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Admin Access Required
        </h2>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlePasswordSubmit();
            }
          }}
        />
        {authError && <p className="text-red-500 mb-4">{authError}</p>}
        <button
          onClick={handlePasswordSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handlePasswordSubmit();
            }
          }}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Submit Password
        </button>
        <button
          onClick={() => setShowPasswordPrompt(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowPasswordPrompt(false);
            }
          }}
          className="mt-4 w-full px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Our Blog</h1>
        <p className="text-xl text-gray-900 dark:text-gray-200">
          Stay updated with the latest insights, trends, and news from Saan-hub
          Solutions.
        </p>
        {isAdmin && (
          <button
            onClick={handleCreatePostClick}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCreatePostClick();
              }
            }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
            <Plus className="w-5 h-5" />
            Create New Post
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          console.log(`Rendering post ${post.id}: image is`, post.image);
          return (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              {post.image && (
                <img
                  src={
                    typeof post.image === "string"
                      ? post.image
                      : URL.createObjectURL(post.image)
                  }
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-900 dark:text-gray-200 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{post.readTime}</span>
                </div>
                <h3
                  className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedPost(post);
                    }
                  }}
                  role="button"
                  tabIndex={0}>
                  {post.title}
                </h3>
                <p className="text-gray-900 dark:text-gray-200 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    NA
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-900 dark:text-gray-200">
                      {post.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
