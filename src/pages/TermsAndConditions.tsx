import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl prose prose-lg text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by Innovate Agency, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">2. Services Provided</h2>
          <p>
            Innovate Agency provides web design & development, AI voice agents, AI chatbots, and other digital marketing and AI solutions. The specifics of each service will be outlined in a separate service agreement or proposal.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">3. User Obligations</h2>
          <p>As a user of our services, you agree to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Provide accurate and complete information when requested.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Not use our services for any unlawful or prohibited activities.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to Innovate Agency.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">5. Limitation of Liability</h2>
          <p>
            Innovate Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice before any new terms take effect.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Last updated: October 26, 2023
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;