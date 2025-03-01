import { useState, useEffect } from 'react';

declare global {
  interface Window {
    Calendly: any;
  }
}

interface UseCalendlyOptions {
  url: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const useCalendly = ({ url, onLoad, onError }: UseCalendlyOptions) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  useEffect(() => {
    // Check if Calendly script is already loaded
    if (window.Calendly) {
      setIsScriptLoaded(true);
      onLoad?.();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      setIsScriptLoaded(true);
      onLoad?.();
    };
    script.onerror = () => {
      onError?.(new Error('Failed to load Calendly widget'));
    };

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';

    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, [onLoad, onError]);

  const openCalendly = () => {
    if (!isScriptLoaded || !window.Calendly) {
      console.warn('Calendly script not loaded');
      return;
    }

    if (isWidgetOpen) {
      window.Calendly.closePopupWidget();
    }

    window.Calendly.initPopupWidget({
      url,
      onClose: () => setIsWidgetOpen(false),
    });
    setIsWidgetOpen(true);
  };

  const closeCalendly = () => {
    if (window.Calendly && isWidgetOpen) {
      window.Calendly.closePopupWidget();
      setIsWidgetOpen(false);
    }
  };

  return {
    openCalendly,
    closeCalendly,
    isScriptLoaded,
    isWidgetOpen,
  };
};
