import React from 'react';
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
  const { closeCalendly } = useCalendly({
    url,
    onLoad,
    onError,
  });

  React.useEffect(() => {
    return () => {
      closeCalendly();
    };
  }, [closeCalendly]);

  return null;
};

export default CalendlyModal;
