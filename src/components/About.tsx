import React from 'react';
import { useI18n } from '../i18n';

const About = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{t('about.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8">
          <div>
            <h3 className="text-white text-xl mb-4">{t('about.story.title')}</h3>
            <p className="text-gray-300 mb-6">
              {t('about.story.description')}
            </p>
          </div>
          <div className="relative w-full h-[330px] overflow-hidden rounded-xl">
            <img 
              src="https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg" 
              alt="AI Technology" 
              className="absolute w-full h-[170%] object-cover object-center"
              style={{
                top: '-49%'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
