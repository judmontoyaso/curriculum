import React, { useRef } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faBook, faEnvelope, faRobot, faCloud, faChartLine } from "@fortawesome/free-solid-svg-icons";
import RopeConnection from "./RopeConnection";
import AvatarCarousel from "./AvatarCarousel";

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
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {/* Contenedor sin marco visible */}
            <div ref={firstCardRef} className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-start space-y-8 md:space-y-0 md:space-x-8">
                {/* Avatar Carousel */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-[280px] h-[360px] relative">
                    <AvatarCarousel />
                  </div>
                </div>

                {/* Información */}
                <div className="flex-grow space-y-5 text-center md:text-left w-full">
                  <div className="max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-3">
                      Desarrollador full stack y científico de datos especializado en{' '}
                      <span className="bg-cyan-100 dark:bg-cyan-900/30 px-1 font-semibold text-cyan-800 dark:text-cyan-300">
                        Inteligencia Artificial
                      </span>
                      ,{' '}
                      <span className="bg-purple-100 dark:bg-purple-900/30 px-1 font-semibold text-purple-800 dark:text-purple-300">
                        Automatización
                      </span>
                      {' '}y{' '}
                      <span className="bg-amber-100 dark:bg-amber-900/30 px-1 font-semibold text-amber-800 dark:text-amber-300">
                        Visualización de Datos
                      </span>
                      . Con más de 3 años transformando datos en soluciones inteligentes usando Python, Next.js, IA Generativa y herramientas de automatización.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 leading-relaxed">
                      Creador de agentes IA, pipelines de datos automatizados, dashboards interactivos y aplicaciones web modernas. 
                      Apasionado por combinar desarrollo web, machine learning, visualización de datos y IA para crear soluciones innovadoras y escalables.
                    </p>
                  </div>

                  {/* Tecnologías con mejor diseño */}
                  <div className="flex flex-col space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      {[
                        { icon: "devicon-python-plain", text: "Python", color: "from-blue-500 to-yellow-500", isDevicon: true },
                        { icon: "devicon-javascript-plain", text: "JavaScript", color: "from-yellow-400 to-yellow-600", isDevicon: true },
                        { icon: "devicon-csharp-plain", text: "C#", color: "from-purple-500 to-purple-700", isDevicon: true },
                        { icon: "devicon-mysql-plain", text: "SQL", color: "from-blue-600 to-cyan-600", isDevicon: true },
                        { icon: faRobot, text: "AI/LLMs", color: "from-pink-500 to-rose-600", isDevicon: false },
                        { icon: faChartLine, text: "Power BI", color: "from-amber-500 to-orange-600", isDevicon: false },
                        { icon: "devicon-docker-plain", text: "Docker", color: "from-blue-400 to-blue-600", isDevicon: true },
                        { icon: faCloud, text: "AWS/Cloud", color: "from-orange-500 to-red-600", isDevicon: false }
                      ].map((tech, index) => (
                        <div 
                          key={index} 
                          className="group relative flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
                          {tech.isDevicon ? (
                            <i className={`${tech.icon} text-2xl text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300`}></i>
                          ) : (
                            <FontAwesomeIcon icon={tech.icon} className="text-2xl text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                          )}
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Segundo contenedor sin marco visible */}
            <div ref={secondCardRef} className="p-8 pt-4 mt-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Actualmente especializado en desarrollar <span className="font-semibold text-cyan-600 dark:text-cyan-400">soluciones full-stack</span> combinadas con 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> agentes de IA</span> y 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> automatizaciones inteligentes</span>. 
                Trabajo con tecnologías web modernas (Next.js, React), LLMs (GPT, Claude), análisis de datos (Pandas, SQL) y plataformas de automatización (N8N, Zapier).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <div className="text-2xl mb-2">💻</div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Full Stack Dev</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aplicaciones web modernas con Next.js, React, Python, .NET y APIs robustas</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="text-2xl mb-2">🤖</div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">IA & Automation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Agentes inteligentes, LLMs, workflows automatizados y content creation</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="text-2xl mb-2">📊</div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Data & Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ETL, pipelines, ML, visualización con Power BI y análisis avanzado</p>
                </div>
              </div>
              
              {/* Línea inferior decorativa */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 dark:via-purple-600 to-transparent mt-6"></div>
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