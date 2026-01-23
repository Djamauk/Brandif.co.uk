import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl prose prose-lg text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
          <p>
            Welcome to Brandif's Privacy Policy. We are committed to protecting your personal data and respecting your privacy. This policy outlines how we collect, use, process, and disclose your information when you use our website and services.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. Data We Collect</h2>
          <p>We may collect and process the following types of data:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, etc., when you fill out a contact form or subscribe to our newsletter.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, such as IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Communication Data:</strong> Records of any correspondence between you and us.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. How We Use Your Data</h2>
          <p>We use the collected data for various purposes:</p>
          <ul className="list-disc list-inside ml-4">
            <li>To provide and maintain our services.</li>
            <li>To improve your experience on our website.</li>
            <li>To communicate with you, respond to inquiries, and send newsletters.</li>
            <li>To monitor the usage of our service and detect, prevent, and address technical issues.</li>
            <li>For marketing and promotional purposes, with your consent.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Your Data Protection Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to access, correct, or delete your data.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">6. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Last updated: October 26, 2023
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;