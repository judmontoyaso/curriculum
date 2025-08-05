import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faChartLine,
  faCloud,
  faBrain,
  faCheck,
  faServer,
  faDatabase,
  faRobot,
  faUsers,
  faCogs,
  faTools,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const CompetenciaCard = ({ title, skills, icon, color, index }) => {
  const skillIcons = {
    "Desarrollo web": faCode,
    "Desarrollo de APIs": faServer,
    "Automatización": faCogs,
    "Análisis de datos": faChartLine,
    "Dashboards": faDatabase,
    "Modelado": faRobot,
    "Gestión de infraestructura": faCloud,
    "Prácticas ágiles": faUsers,
    "Automatización de flujos": faTools,
    "Contenerización": faCloud,
    "Pensamiento analítico": faBrain,
    "Autonomía": faLightbulb,
    "Comunicación efectiva": faUsers
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl border-t-4 ${color.replace('border-l-8', 'border-t-4')}`}
    >
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className={`w-14 h-14 rounded-md flex items-center justify-center ${color.replace('border-l-8', 'bg')}`}>
            <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <ul className="space-y-4">
          {skills.map((skill, idx) => {
            const skillKey = Object.keys(skillIcons).find(key => skill.startsWith(key));
            const skillIcon = skillIcons[skillKey] || faCheck;
            
            return (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center ${color.replace('border-l-8', 'bg')}`}>
                    <FontAwesomeIcon icon={skillIcon} className="text-white text-sm" />
                  </div>
                  <div className={`flex-shrink-0 w-5 h-5 rounded-sm flex items-center justify-center bg-green-500`}>
                    <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                  </div>
                </div>
                <span className="flex-1 mt-1.5">{skill}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

const CompetenciasGrid = () => {
  const competencias = [
    {
      title: "Tecnología y Desarrollo",
      icon: faCode,
      color: "border-l-8 border-blue-500",
      skills: [
        "Desarrollo web con Python, Next.js, ASP.NET y JavaScript",
        "Desarrollo de APIs e integración de servicios REST",
        "Automatización de procesos con Power Automate y ETL pipelines"
      ]
    },
    {
      title: "Analítica y Ciencia de Datos",
      icon: faChartLine,
      color: "border-l-8 border-green-500",
      skills: [
        "Análisis de datos con Python, Pandas, Scikit-Learn",
        "Dashboards interactivos con Power BI, Python y JavaScript",
        "Modelado y gestión de bases de datos SQL y NoSQL"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: faCloud,
      color: "border-l-8 border-purple-500",
      skills: [
        "Gestión de infraestructura en AWS (S3, Athena, Redshift)",
        "Prácticas ágiles con Scrum y entrega continua de valor",
        "Automatización de flujos CI/CD",
        "Contenerización con Docker y despliegue en producción"
      ]
    },
    {
      title: "Habilidades Personales",
      icon: faBrain,
      color: "border-l-8 border-pink-500",
      skills: [
        "Pensamiento analítico y resolución de problemas",
        "Autonomía, proactividad y aprendizaje continuo",
        "Comunicación efectiva y colaboración en equipo"
      ]
    }
  ];

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center mb-12 space-x-4"
      >
        <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Competencias Clave
        </h2>
        <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {competencias.map((competencia, index) => (
          <CompetenciaCard
            key={competencia.title}
            {...competencia}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CompetenciasGrid;