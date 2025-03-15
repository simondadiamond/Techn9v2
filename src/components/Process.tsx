import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, FileText, Rocket, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n';

// ... (keep existing STEP_IMAGES constant)

const ProcessStep = ({ number, icon: Icon, title, isActive, onClick, showConnector = true }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: number * 0.1 }}
      className={`flex items-start space-x-4 cursor-pointer transition-all duration-300 py-4 md:py-8 ${
        isActive ? 'scale-[1.02] md:scale-105' : 'opacity-70 hover:opacity-90'
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <motion.div 
          className={`
            w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
            ${isActive ? 'bg-[#40E0D0]' : 'bg-gray-800'}
            transition-colors duration-300
          `}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon className={`h-5 w-5 md:h-6 md:w-6 ${isActive ? 'text-black' : 'text-[#40E0D0]'}`} />
        </motion.div>
        {showConnector && number < 4 && (
          <motion.div 
            className="absolute top-[3.5rem] md:top-[4.5rem] left-1/2 w-px h-16 md:h-24 bg-gray-800 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: number * 0.1 }}
          />
        )}
      </div>
      <div className="flex-1">
        <motion.h3 
          className={`text-lg md:text-xl font-semibold ${
            isActive ? 'text-[#40E0D0]' : 'text-white'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: number * 0.1 + 0.2 }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const ImageDisplay = ({ stepNumber, description }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageData = STEP_IMAGES[stepNumber];
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden"
    >
      <div className="p-4 md:p-8 space-y-4 md:space-y-6">
        <div className="relative">
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 border-4 border-[#40E0D0] border-t-transparent rounded-full"></div>
                  <div className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 border-4 border-[#40E0D0]/30 rounded-full"></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div 
            className="aspect-video rounded-xl overflow-hidden bg-black/50 relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: imageData.overlayColor }}
            />
            
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
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
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-emerald-900/20" />
                <div className="absolute inset-0 mix-blend-overlay opacity-50 bg-[radial-gradient(circle_at_50%_50%,_rgba(64,224,208,0.2),transparent)]" />
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.p 
          className="text-gray-400 text-base leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

// ... (keep rest of the Process component code, just wrap the section with motion.section)

const Process = () => {
  const { t } = useI18n();
  const [activeStep, setActiveStep] = useState(1);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // ... (keep existing steps array)

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0A0A0A] py-12 md:py-20 px-4" 
      id="process"
    >
      {/* ... (keep existing JSX structure) */}
    </motion.section>
  );
};

export default Process;
