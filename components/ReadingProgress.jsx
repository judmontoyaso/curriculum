import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const content = document.documentElement;
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = content.scrollHeight;
      
      // Calcular el progreso como porcentaje
      const scrollProgress = (scrolled / (fullHeight - viewportHeight)) * 100;
      setWidth(scrollProgress < 0 ? 0 : scrollProgress > 100 ? 100 : scrollProgress);
    };

    // Calcular progreso inicial
    calculateProgress();

    // Actualizar en scroll
    window.addEventListener('scroll', calculateProgress);
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, []);

  return (
    <div className="sticky top-16 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-40">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 to-teal-500 dark:from-cyan-600 dark:to-teal-700 transition-all duration-150 ease-out"
        style={{ width: `${width}%` }}
      >
        <div className="absolute right-0 top-0 h-full w-2 bg-teal-500 dark:bg-teal-700 rounded-full shadow-lg transform translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default ReadingProgress;