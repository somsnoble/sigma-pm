import React from 'react';

export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_wbt0t0q",
  TEMPLATE_ID: "template_psdpioz",
  PUBLIC_KEY: "J6tA9q8Ekd6ATvrgL",
};

export const SigmaLogo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <span className={`font-serif text-3xl font-light select-none ${className}`}>&Sigma;</span>
);