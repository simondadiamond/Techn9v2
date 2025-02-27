import React from 'react';
import { useI18n } from '../i18n';

const Privacy = () => {
  const { t } = useI18n();

  return (
    <div className="bg-black min-h-screen text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#40E0D0]">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              At Techn9, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. This policy complies with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-4">We collect information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Contact us through our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation</li>
              <li>Use our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Personal Information</h2>
            <p className="text-gray-300 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-4">Under PIPEDA, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct any inaccurate information</li>
              <li>Withdraw consent for the use of your personal information</li>
              <li>File a complaint about our privacy practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: info@techn9.com
              <br />
              Phone: (123) 456-7890
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="text-gray-400 mt-4">Last Updated: March 2024</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
