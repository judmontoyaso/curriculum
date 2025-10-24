import { useState } from "react";
import About from "../components/About";
import SkillsVisualization from "../components/SkillsVisualization";
import Modal from "../components/Modal";
import TechPulse from '../components/TechPulse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section con degradado morado oscuro */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 dark:from-purple-950 dark:via-purple-900 dark:to-indigo-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Columna Izquierda: Texto */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-8">
                Juan David Montoya
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto lg:mx-0 mb-3">
                Ingeniero de Datos & AI Specialist
              </p>
              <p className="text-base md:text-lg text-purple-200/90 max-w-3xl mx-auto lg:mx-0 mb-6">
                Transformando datos en inteligencia | Automatización & Agentes IA | Cloud Solutions
              </p>

              {/* Botones de redes sociales */}
              <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                <a href="https://github.com/judmontoyaso" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <FaGithub size={20} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/juansolorzano" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                  <FaLinkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
              
              {/* Tags de tecnologías principales */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                {["Python", "AI/ML", "Power BI", "SQL", "Next.js", "Automation"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Especialidades en IA, Desarrollo y Automatización */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-2xl mx-auto lg:mx-0">
                <h3 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  Especializado en:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-purple-100 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">▪</span>
                    <span>Desarrollo Full Stack (Next.js, React, Python)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">▪</span>
                    <span>Visualización de Datos (Power BI, Dashboards)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">▪</span>
                    <span>Desarrollo de Agentes IA (LLMs, CrewAI)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">▪</span>
                    <span>Automatización (N8N, Zapier, APIs)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">▪</span>
                    <span>ETL & Data Pipelines (Python, SQL, Cloud)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-300">▪</span>
                    <span>Machine Learning & IA Generativa</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Tech Pulse Animation */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <TechPulse />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <About />
        
        {/* Botón para abrir el modal de habilidades */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsSkillsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faCode} className="text-lg" />
            <span className="text-lg font-medium">Ver mi Stack Tecnológico</span>
          </button>
        </div>

        {/* Modal de habilidades */}
        <Modal 
          isOpen={isSkillsModalOpen} 
          onClose={() => setIsSkillsModalOpen(false)}
          title="Mi Stack Tecnológico"
        >
          <SkillsVisualization inModal={true} />
        </Modal>
      </div>
    </div>
  );
}