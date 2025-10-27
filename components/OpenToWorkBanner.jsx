import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useBanner } from '../contexts/BannerContext';

export default function OpenToWorkBanner() {
  const { isBannerVisible, setIsBannerVisible } = useBanner();

  if (!isBannerVisible) return null;

  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden fixed top-0 left-0 right-0 z-[100] min-h-[28px]">
      {/* Contenido que se desliza */}
      <div 
        className="whitespace-nowrap py-1.5"
        style={{
          animation: 'scroll-slow 40s linear infinite'
        }}
      >
        <div className="inline-flex items-center gap-8 px-4">
          {/* Repetimos el contenido varias veces para efecto continuo */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="inline-flex items-center gap-8">
              <span className="font-semibold text-sm">
                ✨ OPEN TO WORK
              </span>
              <span className="text-xs opacity-90">
                Full Stack Developer & Data Specialist
              </span>
              <span className="font-semibold text-sm">
                Disponible para nuevas oportunidades
              </span>
              <span className="text-xs opacity-90">
                Python • Next.js • AI/ML • Power BI
              </span>
              <Link 
                href="/contact" 
                className="text-xs font-bold underline hover:text-green-200 transition-colors"
              >
                Contáctame aquí
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Botón cerrar */}
      <button
        onClick={() => setIsBannerVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white rounded-full transition-colors z-10 bg-black/10"
        aria-label="Cerrar banner"
      >
        <FontAwesomeIcon icon={faTimes} className="text-sm" />
      </button>
    </div>
  );
}

