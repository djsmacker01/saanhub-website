import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  CheckCircle,
  XCircle,
  Clock,
  MessageSquare,
  Send,
  Linkedin,
  Github,
} from "lucide-react";

const ContactPage = () => {
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
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus(null);
    if (validateForm()) {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmissionStatus("success");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", subject: "", message: "" });
      } catch (error) {
        setSubmissionStatus("error");
      } finally {
        setLoading(false);
        setTimeout(() => setSubmissionStatus(null), 5000);
      }
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-200 outline-none text-sm ${
      errors[field]
        ? "border-red-400 bg-red-50 dark:bg-red-900/10"
        : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/60 hover:border-gray-300 dark:hover:border-gray-500"
    }`;

  return (
    <div className="space-y-0">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden min-h-[380px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=1920&q=70"
            alt="Modern office space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/92 via-blue-950/88 to-indigo-950/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-5 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">
              We respond within 24 hours
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed">
            Have a platform idea or a process that needs automation? Let&apos;s
            talk. We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* ── Main contact section ── */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-14 items-start">

            {/* ── Left: Form ── */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                  Send us a message
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Start a Conversation
                </h2>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100 dark:border-gray-700">
                {/* Row 1: First name + Subject */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      className={inputClass("firstName")}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      className={inputClass("lastName")}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+44 7xxx xxxxxx"
                      className={inputClass("phone")}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Startup Strategy Session"
                    className={inputClass("subject")}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
                    Message{" "}
                    <span className="font-normal text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or idea..."
                    rows={5}
                    className={`${inputClass("message")} resize-none`}
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {formData.message.length}/400 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}>
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : submissionStatus === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-300" />
                  ) : submissionStatus === "error" ? (
                    <XCircle className="w-5 h-5 text-red-300" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
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
                    <ArrowRight className="w-5 h-5" />
                  )}
                </button>

                {submissionStatus === "success" && (
                  <p className="text-center text-green-600 dark:text-green-400 mt-4 text-sm font-semibold animate-fade-in">
                    Thank you! We will get back to you within 24 hours.
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p className="text-center text-red-600 dark:text-red-400 mt-4 text-sm font-semibold animate-fade-in">
                    There was an error. Please try again or email us directly.
                  </p>
                )}
              </form>
            </div>

            {/* ── Right: Contact info ── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Office image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-52 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&w=700&q=75"
                  alt="Cardiff, United Kingdom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-lg">Cardiff, UK</p>
                  <p className="text-white/70 text-sm">United Kingdom</p>
                </div>
              </div>

              {/* Contact cards */}
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  iconBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
                  title: "Email Us",
                  value: "info@saan-hub.com",
                  href: "mailto:info@saan-hub.com",
                  sub: "We respond within 24 hours",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  iconBg: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400",
                  title: "Call Us",
                  value: "+44 7459 253102",
                  href: "tel:+447459253102",
                  sub: "Mon–Fri, 9am–6pm GMT",
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  iconBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400",
                  title: "Visit Us",
                  value: "Cardiff, United Kingdom",
                  href: null,
                  sub: "By appointment only",
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  iconBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400",
                  title: "Response Time",
                  value: "Within 24 Hours",
                  href: null,
                  sub: "Typically much faster",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700 flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-0.5">
                      {card.title}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block">
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {card.value}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{card.sub}</p>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
                <h4 className="font-bold mb-1">Connect With Us</h4>
                <p className="text-sm text-blue-100 mb-4">Follow our work and latest updates</p>
                <div className="flex space-x-3">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/", label: "LinkedIn" },
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/djsmacker01/", label: "GitHub" },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:info@saan-hub.com", label: "Email" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-colors duration-200">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
