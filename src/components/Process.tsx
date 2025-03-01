import React, { useState } from 'react';
import { MessageCircle, FileText, Rocket, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n';

const STEP_IMAGES = {
  1: {
    url: '/images/process/consultation.jpg',
    fallback: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    overlayColor: 'rgba(64, 224, 208, 0.1)'
  },
  2: {
    url: '/images/process/planning.jpg',
    fallback: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    overlayColor: 'rgba(64, 224, 208, 0.1)'
  },
  3: {
    url: '/images/process/innovation-v2.jpg',
    fallback: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1200&q=80',
    overlayColor: 'rgba(64, 224, 208, 0.15)'
  },
  4: {
    url: '/images/process/optimization.jpg',
    fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    overlayColor: 'rgba(64, 224, 208, 0.1)'
  }
};

const ProcessStep = ({ number, icon: Icon, title, isActive, onClick }) => (
  <div 
    className={`flex items-start space-x-4 cursor-pointer transition-all duration-300 py-8 ${
      isActive ? 'scale-105' : 'opacity-70 hover:opacity-90'
    }`}
    onClick={onClick}
  >
    <div className="relative">
      <div className={`
        w-12 h-12 rounded-full flex items-center justify-center
        ${isActive ? 'bg-[#40E0D0]' : 'bg-gray-800'}
        transition-colors duration-300
      `}>
        <Icon className={`h-6 w-6 ${isActive ? 'text-black' : 'text-[#40E0D0]'}`} />
      </div>
      {number < 4 && (
        <div className="absolute top-[4.5rem] left-1/2 w-px h-24 bg-gray-800 -translate-x-1/2" />
      )}
    </div>
    <div className="flex-1">
      <h3 className={`text-xl font-semibold ${
        isActive ? 'text-[#40E0D0]' : 'text-white'
      }`}>{title}</h3>
    </div>
  </div>
);

const ImageDisplay = ({ stepNumber, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageData = STEP_IMAGES[stepNumber];

  return (
    <div className="bg-[#1A1A1A] rounded-2xl border border-gray-800 overflow-hidden">
      <div className="p-8 space-y-6">
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-[#40E0D0] border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-12 h-12 border-4 border-[#40E0D0]/30 rounded-full"></div>
              </div>
            </div>
          )}
          
          <div className="aspect-video rounded-xl overflow-hidden bg-black/50 relative group">
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: imageData.overlayColor }}
            />
            
            <img
              src={hasError ? imageData.fallback : imageData.url}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onLoad={() => setIsLoading(false)}
              onError={(e) => {
                setHasError(true);
                setIsLoading(false);
                e.currentTarget.src = imageData.fallback;
              }}
            />

            {stepNumber === 3 && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-emerald-900/20" />
                <div className="absolute inset-0 mix-blend-overlay opacity-50 bg-[radial-gradient(circle_at_50%_50%,_rgba(64,224,208,0.2),transparent)]" />
              </div>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Process = () => {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: t('process.step1.title'),
      description: t('process.step1.description')
    },
    {
      number: 2,
      icon: FileText,
      title: t('process.step2.title'),
      description: t('process.step2.description')
    },
    {
      number: 3,
      icon: Rocket,
      title: t('process.step3.title'),
      description: t('process.step3.description')
    },
    {
      number: 4,
      icon: Sparkles,
      title: t('process.step4.title'),
      description: t('process.step4.description')
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-20 px-4" id="process">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          {t('process.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            {steps.map((step) => (
              <ProcessStep
                key={step.number}
                {...step}
                isActive={activeStep === step.number}
                onClick={() => setActiveStep(step.number)}
              />
            ))}
          </div>

          <div className="md:col-span-8">
            <ImageDisplay 
              stepNumber={activeStep} 
              description={steps[activeStep - 1].description}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
