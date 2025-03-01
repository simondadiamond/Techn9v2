import React from 'react';
import { useI18n } from '../i18n';

const About = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{t('about.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-gray-800 rounded-xl p-8 bg-[#1A1A1A]">
          <div>
            <h3 className="text-white text-xl mb-4">{t('about.story.title')}</h3>
            <p className="text-gray-300 mb-6">
              {t('about.story.description')}
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Team collaboration" 
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
