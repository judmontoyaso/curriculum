import React from "react";
import { ProgresBar } from "../components/ProgresBar";
import Image from "next/image";
import profile from "/public/profile3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattleNet,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faEnvelope,
  faFilePdf,
  faHome,
  faMobileAlt,
  faGraduationCap,
  faBriefcase,
  faCode,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import ContenedorHabilidad from "../components/ContenedorHabilidad";
import ContenedorHabilidadSolo from "../components/ContenedorHabilidadSolo";
import { RoughNotation } from "react-rough-notation";

const Curriculum = () => {
  const habilidadesPrincipales = [
    "NextJs",
    "Python",
    "ASP.NET",
    "Power BI",
    "SQL",
    "ReactJs",
    "C#",
    "JavaScript",
    "HTML5/CSS3",
    "Machine Learning",
    "AWS",
    "FastAPI",
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
    //Para obtener archivos pdf, se obtiene un link de archivo codificado en base 64 y descargarlo como pdf
    saveAs(
      "https://drive.google.com/uc?export=download&id=1-2Z5qX5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z",
      "CV_JuanMontoya.pdf"
    );
  };
  
  return (
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
                  Especialista en Analítica y Big Data
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
                    <FontAwesomeIcon icon={faMobileAlt} className="w-5 h-5 mr-3" />
                    <span className="text-sm">301 538 6556</span>
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
              
              {/* Botón de descarga CV */}
              <div className="mb-8">
                <button 
                  onClick={saveFile}
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  Descargar CV
                </button>
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
              Soy un profesional enfocado en resultados, con experiencia en ciencia de datos y desarrollo web. 
              Me especializo en análisis de datos con Machine Learning y desarrollo de aplicaciones usando Python, 
              Next.js o .NET. He trabajado en proyectos de desarrollo, IA, ETL, y visualización, y me gusta optimizar 
              procesos con automatización.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Siempre estoy buscando formas de innovar y aportar al equipo, mientras sigo aprendiendo sobre analítica y Big Data.
            </p>
          </div>

          {/* Habilidades principales */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-3 text-blue-500" />
              Habilidades en desarrollo
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <ProgresBar habilidad="Python" porcentaje="90" />
              </div>
              <div>
                <ProgresBar habilidad="Next.js" porcentaje="90" />
              </div>
              <div>
                <ProgresBar habilidad="React.js" porcentaje="85" />
              </div>
              <div>
                <ProgresBar habilidad="ASP.NET" porcentaje="80" />
              </div>
              <div>
                <ProgresBar habilidad="Power BI" porcentaje="85" />
              </div>
              <div>
                <ProgresBar habilidad="SQL" porcentaje="80" />
              </div>
              <div>
                <ProgresBar habilidad="Machine Learning" porcentaje="75" />
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Herramientas
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
          
          {/* Habilidades en biotecnología */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faFlask} className="mr-3 text-green-500" />
              Habilidades en biotecnología
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {habilidadesBiotecnologia.map((habilidad) => (
                <span
                  key={habilidad}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                >
                  {habilidad}
                </span>
              ))}
            </div>
          </div>
          
          {/* Educación */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-purple-500" />
              Educación
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Especialización en Analítica y Big Data
                </h4>
                <p className="text-gray-600 dark:text-gray-300">I. U. Digital de Antioquia</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Ingeniero Biológico
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Universidad Nacional de Colombia</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2019</p>
              </div>
            </div>
          </div>
          
          {/* Experiencia laboral */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FontAwesomeIcon icon={faBriefcase} className="mr-3 text-amber-500" />
              Experiencia laboral
            </h3>
            
            <div className="space-y-8">
              {/* Iluma Alliance */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bioinformatic Associate
                </h4>
                <p className="text-gray-600 dark:text-gray-300">Iluma Alliance</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Diciembre 2023 - Actualmente</p>
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
                    <ContenedorHabilidadSolo Habilidad="Machine Learning" />
                  </div>
                </div>
              </div>

              {/* Q10 S.A.S */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Desarrollador
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
  );
};

export default Curriculum;
