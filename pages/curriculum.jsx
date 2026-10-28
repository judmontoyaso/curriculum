import React from "react";
import { ProgresBar } from "../components/ProgresBar";
import Image from "next/image";
import profile from "/public/IMG-20250503-WA0007-fotor-20250512135928.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattleNet,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faEnvelope,
  faHome,
  faGraduationCap,
  faBriefcase,
  faCode,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import ContenedorHabilidad from "../components/ContenedorHabilidad";
import ContenedorHabilidadSolo from "../components/ContenedorHabilidadSolo";
import { RoughNotation } from "react-rough-notation";

const Curriculum = () => {
  const habilidadesPrincipales = [
    "Python",
    "SQL",
    "Apache Airflow",
    "MySQL",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
    "Power BI",
    "deck.gl",
    "LLMs",
    "AWS",
    "Docker",
    "ASP.NET",
  ];
  
  const habilidadesBiotecnologia = [
    "Gestión de calidad",
    "Fermentación",
    "Bioinformática",
    "Fisicoquimica",
    "Microbiología",
    "Procesos biotecnológicos",
    "Ciencias de los alimentos",
    "NTC - ISO 9001",
  ];
  
  const saveFile = () => {
    // Descargar el archivo CV desde la carpeta public
    saveAs("/Hoja_de_Vida.pdf", "CV_JuanMontoya.pdf");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-300 to-indigo-400 dark:from-sky-800 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Mi trayectoria en ingeniería de datos, producto interno e IA aplicada
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar - Información personal */}
          <div className="lg:col-span-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={profile}
                    alt="Juan David Montoya"
                    className="rounded-full object-cover"
                    fill
                    priority
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                  <RoughNotation
                    type="underline"
                    color="#3B82F6"
                    strokeWidth={2}
                    padding={[0, 2]}
                  >
                    Juan David Montoya
                  </RoughNotation>
                </h1>
                <h2 className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  Data & AI Engineer
                </h2>
              </div>
              
              {/* Contacto */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
                  Contacto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 mr-3" />
                    <a href="mailto:juandavidsolorzano73@gmail.com" className="text-sm">
                      juandavidsolorzano73@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-3" />
                    <span className="text-sm">Medellín, Colombia</span>
                  </div>
                </div>
              </div>
              
              {/* Enlaces web */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FontAwesomeIcon icon={faCode} className="mr-2 text-blue-500" />
                  En la Web
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-3" />
                    <a 
                      href="https://www.linkedin.com/in/juansolorzano/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm"
                    >
                      Linkedin/juansolorzano
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-3" />
                    <a 
                      href="https://github.com/judmontoyaso/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm"
                    >
                      Github/judmontoyaso
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FontAwesomeIcon icon={faBattleNet} className="w-5 h-5 mr-3" />
                    <a 
                      href="https://juan-david-montoya.vercel.app/" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm"
                    >
                      Mi sitio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenido principal */}
        <div className="lg:col-span-8 space-y-8">
                    {/* Perfil */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-3 text-blue-500" />
              Perfil
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hago que los datos de una empresa se puedan usar sin tener que pedírselos a nadie. Hoy lidero la ingeniería
              de datos y la plataforma interna de una inmobiliaria de Medellín, desde la fuente hasta la pantalla: pipelines
              en Apache Airflow, aplicaciones en FastAPI y Next.js, geoanalítica e IA aplicada.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Lo que más me interesa es la cifra correcta, y casi siempre el trabajo de verdad está en descubrir por qué no
              sale igual en todas partes. Vengo de la ingeniería biológica y la bioinformática, y de ahí me quedó la costumbre
              de desconfiar de un número hasta saber de dónde salió.
            </p>
          </div>

          {/* Experiencia laboral */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-3 text-amber-500" />
              Experiencia laboral
            </h3>
            
            <div className="space-y-8">
              {/* Alberto Álvarez Inmobiliaria */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ingeniero de Datos
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Alberto Álvarez Inmobiliaria</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marzo 2026 - Actualidad</p>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Logros:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Diseñé y construí de punta a punta la plataforma interna de datos de la compañía en FastAPI y Next.js, con Entra ID y control de acceso por rol que falla cerrado. Pasó de un prototipo en marzo a unos 30 módulos en producción en siete meses, con más de 670 commits.</li>
                    <li>Más de 20 pipelines en Apache Airflow con carga incremental y manejo de borrados en origen (unos 105.000 registros reconciliados en 35 segundos, por encima del tope de 10.000 de la API), y tablas materializadas que bajaron una consulta de 1,2 s a 0,07 s.</li>
                    <li>Observabilidad y gobierno: tablero con la última corrida exitosa de cada pipeline, auditoría diaria de cambios de esquema en la base y CI/CD que valida los DAGs y despliega solo desde la rama principal.</li>
                    <li>Geoanalítica inmobiliaria: mapas en deck.gl que cruzan la cartera con información territorial y de transporte, y con la demanda del CRM por barrio.</li>
                    <li>IA aplicada: consultas en lenguaje natural con lista blanca de columnas por Habeas Data, actas automáticas de reuniones y reportes diarios en Jira redactados con IA a partir de notas sueltas.</li>
                    <li>Transferencia técnica a 6 analistas, con talleres para que monten sus propios módulos, revisión de sus pull requests y entornos de desarrollo estandarizados.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Habilidades:</h5>
                  <div className="flex flex-wrap gap-2">
                    <ContenedorHabilidadSolo Habilidad="Apache Airflow" />
                    <ContenedorHabilidadSolo Habilidad="Python" />
                    <ContenedorHabilidadSolo Habilidad="SQL" />
                    <ContenedorHabilidadSolo Habilidad="FastAPI" />
                    <ContenedorHabilidadSolo Habilidad="Análisis geoespacial" />
                  </div>
                </div>
              </div>

              {/* Iluma Alliance */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bioinformatics Associate · Ingeniería de datos
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Iluma Alliance</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Diciembre 2023 - Abril 2025</p>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Logros:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Lideré la creación de una plataforma web para la visualización de reportes gráficos interactivos que permitió optimizar la presentación de la visualización de experimentos, utilizando FastAPI para el backend y Next.js.</li>
                    <li>Participé en la creación de un agente IA para la generación de resúmenes de información a partir de una base de datos de conocimiento haciendo más fácil el acceso a información clave.</li>
                    <li>Diseñé e implementé un pipeline y la infraestructura en AWS para el manejo de datos segmentados por experimentos para facilitar el acceso a la información.</li>
                    <li>Participé en la creación de un toolkit/SDK para la carga e implementación de transformaciones de datos, integrando Python con herramientas de AWS para agilizar los procesos de exploración y análisis de datos.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Habilidades:</h5>
                  <div className="flex flex-wrap gap-2">
                    <ContenedorHabilidadSolo Habilidad="Python" />
                    <ContenedorHabilidadSolo Habilidad="Next.js" />
                    <ContenedorHabilidadSolo Habilidad="FastAPI" />
                    <ContenedorHabilidadSolo Habilidad="AWS" />
                    <ContenedorHabilidadSolo Habilidad="Redis" />
                  </div>
                </div>
              </div>

              {/* Q10 S.A.S */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Desarrollador Full Stack
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Q10 S.A.S</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Noviembre 2021 - Diciembre 2023</p>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Logros:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Desarrollo de soluciones ETL y dashboards con Power BI y SQL Server, integrando APIs empresariales.</li>
                    <li>Segmentación de leads y optimización de campañas en Google Ads para mejorar la relevancia y conversión de anuncios, usando clusterización.</li>
                    <li>Desarrollo de aplicaciones web con ASP.NET Framework y SQL Server, y mejora del posicionamiento en motores de búsqueda.</li>
                    <li>Implementación de herramientas empresariales con SharePoint, Power BI Embedded y Power Automate para automatización de procesos.</li>
                    <li>Desarrollo de campañas de email en HTML y mantenimiento de páginas web corporativas.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Habilidades:</h5>
                  <div className="flex flex-wrap gap-2">
                    <ContenedorHabilidadSolo Habilidad="Power BI" />
                    <ContenedorHabilidadSolo Habilidad="SQL" />
                    <ContenedorHabilidadSolo Habilidad="ASP.NET" />
                    <ContenedorHabilidadSolo Habilidad="ETL" />
                  </div>
                </div>
              </div>

              {/* Compañia de galletas Noel */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Operario de producción
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Compañia de galletas Noel</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Octubre 2020 - Diciembre 2020</p>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tareas:</h5>
                  <p className="text-gray-600 dark:text-gray-300">Realicé verificación de calidad y empaque de producto terminado.</p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Habilidades:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      NTC - ISO 9001
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      Ciencia de los alimentos
                    </span>
                  </div>
                </div>
              </div>

              {/* Billares la 53 */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Administrador
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Billares la 53</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Agosto 2019 - Marzo 2020</p>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tareas:</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Brindar servicio y atención a los clientes, atención a los proveedores, manejo de caja registradora, 
                    control de personal, verificación de estándares en productos y servicios y control de inventarios.
                  </p>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Habilidades:</h5>
                  <div className="flex flex-wrap gap-2">
                    <ContenedorHabilidadSolo Habilidad="Servicio al cliente" />
                    <ContenedorHabilidadSolo Habilidad="Ventas" />
                  </div>
                </div>
              </div>

              {/* Koba Colombia S.A.S */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Practicante control de calidad
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Koba Colombia S.A.S</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Diciembre 2018 - Julio 2019</p>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Tareas:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Realicé controles de calidad mediante auditorias, propuestas e implementación de planes de mejora, en más de cien puntos de venta y el centro de distribución, aplicando normas NTC ISO 9001, resolución 2674 de 2013 y decreto 3075.</li>
                    <li>Capacite a los colaboradores de la regional norte en BPM, plan de saneamiento básico y normatividad sanitaria.</li>
                    <li>Brinde apoyo en labores administrativas relacionadas con la calidad e inocuidad de los productos, mediante control de trazabilidad, actas de destrucción, manejo de productos no conformes y documentación legal.</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Habilidades:</h5>
                  <div className="flex flex-wrap gap-2">
                    <ContenedorHabilidadSolo Habilidad="NTC - ISO 9001" />
                    <ContenedorHabilidadSolo Habilidad="Gestión de calidad" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educación */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-purple-500" />
              Educación
            </h3>
            
            <div className="space-y-8">
              {/* Educación Formal */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Educación Formal</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Especialización en Analítica y Big Data
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Institución Universitaria Digital de Antioquia</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ingeniero Biológico
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Universidad Nacional de Colombia</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2019</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Grupo de investigación PROBIOM. Facultad de Ciencias</p>
                  </div>
                </div>
              </div>

              {/* Cursos y Certificaciones */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cursos y Certificaciones</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      Diplomado en Geomática y Big Data
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">I. U. Digital de Antioquia</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      Formación en Programación (Misión TIC)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Universidad de Antioquia</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      Formación en Desarrollo de Aplicaciones Web
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Universidad de Antioquia</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-600 dark:text-gray-300">Aprendizaje constante en Platzi y Coursera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competencias y Habilidades */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-3 text-blue-500" />
              Competencias y Habilidades
            </h3>
            
            <div className="space-y-8">
              {/* Ingeniería de datos */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ingeniería de datos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <ProgresBar habilidad="Python" porcentaje="90" />
                  </div>
                  <div>
                    <ProgresBar habilidad="SQL" porcentaje="90" />
                  </div>
                  <div>
                    <ProgresBar habilidad="Apache Airflow" porcentaje="85" />
                  </div>
                  <div>
                    <ProgresBar habilidad="Power BI" porcentaje="85" />
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Pipelines incrementales con Apache Airflow, con manejo de borrados en origen</li>
                  <li>Modelado de datos en MySQL y tablas materializadas para consultas rápidas</li>
                  <li>Observabilidad de pipelines y auditoría diaria de cambios de esquema</li>
                </ul>
              </div>

              {/* Producto y geoanalítica */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Producto y geoanalítica</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <ProgresBar habilidad="Next.js" porcentaje="90" />
                  </div>
                  <div>
                    <ProgresBar habilidad="FastAPI" porcentaje="85" />
                  </div>
                  <div>
                    <ProgresBar habilidad="React.js" porcentaje="85" />
                  </div>
                  <div>
                    <ProgresBar habilidad="deck.gl / Mapbox" porcentaje="75" />
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Aplicaciones internas con FastAPI y Next.js, Entra ID y permisos por rol</li>
                  <li>Integración de APIs: CRM, nómina, Jira y Microsoft Graph</li>
                  <li>Mapas con deck.gl y Mapbox sobre información territorial</li>
                </ul>
              </div>

              {/* IA aplicada */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">IA aplicada</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Consultas en lenguaje natural (Text-to-SQL) con lista blanca de columnas y protección de datos personales</li>
                  <li>RAG, transcripción y actas automáticas de reuniones</li>
                  <li>Agentes de voz con reglas de seguridad en código, fuera del modelo</li>
                  <li>Desarrollo diario con agentes de código y memoria escrita del proyecto</li>
                </ul>
              </div>

              {/* Cloud y equipo */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Cloud y equipo</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>AWS (S3, Lambda, Athena, Redshift, RDS), Docker, Linux y Nginx</li>
                  <li>CI/CD que valida y despliega solo desde la rama principal</li>
                  <li>Scrum: planeación de sprints, dailies y retrospectivas</li>
                  <li>Transferencia técnica a analistas con talleres y revisión de código</li>
                </ul>
              </div>

              {/* Herramientas y Tecnologías */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Herramientas y Tecnologías
                </h4>
                <div className="flex flex-wrap gap-2">
                  {habilidadesPrincipales.map((habilidad) => (
                    <span
                      key={habilidad}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {habilidad}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Proyecto de investigación */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faFlask} className="mr-3 text-purple-500" />
              Proyecto de investigación
            </h3>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                ESTANDARIZACIÓN TÉCNICA PARA EVALUAR LA ACTIVIDAD ANTIMICROBIANA DEL LACTOSUERO DULCE, FERMENTADO CON GRÁNULOS DE KEFIR.
              </h4>
              <p className="text-gray-600 dark:text-gray-300">Universidad Nacional de Colombia</p>
              <p className="text-gray-600 dark:text-gray-300">
                Proyecto de iniciación científica. Brinde apoyo en el desarrollo de una investigación de tesis de maestría, 
                entre mis funciones estaba esterilizar el material para los experimentos, realizar evaluación de pruebas 
                antimicrobianas, realizar pruebas fisicoquimas, planear y ejecutar proceso de fermentación y de analisis de 
                lactosuero.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Directora: Dra. Blanca Cecilia Salazar Álzate
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
