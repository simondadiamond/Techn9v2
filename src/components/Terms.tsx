import React from 'react';
import { useI18n } from '../i18n';

const Terms = () => {
  const { t } = useI18n();

  return (
    <div className="bg-black min-h-screen text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#40E0D0]">Terms of Service</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service govern your use of the website and services offered by Techn9. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
            <p className="text-gray-300 mb-4">By using our services, you agree to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Use the services in accordance with all applicable laws and regulations</li>
              <li>Maintain the security of your account information</li>
              <li>Not interfere with or disrupt the services or servers</li>
              <li>Not use the services for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The service and its original content, features, and functionality are owned by Techn9 and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p className="text-gray-300 mb-4">
              When you provide content through our services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute that content for the purpose of providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Techn9, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at:
              <br />
              Email: info@techn9.com
              <br />
              Phone: (123) 456-7890
            </p>
          </section>

          <p className="text-gray-400 mt-8">Last Updated: March 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
