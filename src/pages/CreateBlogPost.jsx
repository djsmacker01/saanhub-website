import React, { useState, useEffect } from "react";
import { ArrowLeft, Plus, X } from "lucide-react";

const CreateBlogPost = ({ onBack, onPostCreated }) => {
  // Update document title
  useEffect(() => {
    document.title = "Create New Post | Saan-hub Solutions";
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "Nurudeen Adedeji",
    role: "Founder & Software Engineer",
    date: new Date().toISOString().split("T")[0],
    image: null,
    sections: [
      {
        type: "paragraph",
        content: "",
      },
    ],
  });

  const [newSectionType, setNewSectionType] = useState("paragraph");
  const [newListItem, setNewListItem] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSectionContentChange = (index, value) => {
    setFormData((prev) => {
      const newSections = [...prev.sections];
      newSections[index].content = value;
      return { ...prev, sections: newSections };
    });
  };

  const addNewSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          type: newSectionType,
          content:
            newSectionType === "list" || newSectionType === "orderedList"
              ? []
              : "",
        },
      ],
    }));
  };

  const removeSection = (index) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  const addListItem = (sectionIndex, itemContent) => {
    console.log(
      "addListItem called for section: ",
      sectionIndex,
      ", content:",
      itemContent
    );
    const itemToAdd = itemContent.trim();

    if (itemToAdd) {
      setFormData((prev) => {
        const newSections = prev.sections.map((section, idx) => {
          if (idx === sectionIndex) {
            const currentItems = section.items ? [...section.items] : [];
            return {
              ...section,
              items: [...currentItems, itemToAdd],
            };
          }
          return section;
        });

        return { ...prev, sections: newSections };
      });
      setNewListItem("");
    }
  };

  const removeListItem = (sectionIndex, itemIndex) => {
    setFormData((prev) => {
      const newSections = [...prev.sections];
      newSections[sectionIndex].items = newSections[sectionIndex].items.filter(
        (_, i) => i !== itemIndex
      );
      return { ...prev, sections: newSections };
    });
  };

  // New helper function for adding list items via click or keyboard
  const handleAddListItemAction = (index) => {
    if (newListItem.trim() !== "") {
      addListItem(index, newListItem.trim());
      setNewListItem("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({
          ...prev,
          image: file,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
      setFormData((prev) => ({
        ...prev,
        image: null,
      }));
    }
  };

  const calculateReadTime = (sections) => {
    let totalCharacters = 0;
    sections.forEach((section) => {
      if (section.content) {
        totalCharacters += section.content.length;
      }
      if (section.items) {
        section.items.forEach((item) => {
          totalCharacters += item.length;
        });
      }
    });
    const minutes = Math.ceil(totalCharacters / 500);
    return `${minutes} min read`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const readTime = calculateReadTime(formData.sections);
    const newPost = { ...formData, readTime };
    console.log("New Blog Post Data (from CreateBlogPost):", newPost);
    onPostCreated(newPost);
    alert("Blog post created successfully!");
  };

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

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">
            Create New Blog Post
          </h1>

          {/* Basic Information */}
          <div className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-900 mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required={true}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="excerpt"
                className="block text-sm font-medium text-gray-900 mb-2">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                required={true}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-900 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required={true}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-900 mb-2">
                Featured Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {imagePreview && (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt="Featured Preview"
                    className="max-w-xs h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Content Sections */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Content Sections
            </h2>
            {formData.sections.map((section, index) => (
              <div
                key={index}
                className="mb-6 p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Section {index + 1} - {section.type}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeSection(index)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        removeSection(index);
                      }
                    }}
                    className="text-red-600 hover:text-red-800">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {section.type === "paragraph" && (
                  <textarea
                    value={section.content}
                    onChange={(e) =>
                      handleSectionContentChange(index, e.target.value)
                    }
                    required={true}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                )}

                {section.type === "heading" && (
                  <input
                    type="text"
                    value={section.content}
                    onChange={(e) =>
                      handleSectionContentChange(index, e.target.value)
                    }
                    required={true}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                )}

                {(section.type === "list" ||
                  section.type === "orderedList") && (
                  <div className="space-y-4">
                    <ul className="list-disc pl-6">
                      {section.items?.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <span>{item}</span>
                          <button
                            type="button"
                            onClick={() => removeListItem(index, itemIndex)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                removeListItem(index, itemIndex);
                              }
                            }}
                            className="text-red-600 hover:text-red-800">
                            <X className="w-4 h-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newListItem}
                        onChange={(e) => setNewListItem(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleAddListItemAction(index);
                          }
                        }}
                        placeholder="Add new item"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleAddListItemAction(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleAddListItemAction(index);
                          }
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Add
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-4 items-center">
              <select
                value={newSectionType}
                onChange={(e) => setNewSectionType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="paragraph">Paragraph</option>
                <option value="heading">Heading</option>
                <option value="list">Unordered List</option>
                <option value="orderedList">Ordered List</option>
              </select>
              <button
                type="button"
                onClick={addNewSection}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    addNewSection();
                  }
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Section
              </button>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create Blog Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPost;
