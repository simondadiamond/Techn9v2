import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, DollarSign, Settings, BarChart, Target, Database } from 'lucide-react';
import { useI18n } from '../i18n';

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center rounded-xl p-6"
    >
      <motion.div 
        className="bg-[#40E0D0] p-3 rounded-lg w-fit mx-auto mb-4"
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <Icon className="h-6 w-6 text-black" />
      </motion.div>
      <motion.h3 
        className="text-white text-xl font-semibold mb-3"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Benefits = () => {
  const { t } = useI18n();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    <section className="bg-[#0A0A0A] py-20 px-4" id="benefits" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t('benefits.title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
