import { useState } from 'react';

const avatars = [
  { 
    src: '/avatar/original.png', 
    alt: 'Juan David - Developer', 
    label: '👨‍💻 Developer',
    phrase: 'Transformando datos en decisiones'
  },
  { 
    src: '/avatar/programador.png', 
    alt: 'Juan David - AI Architect', 
    label: '🤖 AI Architect',
    phrase: 'Construyendo el futuro con IA'
  },
  { 
    src: '/avatar/pirata.png', 
    alt: 'Juan David - Automation Expert', 
    label: '⚡ Automation Expert',
    phrase: 'Automatizo para liberar potencial'
  },
  { 
    src: '/avatar/astronauta.png', 
    alt: 'Juan David - Cloud Engineer', 
    label: '🚀 Cloud Engineer',
    phrase: 'Escalando soluciones en la nube'
  },
  { 
    src: '/avatar/chef.png', 
    alt: 'Juan David - Data Chef', 
    label: '👨‍🍳 Data Chef',
    phrase: 'Cocinando insights con datos'
  },
  { 
    src: '/avatar/tesoros.png', 
    alt: 'Juan David - Innovation Hunter', 
    label: '🗺️ Innovation Hunter',
    phrase: 'Descubriendo oportunidades ocultas'
  }
];

export default function AvatarCarousel({ className = "" }) {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentAvatar((prev) => (prev + 1) % avatars.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleHover = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentAvatar((prev) => (prev + 1) % avatars.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Contenedor del avatar con efectos */}
      <div 
        className="relative w-full h-full cursor-pointer group"
        onClick={handleClick}
        onMouseEnter={handleHover}
      >
        {/* Círculo de fondo con gradiente */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 group-hover:scale-110 transition-transform duration-500"></div>

        {/* Efecto Matrix de fondo - SOLO EN DESKTOP */}
        <div className="hidden lg:block absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <div className="matrix-rain"></div>
        </div>

        {/* Imagen del avatar con transición - CON MARCO Y EFECTOS */}
        <div className={`relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl transition-all duration-300 bg-transparent ${
          isAnimating ? 'scale-95 rotate-12 opacity-0' : 'scale-100 rotate-0 opacity-100'
        }`}>
          <img
            src={avatars[currentAvatar].src}
            alt={avatars[currentAvatar].alt}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
            style={{ mixBlendMode: 'normal' }}
          />
          
          {/* Overlay con gradiente en hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Efecto de escaneo - SOLO EN DESKTOP */}
          <div className="hidden lg:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="scan-line"></div>
          </div>
        </div>
      </div>

      {/* Etiqueta flotante - fuera del contenedor principal */}
      <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        isAnimating ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
      }`}>
        <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
          {avatars[currentAvatar].label}
        </div>
      </div>

      {/* Indicadores de avatar - debajo de la etiqueta */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
        {avatars.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentAvatar(index);
                  setIsAnimating(false);
                }, 300);
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentAvatar === index 
                ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50' 
                : 'bg-gray-400 hover:bg-gray-300 scale-100'
            }`}
            aria-label={`Avatar ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
