import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLayerGroup, faRobot, faTools } from '@fortawesome/free-solid-svg-icons';

const categoryIcons = {
  languages: faCode,
  data: faDatabase,
  frameworks: faLayerGroup,
  ai: faRobot,
  tools: faTools
};

const SkillsVisualization = ({ inModal = false }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'Todas' },
    { id: 'languages', name: 'Lenguajes' },
    { id: 'data', name: 'Datos' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'ai', name: 'IA aplicada' },
    { id: 'tools', name: 'Infraestructura' }
  ];

  const skills = [
    { name: 'Python', level: 95, category: 'languages' },
    { name: 'SQL', level: 90, category: 'languages' },
    { name: 'TypeScript', level: 80, category: 'languages' },
    { name: 'JavaScript', level: 85, category: 'languages' },

    // Datos
    { name: 'Apache Airflow', level: 85, category: 'data' },
    { name: 'MySQL', level: 90, category: 'data' },
    { name: 'Modelado de datos', level: 85, category: 'data' },
    { name: 'Power BI', level: 90, category: 'data' },
    { name: 'Pandas', level: 90, category: 'data' },

    // Frameworks
    { name: 'FastAPI', level: 85, category: 'frameworks' },
    { name: 'Next.js', level: 90, category: 'frameworks' },
    { name: 'React', level: 90, category: 'frameworks' },
    { name: 'deck.gl / Mapbox', level: 75, category: 'frameworks' },

    // IA aplicada
    { name: 'LLMs (OpenAI, Claude, DeepSeek)', level: 90, category: 'ai' },
    { name: 'Text-to-SQL', level: 85, category: 'ai' },
    { name: 'RAG', level: 85, category: 'ai' },
    { name: 'Agentes de IA', level: 85, category: 'ai' },
    { name: 'Agentes de voz', level: 75, category: 'ai' },

    // Infraestructura
    { name: 'AWS', level: 80, category: 'tools' },
    { name: 'Docker', level: 85, category: 'tools' },
    { name: 'Linux / Nginx', level: 80, category: 'tools' },
    { name: 'Git y CI/CD', level: 85, category: 'tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <div className={inModal ? '' : 'max-w-5xl mx-auto px-4 py-12'}>
      {!inModal && (
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            Mi Stack Tecnológico
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-75"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Un conjunto de tecnologías y herramientas que he dominado a lo largo de mi carrera profesional.
          </p>
        </div>
      )}
      
      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skillCategories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Visualización de habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={categoryIcons[skill.category]} className="text-xl mr-3 text-blue-500" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                <motion.div 
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                ></motion.div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Principiante</span>
                <span>Avanzado</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsVisualization; 