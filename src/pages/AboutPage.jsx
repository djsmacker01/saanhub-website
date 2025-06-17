import React, { useEffect } from "react";
import {
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Saan-hub Solutions";
  }, []);

  const teamMembers = [
    {
      name: "Success Adedeji Adewale N",
      role: "Founder & Lead Developer",
      image: "/saan.jpg", // Add your image path here
      bio: "Full-stack developer with expertise in React, Node.js, and AI integration. Passionate about creating innovative solutions that drive business growth.",
      social: {
        linkedin: "https://www.linkedin.com/in/nuruade", // Replace with actual LinkedIn URL
        github: "https://www.github.com/djsmacker01/", // Replace with actual GitHub URL
        email: "mailto:adedeji.adewale2022@gmail.com", // Replace with actual email
      },
    },
    {
      name: "Soji",
      role: "IT Support Technician",
      image: "/team/soji.jpg", // Add your image path here
      bio: "Experienced IT support professional specializing in system administration, network troubleshooting, and technical support. Dedicated to providing efficient solutions and excellent customer service.",
      social: {
        linkedin: "https://www.linkedin.com/in/nuruade/", // Replace with actual LinkedIn URL
        github: "https://www.github.com/djsmacker01", // Replace with actual GitHub URL
        email: "mailto:soji@example.com", // Replace with actual email
      },
    },
    {
      name: "Nurudeen",
      role: "Mechanical Engineer",
      image: "/saan-hub-logo.jpg", // Add your image path here
      bio: "Skilled mechanical engineer with expertise in design, analysis, and manufacturing processes. Specializing in product development, CAD modeling, and mechanical systems optimization.",
      social: {
        linkedin: "https://www.linkedin.com/in/nuruade/",
        github: "https://github.com/djsmacker01/",
        email: "mailto:adedeji.adewale2022@gmail.com",
      },
    },
    // Add more team members as needed
  ];

  const sections = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Our Mission",
      color: "blue",
      description:
        "At Saan-hub Solutions, our mission is to deliver innovative software and engineering solutions that drive business transformation. Based in Cardiff, we blend technical excellence with deep industry insight to create both custom software and scalable digital products. We're committed to helping businesses automate processes, enhance their digital presence, and achieve sustainable growth through technology.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "Our Vision",
      color: "purple",
      description:
        "Saan-hub Solutions envisions a future where businesses of all sizes can fully harness the power of digital technology. Based in Cardiff, United Kingdom, we aim to be a leading force in software development—recognized for our custom solutions, AI-powered tools, and innovative digital products. Our goal is to set new benchmarks in quality, reliability, and service excellence across the tech industry.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Our Strengths",
      color: "green",
      description:
        "Saan-hub Solutions envisions a future where businesses of all sizes can fully harness the power of digital technology. Based in Cardiff, United Kingdom, we strive to be a leading force in software development—known for our custom solutions, AI-driven tools, and innovative digital products. Our goal is to set new standards in quality, reliability, and service excellence across the tech and engineering industry.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Innovation & Growth",
      color: "orange",
      description:
        "At Saan-hub Solutions, innovation is at the core of everything we do. We actively invest in emerging technologies and modern development practices to enhance both our services and digital products. Our commitment to growth goes beyond our own success—we measure it by the real impact our solutions have on our clients' businesses.",
    },
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform -skew-y-6" />
        <div className="relative">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            About Saan-hub Solutions
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 text-justify leading-relaxed px-4 md:px-8 lg:px-16">
            Saan-hub Solutions is a recognized software development company
            based in Cardiff, United Kingdom, specializing in smart digital
            solutions that enhance business growth, automation, and operational
            efficiency.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose dark:prose-invert space-y-8 px-4 md:px-8 lg:px-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
          <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-200 text-justify">
            Founded with a vision to transform how businesses operate in the
            digital age, Saan-hub Solutions combines technical expertise with
            industry insight to deliver impactful, intelligent solutions. Our
            team of experienced developers and engineers builds software that
            solves real-world challenges through automation, AI agents, and
            precision engineering.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-200 text-justify">
            We take pride in our dual approach to digital excellence: delivering
            custom software solutions tailored to unique business needs, and
            maintaining a growing portfolio of proven digital products used by
            organizations worldwide. Our products—SubletMatch, Customer Support
            AI Agent, JobPlus, and Fare-Tracker—reflect our commitment to
            innovation, automation, and design excellence.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 text-justify">
            What sets us apart is our commitment to long-term partnerships. We
            don't just deliver software. We provide ongoing support and
            maintenance to ensure every solution adapts and scales with your
            business. With a local presence in Cardiff and a global client base,
            we're positioned to offer responsive service across time zones while
            maintaining the highest standards of quality and reliability.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Strengths, Innovation Grid */}
      <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
            <div
              className={`transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 bg-${section.color}-50 dark:bg-${section.color}-900/30 p-3 rounded-xl`}>
              {section.icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
              {section.title}
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-justify leading-relaxed">
              {section.description}
            </p>
            <div
              className={`mt-6 flex items-center text-${section.color}-600 dark:text-${section.color}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <span className="text-sm font-medium">Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Team Profiles Section */}
      <div className="px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            The passionate individuals behind Saan-hub Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x400?text=Profile+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 sm:mb-4">
                  {member.role}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 line-clamp-3">
                  {member.bio}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.email || "#"}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Leadership */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg group transform transition-all duration-300 hover:shadow-xl px-4 md:px-8 lg:px-16">
        <div className="flex items-center mb-6">
          <div className="transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 bg-red-50 dark:bg-red-900/30 p-3 rounded-xl">
            <Users className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
            Company Leadership
          </h3>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
          Under strong leadership, Saan-hub Solutions has earned a reputation as
          a trusted name in software development, engineering, and digital
          innovation. Our management team brings together deep expertise in
          technology, business strategy, and engineering solutions. We are
          committed to upholding the highest standards of service delivery,
          while fostering a culture of continuous improvement, technical
          excellence, and client-focused innovation.
        </p>
        <div className="mt-6 flex items-center text-red-600 dark:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Meet our team</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
