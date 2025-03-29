import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, MessageSquare, LineChart, Target } from 'lucide-react';
import { useI18n } from '../i18n';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      // *** MODIFICATION: Changed initial x and animate x to 0 ***
      initial={{ opacity: 0, x: 0 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
      // *** END MODIFICATION ***
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="text-center rounded-xl p-6 flex flex-col h-full hover:bg-white/5 transition-colors duration-300"
    >
      <motion.div
        className="bg-[#40E0D0] p-3 rounded-lg w-fit mx-auto mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon className="h-6 w-6 text-black" />
      </motion.div>
      <motion.h3
        className="text-white text-xl font-semibold mb-3"
        // Keeping opacity/delay animations for title/paragraph
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-400"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useI18n();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    // Using ref for the section-level animation trigger
    <section className="bg-[#0A0A0A] pt-12 pb-20 px-4" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
