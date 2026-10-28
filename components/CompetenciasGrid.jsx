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
  faTools
} from '@fortawesome/free-solid-svg-icons';

const CompetenciaCard = ({ title, skills, icon, color, index }) => {
  const skillIcons = {
    "Pipelines": faServer,
    "Modelado": faDatabase,
    "Observabilidad": faChartLine,
    "Aplicaciones": faCode,
    "Integración": faCogs,
    "Mapas": faChartLine,
    "Consultas": faDatabase,
    "RAG": faBrain,
    "Agentes": faRobot,
    "AWS": faCloud,
    "CI/CD": faTools,
    "Transferencia": faUsers
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
      title: "Ingeniería de datos",
      icon: faDatabase,
      color: "border-l-8 border-blue-500",
      skills: [
        "Pipelines incrementales con Apache Airflow, con manejo de borrados en origen",
        "Modelado de datos en MySQL y tablas materializadas para consultas rápidas",
        "Observabilidad: última corrida exitosa de cada pipeline y auditoría diaria de esquema"
      ]
    },
    {
      title: "Producto y geoanalítica",
      icon: faCode,
      color: "border-l-8 border-green-500",
      skills: [
        "Aplicaciones internas con FastAPI y Next.js, Entra ID y permisos por rol",
        "Integración de APIs: CRM, nómina, Jira y Microsoft Graph",
        "Mapas con deck.gl y Mapbox sobre información territorial"
      ]
    },
    {
      title: "IA aplicada",
      icon: faRobot,
      color: "border-l-8 border-purple-500",
      skills: [
        "Consultas en lenguaje natural con lista blanca de columnas y protección de datos personales",
        "RAG, transcripción y actas automáticas de reuniones",
        "Agentes de voz con reglas de seguridad en código, fuera del modelo"
      ]
    },
    {
      title: "Cloud y equipo",
      icon: faCloud,
      color: "border-l-8 border-pink-500",
      skills: [
        "AWS (S3, Lambda, Athena, Redshift, RDS), Docker, Linux y Nginx",
        "CI/CD que valida y despliega solo desde la rama principal",
        "Transferencia técnica a analistas con talleres y revisión de código"
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