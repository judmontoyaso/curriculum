import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFlask,
  faDatabase,
  faChartLine,
  faRobot,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { RoughNotation } from "react-rough-notation";

const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "Plataforma de Visualización de Experimentos",
      descripcion: "Desarrollo de una plataforma web para la visualización de reportes gráficos interactivos que permite optimizar la presentación de experimentos, utilizando FastAPI para el backend y Next.js.",
      tecnologias: ["Python", "Next.js", "FastAPI", "AWS", "Machine Learning"],
      icono: faChartLine,
      colorClass: "text-blue-500",
      bgClass: "bg-blue-100 dark:bg-blue-900",
      textClass: "text-blue-800 dark:text-blue-200",
      github: "https://github.com/judmontoyaso/experimentos-platform",
      demo: "https://experimentos-platform.vercel.app",
      imagen: "/proyectos/experimentos.png"
    },
    {
      id: 2,
      titulo: "Agente IA para Resúmenes",
      descripcion: "Creación de un agente de IA para la generación automática de resúmenes a partir de una base de datos de conocimiento, facilitando el acceso a información clave.",
      tecnologias: ["Python", "Machine Learning", "NLP", "AWS"],
      icono: faRobot,
      colorClass: "text-purple-500",
      bgClass: "bg-purple-100 dark:bg-purple-900",
      textClass: "text-purple-800 dark:text-purple-200",
      github: "https://github.com/judmontoyaso/ia-agent",
      demo: "https://ia-agent.vercel.app",
      imagen: "/proyectos/ia-agent.png"
    },
    {
      id: 3,
      titulo: "Sistema de ETL y Dashboards",
      descripcion: "Desarrollo de soluciones ETL y dashboards con Power BI y SQL Server, integrando APIs empresariales para la visualización de datos en tiempo real.",
      tecnologias: ["Power BI", "SQL Server", "ETL", "API Integration"],
      icono: faDatabase,
      colorClass: "text-green-500",
      bgClass: "bg-green-100 dark:bg-green-900",
      textClass: "text-green-800 dark:text-green-200",
      github: "https://github.com/judmontoyaso/etl-dashboard",
      demo: "https://etl-dashboard.vercel.app",
      imagen: "/proyectos/dashboard.png"
    },
    {
      id: 4,
      titulo: "Optimización de Campañas Google Ads",
      descripcion: "Implementación de un sistema de segmentación de leads y optimización de campañas en Google Ads usando técnicas de clusterización para mejorar la relevancia y conversión.",
      tecnologias: ["Python", "Machine Learning", "Google Ads API", "Data Analysis"],
      icono: faGlobe,
      colorClass: "text-amber-500",
      bgClass: "bg-amber-100 dark:bg-amber-900",
      textClass: "text-amber-800 dark:text-amber-200",
      github: "https://github.com/judmontoyaso/ads-optimization",
      demo: "https://ads-optimization.vercel.app",
      imagen: "/proyectos/ads.png"
    },
    {
      id: 5,
      titulo: "Investigación en Biotecnología",
      descripcion: "Participación en el proyecto de investigación sobre la estandarización técnica para evaluar la actividad antimicrobiana del lactosuero dulce fermentado con gránulos de kefir.",
      tecnologias: ["Biotecnología", "Investigación", "Análisis de Datos", "Laboratorio"],
      icono: faFlask,
      colorClass: "text-red-500",
      bgClass: "bg-red-100 dark:bg-red-900",
      textClass: "text-red-800 dark:text-red-200",
      github: "https://github.com/judmontoyaso/biotec-research",
      demo: null,
      imagen: "/proyectos/biotec.png"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <RoughNotation
            type="underline"
            color="#3B82F6"
            strokeWidth={2}
            padding={[0, 2]}
          >
            Mis Proyectos
          </RoughNotation>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Una selección de proyectos que demuestran mis habilidades en desarrollo web, 
          ciencia de datos y biotecnología.
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Imagen del proyecto */}
            <div className="relative h-48 w-full">
              <Image
                src={proyecto.imagen}
                alt={proyecto.titulo}
                fill
                className="object-cover"
              />
            </div>

            {/* Contenido del proyecto */}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={proyecto.icono}
                  className={`text-2xl mr-3 ${proyecto.colorClass}`}
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {proyecto.titulo}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {proyecto.descripcion}
              </p>

              {/* Tecnologías */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Tecnologías utilizadas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${proyecto.bgClass} ${proyecto.textClass} rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enlaces */}
              <div className="flex justify-end space-x-4">
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-xl" />
                </a>
                {proyecto.demo && (
                  <a
                    href={proyecto.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos; 