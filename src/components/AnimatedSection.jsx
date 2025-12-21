import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-in-up',
  stagger = false 
}) => {
  const [ref, isVisible] = useScrollAnimation({ once: true });

  const animationClass = isVisible 
    ? `animate-${animation}` 
    : 'opacity-0';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

