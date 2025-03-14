import React from 'react';
import { Cpu, MessageSquare, LineChart, Target } from 'lucide-react';
import { useI18n } from '../i18n';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="text-center rounded-xl p-6 flex flex-col h-full">
    <div className="bg-[#40E0D0] p-3 rounded-lg w-fit mx-auto mb-4">
      <Icon className="h-6 w-6 text-black" />
    </div>
    <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => {
  const { t } = useI18n();

  const services = [
    {
      icon: Cpu,
      title: t('services.workflow.title'),
      description: t('services.workflow.description')
    },
    {
      icon: MessageSquare,
      title: t('services.gpt.title'),
      description: t('services.gpt.description')
    },
    {
      icon: LineChart,
      title: t('services.consulting.title'),
      description: t('services.consulting.description')
    },
    {
      icon: Target,
      title: t('services.strategy.title'),
      description: t('services.strategy.description')
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
