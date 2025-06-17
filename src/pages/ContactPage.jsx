import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

const ContactPage = () => {
  // Update document title
  useEffect(() => {
    document.title = "Contact | Saan-hub Solutions";
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for the specific field when user starts typing
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    // Message is optional, so no validation here

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmissionStatus(null); // Reset status

    if (validateForm()) {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form Data:", formData);
        setSubmissionStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Submission error:", error);
        setSubmissionStatus("error");
      } finally {
        setLoading(false);
        // Optionally, clear status after a few seconds
        setTimeout(() => setSubmissionStatus(null), 5000);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="relative overflow-hidden mb-12 py-16 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-50 animate-bg-pan" />
        <div className="relative text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in animate-scale-in">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed mx-auto px-4 md:px-8 lg:px-16">
            Have a question or want to work together? We'd love to hear from
            you. Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12 px-4 md:px-8 lg:px-16 animate-fade-in-up">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
          <Mail className="w-8 h-8 text-blue-500 mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">Email Us</h3>
          <a
            href="mailto:info@saan-hub.com"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors">
            info@saan-hub.com
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
          <Phone className="w-8 h-8 text-green-500 mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <a
            href="tel:+447459253102"
            className="text-gray-800 dark:text-gray-200 hover:text-green-500 transition-colors">
            +447459253102
          </a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
          <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
          <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-800 dark:text-gray-200">
            Cardiff, United Kingdom
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mx-auto px-4 md:px-8 lg:px-16 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Your first name"
              className={`w-full p-3 border ${
                errors.firstName
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject of your message"
              className={`w-full p-3 border ${
                errors.subject
                  ? "border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Your last name"
            className={`w-full p-3 border ${
              errors.lastName
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            className={`w-full p-3 border ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Ex. 000 6333 6333"
            className={`w-full p-3 border ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300 dark:border-gray-600"
            } rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            rows={5}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200"
          />
          <div className="text-right text-sm text-gray-800 mt-1 dark:text-gray-300">
            {formData.message.length}/400 characters
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className={`group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center mx-auto space-x-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
            ) : submissionStatus === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
            ) : submissionStatus === "error" ? (
              <XCircle className="w-5 h-5 text-red-300 mr-2" />
            ) : null}
            <span>
              {loading
                ? "Sending..."
                : submissionStatus === "success"
                ? "Message Sent!"
                : submissionStatus === "error"
                ? "Failed to Send"
                : "Send Message"}
            </span>
            {!(loading || submissionStatus) && (
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        {submissionStatus === "success" && (
          <p className="text-center text-green-600 mt-4 text-lg font-semibold animate-fade-in">
            Thank you for your message! We will get back to you shortly.
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-center text-red-600 mt-4 text-lg font-semibold animate-fade-in">
            There was an error sending your message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
