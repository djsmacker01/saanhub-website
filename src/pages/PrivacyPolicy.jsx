import React from "react";
import { Shield, Lock, Eye, FileText, Database, Server } from "lucide-react";

const PrivacyPolicy = () => {
  React.useEffect(() => {
    document.title = "Privacy Policy | Saan-hub Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="text-center mb-12 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in animate-scale-in">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-8 px-4 md:px-8 lg:px-16">
        {/* Introduction */}
        <section className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 group">
            <Shield className="w-6 h-6 text-blue-500 transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Introduction
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At Saan-hub Solutions, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our software development, AI integration,
            and digital transformation services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 group">
            <Database className="w-6 h-6 text-blue-500 transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Information We Collect
            </h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Personal Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information</li>
              <li>Project requirements and specifications</li>
              <li>Payment information</li>
              <li>Communication records</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">
              Technical Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>IP addresses</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
            </ul>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 group">
            <Eye className="w-6 h-6 text-blue-500 transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>To provide and maintain our services</li>
            <li>To process your requests and transactions</li>
            <li>To communicate with you about our services</li>
            <li>To improve our services and develop new features</li>
            <li>To ensure the security of our services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 group">
            <Lock className="w-6 h-6 text-blue-500 transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Data Security
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. Our security measures
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Secure data storage and transmission</li>
            <li>Regular backups and disaster recovery plans</li>
          </ul>
        </section>

        {/* Data Sharing */}
        <section className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 group">
            <Server className="w-6 h-6 text-blue-500 transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Data Sharing
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Service providers and business partners</li>
            <li>Legal authorities when required by law</li>
            <li>Third parties with your explicit consent</li>
          </ul>
        </section>

        {/* Your Rights */}
        <section className="space-y-4 animate-fade-in-up">
          <div className="flex items-center gap-3 group">
            <FileText className="w-6 h-6 text-blue-500 transform group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 animate-bounce-subtle" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Your Rights
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="space-y-4 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">
              Email: info@saan-hub.com.au
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Address: Cardiff, United Kingdom
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
