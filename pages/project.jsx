import React from "react";
import GithubRepo from "../components/GithubRepo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFlask,
  faRobot,
  faTools,
  faChartLine,
  faGlobe,
  faBriefcase,
  faCodeBranch,
  faCode
} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ proyecto }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all duration-300 p-4 border border-gray-100 dark:border-gray-700">
    <div className="flex items-center gap-2 mb-3">
      <div className={`p-2 rounded-md ${proyecto.bgClass}`}>
        <FontAwesomeIcon
          icon={proyecto.icono}
          className={`text-lg ${proyecto.iconClass}`}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">
        {proyecto.titulo}
      </h3>
    </div>

    <div className="space-y-2.5">
      {/* Rol */}
      <div className="flex items-center">
        <span className="font-bold text-gray-600 dark:text-gray-300 min-w-[50px]">
          Rol:
        </span>
        <span className="text-gray-700 dark:text-gray-300 ml-2 line-clamp-1">
          {proyecto.rol}
        </span>
      </div>

      {/* Reto */}
      <div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-1">
          Reto:
        </h4>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
          {proyecto.reto}
        </p>
      </div>

      {/* Solución */}
      <div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-1">
          Solución:
        </h4>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
          {proyecto.solucion}
        </p>
      </div>

      {/* Stack tecnológico */}
      <div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-1.5">
          Stack:
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {proyecto.stack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Project = () => {
  const proyectosEmpresariales = [
    {
      id: 1,
      titulo: "Plataforma de visualización de reportes científicos",
      rol: "Ingeniero de Datos / Desarrollador Full Stack",
      reto: "Presentar visualizaciones interactivas para resultados experimentales complejos.",
      solucion: "Desarrollo de plataforma con FastAPI (backend) y Next.js (frontend) para cargar y consultar reportes segmentados por experimento.",
      stack: ["Python", "FastAPI", "Next.js", "AWS", "PostgreSQL"],
      icono: faFlask,
      bgClass: "bg-blue-50 dark:bg-blue-900/30",
      iconClass: "text-blue-600 dark:text-blue-400"
    },
    {
      id: 2,
      titulo: "Agente de IA para generación de resúmenes técnicos",
      rol: "Desarrollador de soluciones IA",
      reto: "Mejorar el acceso a información técnica dispersa en bases de datos documentales.",
      solucion: "Diseño e implementación de un agente de IA basado en embeddings para responder consultas con lenguaje natural y resúmenes contextualizados.",
      stack: ["Python", "LangChain", "ChromaDB", "OpenAI", "FastAPI"],
      icono: faRobot,
      bgClass: "bg-purple-50 dark:bg-purple-900/30",
      iconClass: "text-purple-600 dark:text-purple-400"
    },
    {
      id: 3,
      titulo: "Toolkit/SDK para exploración y transformación de datos",
      rol: "Ingeniero de Datos",
      reto: "Estandarizar y acelerar el análisis de datos experimentales en la nube.",
      solucion: "Desarrollo de un SDK en Python para cargar datos, ejecutar transformaciones y documentar flujos, integrando servicios de AWS.",
      stack: ["Python", "AWS SDK", "Pandas", "PyArrow"],
      icono: faTools,
      bgClass: "bg-green-50 dark:bg-green-900/30",
      iconClass: "text-green-600 dark:text-green-400"
    },
    {
      id: 4,
      titulo: "Dashboards interactivos para análisis de campañas SEM",
      rol: "Desarrollador BI",
      reto: "Mejorar el seguimiento de KPIs y la segmentación de leads en campañas de Google Ads.",
      solucion: "ETLs automatizados y dashboards en Power BI conectados a múltiples APIs para análisis y recomendaciones.",
      stack: ["Power BI", "SQL Server", "Google Ads API", "Power Automate"],
      icono: faChartLine,
      bgClass: "bg-indigo-50 dark:bg-indigo-900/30",
      iconClass: "text-indigo-600 dark:text-indigo-400"
    },
    {
      id: 5,
      titulo: "Optimización de sitios web corporativos y campañas digitales",
      rol: "Desarrollador Full Stack",
      reto: "Mejorar el rendimiento SEO y la eficiencia de procesos digitales.",
      solucion: "Refactorización de sitios con ASP.NET, campañas de email HTML, automatizaciones con Power Platform.",
      stack: ["ASP.NET", "HTML", "CSS", "Power Automate", "SharePoint"],
      icono: faGlobe,
      bgClass: "bg-cyan-50 dark:bg-cyan-900/30",
      iconClass: "text-cyan-600 dark:text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-400 to-cyan-500 dark:from-blue-800 dark:to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mis Proyectos
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Una colección de proyectos que reflejan mi experiencia en desarrollo web,
            ciencia de datos y tecnologías empresariales.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Sección de Proyectos Empresariales */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-4">
              <FontAwesomeIcon 
                icon={faBriefcase} 
                className="text-2xl text-blue-600 dark:text-blue-400" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Proyectos Empresariales
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Soluciones tecnológicas desarrolladas en entornos profesionales
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {proyectosEmpresariales.map((proyecto) => (
              <ProjectCard key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        </div>

        {/* Separador con gradiente */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gray-50 dark:bg-gray-900">
              <FontAwesomeIcon 
                icon={faCode} 
                className="text-2xl text-gray-400 dark:text-gray-600" 
              />
            </div>
          </div>
        </div>

        {/* Sección de Proyectos Personales */}
        <div>
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 mr-4">
              <FontAwesomeIcon 
                icon={faCodeBranch} 
                className="text-2xl text-blue-600 dark:text-blue-400" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Proyectos Personales
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Exploraciones técnicas y contribuciones a la comunidad
              </p>
            </div>
          </div>

          <div className="mb-12">
            <GithubRepo />
          </div>
          
          {/* GitHub Profile Link */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/judmontoyaso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
              <span>Ver más proyectos en GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;