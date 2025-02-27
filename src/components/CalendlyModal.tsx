import React, { useEffect } from 'react';

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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
        <div 
          className="calendly-inline-widget w-full h-full"
          data-url={url}
        />
      </div>
    </div>
  );
};

export default CalendlyModal;
