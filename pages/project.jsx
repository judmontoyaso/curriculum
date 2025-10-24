import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faFlask,
  faRobot,
  faTools,
  faChartLine,
  faGlobe,
  faBriefcase,
  faCodeBranch,
  faCode,
  faRocket,
  faBlog,
  faPaw,
  faDna,
  faExternalLinkAlt,
  faDatabase,
  faPlay,
  faServer
} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ proyecto }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2.5 rounded-md ${proyecto.bgClass}`}>
        <FontAwesomeIcon
          icon={proyecto.icono}
          className={`text-xl ${proyecto.iconClass}`}
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {proyecto.titulo}
      </h3>
    </div>

    <div className="space-y-4">
      {/* Rol */}
      <div className="flex flex-col">
        <span className="font-bold text-gray-600 dark:text-gray-300 mb-1">
          Rol:
        </span>
        <span className="text-gray-700 dark:text-gray-300">
          {proyecto.rol}
        </span>
      </div>

      {/* Reto */}
      <div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-2">
          Reto:
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          {proyecto.reto}
        </p>
      </div>

      {/* Solución */}
      <div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-2">
          Solución:
        </h4>
        <p className="text-gray-700 dark:text-gray-300">
          {proyecto.solucion}
        </p>
      </div>

      {/* Stack tecnológico */}
      <div>
        <h4 className="font-bold text-gray-600 dark:text-gray-300 mb-2">
          Stack:
        </h4>
        <div className="flex flex-wrap gap-2">
          {proyecto.stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-md text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const GithubProjectCard = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
  >
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-3">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-2xl text-gray-700 dark:text-gray-300"
        />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>
      </div>
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-gray-400 dark:text-gray-500"
      />
    </div>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.topics.map((topic, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded text-xs font-medium"
        >
          {topic}
        </span>
      ))}
    </div>
  </a>
);

const EntrepreneurshipCard = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-3 rounded-lg ${project.bgClass}`}>
        <FontAwesomeIcon
          icon={project.icon}
          className={`text-2xl ${project.iconClass}`}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.platform}
        </p>
      </div>
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        className="text-gray-400 dark:text-gray-500"
      />
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <span
          key={index}
          className={`px-3 py-1.5 rounded-md text-sm font-medium ${project.tagClass}`}
        >
          {tag}
        </span>
      ))}
    </div>
  </a>
);

const VideoCard = ({ video }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
    <div className="relative bg-gray-200 dark:bg-gray-700" style={{ paddingBottom: '177.78%' }}>
      {/* Aspect ratio 9:16 para reels verticales */}
      <iframe
        src={video.url}
        title={video.title}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-4">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
        {video.title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {video.description}
      </p>
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
    },
    {
      id: 6,
      titulo: "Integración y centralización de múltiples fuentes de datos",
      rol: "Ingeniero de Datos / Desarrollador BI",
      reto: "Centralizar información dispersa en múltiples plataformas (Zendesk, Jira, SQL Server, Google) en un único punto de análisis.",
      solucion: "Desarrollo de conectores personalizados en lenguaje M, ETLs automatizados y dashboards integrados en Power BI para visualización unificada de KPIs empresariales.",
      stack: ["Power BI", "M Language", "Zendesk API", "Jira API", "SQL Server", "Google APIs", "Power Query"],
      icono: faDatabase,
      bgClass: "bg-orange-50 dark:bg-orange-900/30",
      iconClass: "text-orange-600 dark:text-orange-400"
    },
    {
      id: 7,
      titulo: "Despliegue y automatización de agentes IA self-hosted",
      rol: "DevOps / Ingeniero de IA",
      reto: "Implementar soluciones de automatización y agentes de IA en infraestructura propia, evitando dependencias de plataformas cloud y reduciendo costos operativos.",
      solucion: "Despliegue de plataforma N8N con Docker para orquestar workflows automatizados y agentes de IA. Configuración de pipelines CI/CD, gestión de contenedores y persistencia de datos en PostgreSQL.",
      stack: ["N8N", "Docker", "Heroku", "PostgreSQL", "Supabase", "LangChain", "OpenAI API", "Git"],
      icono: faServer,
      bgClass: "bg-teal-50 dark:bg-teal-900/30",
      iconClass: "text-teal-600 dark:text-teal-400"
    }
  ];

  const githubProjects = [
    {
      name: "curriculum",
      description: "Portafolio web profesional desarrollado con Next.js, React y Tailwind CSS. Incluye blog técnico, visualizaciones interactivas y diseño responsive.",
      url: "https://github.com/judmontoyaso/curriculum",
      topics: ["nextjs", "react", "tailwindcss", "portfolio", "blog"]
    },
    {
      name: "aprende_probioticos",
      description: "Plataforma educativa interactiva sobre microbiología y probióticos. Incluye visualizaciones científicas y contenido didáctico.",
      url: "https://github.com/judmontoyaso/aprende_probioticos",
      topics: ["educación", "ciencia", "react", "microbiología"]
    },
    {
      name: "bot",
      description: "Bot automatizado para tareas específicas desarrollado con Python. Implementa web scraping y automatización de procesos.",
      url: "https://github.com/judmontoyaso/bot",
      topics: ["python", "automation", "bot", "scraping"]
    },
    {
      name: "tradbot",
      description: "Bot de trading algorítmico con estrategias automatizadas. Análisis técnico y ejecución de operaciones en mercados financieros.",
      url: "https://github.com/judmontoyaso/tradbot",
      topics: ["trading", "python", "finanzas", "algoritmos"]
    }
  ];

  const entrepreneurships = [
    {
      name: "Cleo Cuquis",
      description: "Galletas artesanales para perros elaboradas con kéfir y ingredientes naturales. Productos nutritivos desarrollados con IA generativa para crear contenido visual atractivo.",
      url: "https://www.instagram.com/cleocuquis",
      platform: "Instagram",
      icon: faPaw,
      bgClass: "bg-pink-50 dark:bg-pink-900/30",
      iconClass: "text-pink-600 dark:text-pink-400",
      tags: ["Emprendimiento", "IA Generativa", "Productos Artesanales"],
      tagClass: "bg-pink-50 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
    },
    {
      name: "Probióticos para Todos",
      description: "Blog de divulgación científica enfocado en microbiología, probióticos y salud intestinal. Contenido educativo basado en evidencia científica.",
      url: "https://probioticosparatodos.com",
      platform: "Blog",
      icon: faDna,
      bgClass: "bg-green-50 dark:bg-green-900/30",
      iconClass: "text-green-600 dark:text-green-400",
      tags: ["Divulgación Científica", "Microbiología", "Educación"],
      tagClass: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
    }
  ];

  const cleoVideos = [
    {
      title: "Cleo Cuquis - Galletas Artesanales",
      description: "Galletas nutritivas para perros con ingredientes naturales",
      url: "https://www.instagram.com/reel/DPm1mDKEUUU/embed"
    },
    {
      title: "Productos Cleo Cuquis",
      description: "Conoce nuestras galletas elaboradas con kéfir",
      url: "https://www.instagram.com/reel/DPXbpf2ET35/embed"
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

        {/* Sección de Proyectos GitHub Destacados */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 mr-4">
              <FontAwesomeIcon 
                icon={faGithub} 
                className="text-2xl text-gray-700 dark:text-gray-300" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Proyectos Open Source
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Proyectos destacados en GitHub
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {githubProjects.map((project, index) => (
              <GithubProjectCard key={index} project={project} />
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-8">
            <a
              href="https://github.com/judmontoyaso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
              <span>Ver todos los proyectos en GitHub</span>
            </a>
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
                icon={faRocket} 
                className="text-2xl text-gray-400 dark:text-gray-600" 
              />
            </div>
          </div>
        </div>

        {/* Sección de Emprendimientos */}
        <div>
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30 mr-4">
              <FontAwesomeIcon 
                icon={faRocket} 
                className="text-2xl text-purple-600 dark:text-purple-400" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Emprendimientos
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Proyectos personales y de divulgación científica
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {entrepreneurships.map((project, index) => (
              <EntrepreneurshipCard key={index} project={project} />
            ))}
          </div>

          {/* Sección de Videos Cleo Cuquis */}
          <div className="mt-16">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-pink-50 dark:bg-pink-900/30 mr-4">
                <FontAwesomeIcon 
                  icon={faPaw} 
                  className="text-2xl text-pink-600 dark:text-pink-400" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Cleo Cuquis en Videos
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Contenido creado con IA generativa
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cleoVideos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>

            {/* Link a Instagram */}
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/cleocuquis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl mr-2" />
                <span>Ver más en Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;