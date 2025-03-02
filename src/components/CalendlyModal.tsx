import React, { useEffect, useCallback } from 'react';
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
    onClose,
  });

  const handleClose = useCallback(() => {
    closeCalendly();
    onClose?.();
  }, [closeCalendly, onClose]);

  useEffect(() => {
    if (isScriptLoaded) {
      openCalendly();
    }

    return () => {
      closeCalendly();
    };
  }, [isScriptLoaded, openCalendly, closeCalendly]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleClose]);

  return null;
};

export default React.memo(CalendlyModal);
