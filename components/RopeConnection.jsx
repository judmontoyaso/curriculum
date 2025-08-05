import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RopeConnection = ({ topElementRef, bottomElementRef }) => {
  const [path, setPath] = useState('');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!topElementRef?.current || !bottomElementRef?.current) return;

    const updatePath = () => {
      const topElement = topElementRef.current.getBoundingClientRect();
      const bottomElement = bottomElementRef.current.getBoundingClientRect();
      const containerRect = topElement.width;

      // Calcular el centro horizontal de las tarjetas
      const centerX = containerRect / 2;

      // Calcular las posiciones verticales relativas
      const startY = 1;
      const endY = bottomElement.top - topElement.bottom;

      // Puntos de control para una curva suave
      const controlPoint1X = centerX - 40;
      const controlPoint1Y = startY + (endY * 0.3);
      const controlPoint2X = centerX + 40;
      const controlPoint2Y = startY + (endY * 0.7);

      // Crear el path SVG
      const pathData = `
        M ${centerX} ${startY}
        C ${controlPoint1X} ${controlPoint1Y},
          ${controlPoint2X} ${controlPoint2Y},
          ${centerX} ${endY}
      `;

      setPath(pathData);
      setDimensions({
        width: containerRect,
        height: endY
      });
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [topElementRef, bottomElementRef]);

  return (
    <div className="relative w-full h-full">
      <svg
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        style={{ overflow: 'visible' }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ropeGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#5eead4" /> {/* teal-300 */}
            <stop offset="100%" stopColor="#14b8a6" /> {/* teal-500 */}
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          stroke="url(#ropeGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Puntos decorativos en los extremos */}
        {path && (
          <>
            <motion.circle
              cx={dimensions.width / 2}
              cy={1}
              r="3"
              fill="#5eead4" // teal-300
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.circle
              cx={dimensions.width / 2}
              cy={dimensions.height}
              r="3"
              fill="#14b8a6" // teal-500
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export default RopeConnection;