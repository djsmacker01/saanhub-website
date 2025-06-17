import React, { useEffect } from "react";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const BlogPost = ({ post, onBack }) => {
  // Update document title
  useEffect(() => {
    document.title = `${post.title} | Saan-hub Solutions`;
  }, [post.title]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600">Post Not Found</h2>
        <button
          onClick={onBack}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onBack();
            }
          }}
          className="mt-4 text-blue-600 hover:text-blue-800 flex items-center gap-2 mx-auto">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onBack();
          }
        }}
        className="mb-8 text-blue-600 hover:text-blue-800 flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </button>

      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {post.image && (
          <img
            src={
              typeof post.image === "string"
                ? post.image
                : URL.createObjectURL(post.image)
            }
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        )}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-justify">
            {post.excerpt}
          </p>

          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-8">
            <div className="flex items-center mr-4">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            {post.sections.map((section, index) => (
              <React.Fragment key={index}>
                {section.type === "paragraph" && <p>{section.content}</p>}
                {section.type === "heading" && <h3>{section.content}</h3>}
                {section.type === "list" && (
                  <ul>
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === "orderedList" && (
                  <ol>
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ol>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
            <p>
              **Author:** {post.author} {post.role && `(${post.role})`}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
