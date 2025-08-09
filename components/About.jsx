import React, { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBook, faEnvelope, faRobot, faCloud, faChartLine } from "@fortawesome/free-solid-svg-icons";
import RopeConnection from "./RopeConnection";

const QuickLink = ({ href, icon, text, color }) => (
  <Link href={href}>
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 ${color}`}>
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={icon} className="text-xl" />
        <span className="font-medium">{text}</span>
      </div>
    </div>
  </Link>
);

import CompetenciasGrid from './CompetenciasGrid';

const About = () => {
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            <div ref={firstCardRef} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Foto y redes sociales */}
                <div className="flex-shrink-0 space-y-4">
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="/IMG-20250503-WA0007-fotor-20250512135928.jpg"
                      alt="Juan David"
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="https://github.com/judmontoyaso" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/juansolorzano" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>

                {/* Información */}
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <div className="prose prose-lg dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-300">
                      Soy un desarrollador full stack y científico de datos con más de 3 años de experiencia. 
                      Me especializo en el desarrollo de soluciones de Machine Learning, visualización de datos y aplicaciones web usando Python, Next.js y C#.
                    </p>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-wrap gap-3">
                      {[
                        { icon: "devicon-python-plain", text: "Python", isDevicon: true },
                        { icon: "devicon-csharp-plain", text: "C#", isDevicon: true },
                        { icon: "devicon-javascript-plain", text: "JavaScript", isDevicon: true },
                        { icon: "devicon-docker-plain", text: "Docker", isDevicon: true },
                        { icon: "devicon-mysql-plain", text: "SQL", isDevicon: true },
                        { icon: faRobot, text: "Machine Learning", isDevicon: false },
                        { icon: faCloud, text: "Cloud Architecture", isDevicon: false },
                        { icon: faChartLine, text: "Data Visualization", isDevicon: false }
                      ].map((tech, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg hover:shadow-md transition-shadow">
                          {tech.isDevicon ? (
                            <i className={`${tech.icon} text-xl text-gray-700 dark:text-gray-300`}></i>
                          ) : (
                            <FontAwesomeIcon icon={tech.icon} className="text-xl text-gray-700 dark:text-gray-300" />
                          )}
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{tech.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-20 -mt-1">
              <RopeConnection topElementRef={firstCardRef} bottomElementRef={secondCardRef} />
            </div>

            <div ref={secondCardRef} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 -mt-1">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Actualmente estoy disponible para nuevas oportunidades donde pueda aplicar mi experiencia en desarrollo web y ciencia de datos. 
                Me apasiona crear soluciones innovadoras combinando tecnologías web modernas con machine learning para resolver problemas complejos.
              </p>
            </div>

            {/* Video de Presentación */}
            <div className="mt-12 pt-12 relative">
              {/* Elementos decorativos - izquierda */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-cyan-300/20 to-teal-400/20 rounded-full blur-xl"></div>
              <div className="absolute left-8 top-1/3 w-8 h-8 bg-cyan-400/30 rounded-lg rotate-45"></div>
              
              {/* Elementos decorativos - derecha */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-bl from-teal-300/20 to-cyan-400/20 rounded-full blur-xl"></div>
              <div className="absolute right-8 bottom-1/3 w-8 h-8 bg-teal-400/30 rounded-lg rotate-12"></div>
              
              {/* Líneas decorativas */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent"></div>
              
              {/* Contenedor del video con borde gradiente */}
              <div className="relative max-w-xs mx-auto p-1 rounded-xl bg-gradient-to-br from-cyan-300/50 via-teal-300/50 to-cyan-300/50">
                <div className="w-full rounded-xl overflow-hidden shadow-lg backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
                  <video 
                    className="w-full"
                    controls
                    playsInline
                  >
                    <source src="/videocv.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CompetenciasGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;