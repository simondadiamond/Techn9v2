import React from 'react';
import { ClipboardList, Send, Package, Settings } from 'lucide-react';
import { useI18n } from '../i18n';

const ProcessStep = ({ number, icon: Icon, title, description }) => (
  <div className="text-center bg-[#1A1A1A] rounded-xl p-6 border border-gray-800">
    <div className="bg-[#40E0D0] p-3 rounded-lg w-fit mx-auto mb-4">
      <Icon className="h-6 w-6 text-black" />
    </div>
    <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Process = () => {
  const { t } = useI18n();

  const steps = [
    {
      number: 1,
      icon: ClipboardList,
      title: t('process.steps.subscribe.title'),
      description: t('process.steps.subscribe.description')
    },
    {
      number: 2,
      icon: Send,
      title: t('process.steps.request.title'),
      description: t('process.steps.request.description')
    },
    {
      number: 3,
      icon: Package,
      title: t('process.steps.receive.title'),
      description: t('process.steps.receive.description')
    },
    {
      number: 4,
      icon: Settings,
      title: t('process.steps.optimize.title'),
      description: t('process.steps.optimize.description')
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t('process.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
