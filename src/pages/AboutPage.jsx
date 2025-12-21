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
        "Our mission is to empower businesses with technology solutions that drive growth and transformation. We partner with startups, SMEs, and organizations to deliver custom software, digital transformation strategies, and technology consulting that solve real business challenges. We're committed to helping our clients achieve faster time-to-market, improved efficiency, and scalable growth through innovative technology solutions.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-500" />,
      title: "Our Vision",
      color: "purple",
      description:
        "We envision a future where every business, regardless of size, can leverage technology to compete and thrive in the digital economy. As a leading tech consultancy and software development partner, we aim to be recognized for delivering solutions that combine technical excellence with business value. Our goal is to set new standards in client partnership, solution quality, and measurable business outcomes.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
      title: "Our Strengths",
      color: "green",
      description:
        "Our core strengths lie in our ability to understand both technology and business. We excel at translating complex business requirements into elegant technical solutions, delivering projects on time and within budget, and providing ongoing support that ensures long-term success. Our expertise spans modern web and mobile technologies, cloud infrastructure, digital transformation strategies, and agile development methodologies.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: "Innovation & Growth",
      color: "orange",
      description:
        "Innovation and continuous improvement drive everything we do. We stay at the forefront of technology trends, investing in modern tools, frameworks, and methodologies to deliver cutting-edge solutions. Our commitment to growth is measured by the success of our clients—we celebrate when our solutions help businesses increase revenue, reduce costs, improve efficiency, and achieve their strategic goals.",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform -skew-y-6" />
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            About Saan-hub Solutions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 dark:text-gray-200 text-justify leading-relaxed px-4 md:px-8 lg:px-16">
            Saan-hub Solutions is a Cardiff-based tech consultancy and software
            development partner that helps businesses grow through digital
            transformation and custom technology solutions. We combine technical
            expertise with business acumen to deliver solutions that drive
            measurable results.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose dark:prose-invert space-y-8 max-w-none">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
          <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-200 text-justify">
            Saan-hub Solutions is a technology consultancy and software
            development company that partners with businesses to solve complex
            challenges through innovative digital solutions. Based in Cardiff,
            United Kingdom, we work with startups, SMEs, and organizations
            across industries to drive digital transformation, improve
            operational efficiency, and accelerate growth.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-800 dark:text-gray-200 text-justify">
            Our team combines deep technical expertise with business
            understanding to deliver solutions that not only work flawlessly but
            also deliver measurable business value. We specialize in custom web
            and mobile application development, digital transformation
            consulting, MVP development for startups, and technology stack
            modernization. Beyond custom solutions, we maintain a portfolio of
            proven digital products—including SubletMatch, Fare-Tracker,
            TrackGoal, and Cymru Unleashed—that demonstrate our commitment to
            innovation and excellence.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 text-justify">
            What sets us apart is our client-focused approach. We don't just build
            software—we become your technology partner, providing ongoing
            support, maintenance, and strategic guidance to ensure your solutions
            evolve with your business needs. Our commitment to long-term
            partnerships means we're invested in your success, delivering
            scalable, maintainable solutions that drive real business outcomes.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Strengths, Innovation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer">
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
      <div>
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
                    href={
                      member.social?.linkedin &&
                      member.social.linkedin.startsWith("http")
                        ? member.social.linkedin
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={
                      member.social?.github &&
                      member.social.github.startsWith("http")
                        ? member.social.github
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={
                      member.social?.email &&
                      member.social.email.startsWith("mailto:")
                        ? member.social.email
                        : "#"
                    }
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
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-2xl shadow-lg group transform transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
            Company Leadership
          </h3>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-justify">
          Under experienced leadership, Saan-hub Solutions has built a reputation
          as a trusted technology partner for businesses seeking digital
          transformation. Our team brings together expertise in software
          development, business strategy, and technology consulting to deliver
          solutions that drive measurable business outcomes. We are committed to
          maintaining the highest standards of quality, service delivery, and
          client satisfaction, while continuously evolving our capabilities to
          meet the changing needs of the digital economy.
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
