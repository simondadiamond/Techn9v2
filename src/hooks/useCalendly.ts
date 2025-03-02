import { useState, useEffect, useCallback } from 'react';

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

    document.body.appendChild(script);

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, [onLoad, onError]);

  const openCalendly = useCallback(() => {
    if (!isScriptLoaded || !window.Calendly) {
      console.warn('Calendly script not loaded');
      return;
    }

    window.Calendly.initPopupWidget({
      url,
      onClose: () => {
        setIsWidgetOpen(false);
      },
    });
    setIsWidgetOpen(true);
  }, [isScriptLoaded, url]);

  const closeCalendly = useCallback(() => {
    if (window.Calendly && isWidgetOpen) {
      window.Calendly.closePopupWidget();
      setIsWidgetOpen(false);
    }
  }, [isWidgetOpen]);

  return {
    openCalendly,
    closeCalendly,
    isScriptLoaded,
    isWidgetOpen,
  };
};
