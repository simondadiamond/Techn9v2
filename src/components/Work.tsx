import React from 'react';
import { useI18n } from '../i18n';

const WorkCard = ({ category, title, overview, image }) => (
  <div className="mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-[#111111] to-[#0A0A0A]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6">
        <div className="text-[#40E0D0] mb-2">{category}</div>
        <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
        <div className="text-gray-300 mb-4">
          <h4 className="text-white mb-2">Overview:</h4>
          <p>{overview}</p>
        </div>
      </div>
      <div className="h-[300px] md:h-auto">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const Work = () => {
  const { t } = useI18n();

  const projects = [
    {
      category: t('work.projects.ecommerce.category'),
      title: t('work.projects.ecommerce.title'),
      overview: t('work.projects.ecommerce.overview'),
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      category: t('work.projects.finance.category'),
      title: t('work.projects.finance.title'),
      overview: t('work.projects.finance.overview'),
      image: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      category: t('work.projects.retail.category'),
      title: t('work.projects.retail.title'),
      overview: t('work.projects.retail.overview'),
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="work">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">{t('work.title')}</h2>
        {projects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Work;
