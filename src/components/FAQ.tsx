import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useI18n } from '../i18n';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState( false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{question}</span>
        <Plus className={`w-6 h-6 text-[#40E0D0] transform transition-transform ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useI18n();
  const faqs = t('faq.questions');

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="faqs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{t('faq.title')}</h2>
        <div className="space-y-4 border border-gray-800 rounded-xl p-8 bg-[#1A1A1A]">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
