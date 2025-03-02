import React, { useEffect } from 'react';
import { useCalendly } from '../hooks/useCalendly';

interface CalendlyModalProps {
  url: string;
  onClose?: () => void;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({
  url,
  onClose,
  onLoad,
  onError,
}) => {
  const { openCalendly, closeCalendly, isScriptLoaded } = useCalendly({
    url,
    onLoad,
    onError,
  });

  useEffect(() => {
    if (isScriptLoaded) {
      openCalendly();
    }
    return () => {
      closeCalendly();
    };
  }, [isScriptLoaded, openCalendly, closeCalendly]);

  return null;
};

export default CalendlyModal;
