import { useState } from "react";
import About from "../components/About";
import SkillsVisualization from "../components/SkillsVisualization";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-300 to-teal-400 dark:from-cyan-700 dark:to-teal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-8">
            Juan David
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-6">
            Ingeniero de Datos | ETL | Visualización de Datos | Big Data
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "Power BI", "SQL", "AWS"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-700/20 backdrop-blur-sm rounded-full text-gray-100 text-sm font-medium hover:bg-gray-700/30 transition-colors"
              >
                {tech}
              </span>
            ))}
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