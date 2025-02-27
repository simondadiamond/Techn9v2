import React from 'react';
import { Zap, DollarSign, Settings, BarChart, Target, Database } from 'lucide-react';
import { useI18n } from '../i18n';

const BenefitCard = ({ icon: Icon, title, description }) => (
  <div className="text-center border border-gray-800 rounded-xl p-6 bg-[#1A1A1A]">
    <div className="bg-[#40E0D0] p-3 rounded-lg w-fit mx-auto mb-4">
      <Icon className="h-6 w-6 text-black" />
    </div>
    <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Benefits = () => {
  const { t } = useI18n();

  const benefits = [
    {
      icon: Zap,
      title: t('benefits.efficiency.title'),
      description: t('benefits.efficiency.description')
    },
    {
      icon: DollarSign,
      title: t('benefits.cost.title'),
      description: t('benefits.cost.description')
    },
    {
      icon: Settings,
      title: t('benefits.customization.title'),
      description: t('benefits.customization.description')
    },
    {
      icon: BarChart,
      title: t('benefits.scalability.title'),
      description: t('benefits.scalability.description')
    },
    {
      icon: Target,
      title: t('benefits.accuracy.title'),
      description: t('benefits.accuracy.description')
    },
    {
      icon: Database,
      title: t('benefits.insights.title'),
      description: t('benefits.insights.description')
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="benefits">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('benefits.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
