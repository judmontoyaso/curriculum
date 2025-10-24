import { useEffect, useRef } from 'react';

export default function TechPulse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let waves = [];
    let time = 0;

    // Ajustar tamaño del canvas - usando el padre directo
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
        
        // Reinicializar partículas después de resize
        particles = [];
        const isMobile = width < 640;
        const particleCount = isMobile ? 30 : 80; // Menos partículas en móvil
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      }
    };
    
    // Detectar si es móvil
    const isMobile = () => canvas.width < 640;

    // Clase para partículas
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3; // Más lento
        this.vy = (Math.random() - 0.5) * 0.3; // Más lento
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 181, 253, ${this.opacity})`; // purple-300
        ctx.fill();
      }
    }

    // Clase para ondas de pulso
    class Wave {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 200;
        this.speed = 1.5; // Más lento
        this.opacity = 1;
      }

      update() {
        this.radius += this.speed;
        this.opacity = 1 - (this.radius / this.maxRadius);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(196, 181, 253, ${this.opacity * 0.5})`; // purple-300
        ctx.lineWidth = 2;
        ctx.stroke();

        // Onda interna
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(147, 197, 253, ${this.opacity * 0.3})`; // blue-300
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      isFinished() {
        return this.radius >= this.maxRadius;
      }
    }

    // Inicializar canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Dibujar líneas de conexión entre partículas cercanas
    const drawConnections = () => {
      if (isMobile()) return; // Desactivar en móvil para mejor rendimiento
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - distance / 100) * 0.3;
            ctx.strokeStyle = `rgba(196, 181, 253, ${opacity})`; // purple-300
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Dibujar círculos centrales pulsantes
    const drawCenterPulse = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const pulse = Math.sin(time * 0.03) * 20 + 60; // Más lento (0.03 en lugar de 0.05)

      // Círculo exterior
      const gradient1 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulse + 40);
      gradient1.addColorStop(0, 'rgba(196, 181, 253, 0.4)'); // purple-300
      gradient1.addColorStop(0.5, 'rgba(147, 197, 253, 0.2)'); // blue-300
      gradient1.addColorStop(1, 'rgba(147, 197, 253, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulse + 40, 0, Math.PI * 2);
      ctx.fillStyle = gradient1;
      ctx.fill();

      // Círculo medio
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulse, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(196, 181, 253, 0.6)`; // purple-300
      ctx.lineWidth = 2;
      ctx.stroke();

      // Círculo central
      const gradient2 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulse - 20);
      gradient2.addColorStop(0, 'rgba(147, 197, 253, 0.6)'); // blue-300
      gradient2.addColorStop(1, 'rgba(196, 181, 253, 0)'); // purple-300
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulse - 20, 0, Math.PI * 2);
      ctx.fillStyle = gradient2;
      ctx.fill();
    };

    // Dibujar código binario cayendo
    const drawBinaryRain = () => {
      if (isMobile()) return; // Desactivar en móvil
      
      ctx.font = '12px monospace';
      for (let i = 0; i < 10; i++) {
        const x = (i * canvas.width) / 10 + Math.sin(time * 0.02 + i) * 20;
        const y = ((time * 2 + i * 50) % canvas.height);
        const binary = Math.random() > 0.5 ? '1' : '0';
        const opacity = 1 - (y / canvas.height);
        ctx.fillStyle = `rgba(196, 181, 253, ${opacity * 0.3})`; // purple-300
        ctx.fillText(binary, x, y);
      }
    };

    // Loop de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar efectos
      drawCenterPulse();
      if (!isMobile()) {
        drawBinaryRain();
        drawConnections();
      }

      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Actualizar y dibujar ondas
      waves = waves.filter(wave => {
        wave.update();
        wave.draw();
        return !wave.isFinished();
      });

      // Crear nuevas ondas - menos frecuente en móvil
      const waveInterval = isMobile() ? 120 : 90;
      if (time % waveInterval === 0) {
        const x = canvas.width / 2 + Math.sin(time * 0.02) * (isMobile() ? 50 : 100);
        const y = canvas.height / 2 + Math.cos(time * 0.03) * (isMobile() ? 50 : 100);
        waves.push(new Wave(x, y));
      }

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0"
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
      
      {/* Overlay con texto tecnológico */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-bold text-purple-300/30 dark:text-purple-200/30 animate-pulse">
            {'</>'}
          </div>
          <div className="text-sm md:text-base text-blue-300/50 dark:text-blue-200/50 font-mono mt-2">
            AI • Data • Automation
          </div>
        </div>
      </div>
    </div>
  );
}
