import { useState } from "react";
import About from "../components/About";
import SkillsVisualization from "../components/SkillsVisualization";
import Modal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto antialiased">
      <About />
      
      {/* Botón para abrir el modal de habilidades */}
      <div className="flex justify-center mt-4 mb-8">
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
  );
}
