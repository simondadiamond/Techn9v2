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
    // Initialize Calendly popup when component mounts
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: url
      });
    }

    // Cleanup function to close popup when component unmounts
    return () => {
      if (window.Calendly && window.Calendly.closePopupWidget) {
        window.Calendly.closePopupWidget();
      }
    };
  }, [url]);

  // No need for Modal component since Calendly handles its own popup
  return null;
};

export default CalendlyModal;
