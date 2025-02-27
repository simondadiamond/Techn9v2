import React, { useEffect } from 'react';
import { Modal } from './ui/modal';

interface CalendlyModalProps {
  url: string;
  onClose: () => void;
}

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ url, onClose }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div 
          className="calendly-inline-widget w-full h-full"
          data-url={url}
        />
      </div>
    </Modal>
  );
};

export default CalendlyModal;
