import React from "react";
import GithubRepo from "../components/GithubRepo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCode } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faCode} className="text-3xl text-blue-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white relative">
              Mis Proyectos
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-75"></div>
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            En esta sección encontrarás los últimos proyectos personales en los que he trabajado, 
            incluyendo este sitio web. Cada proyecto representa un desafío único y una oportunidad 
            para aplicar mis habilidades en desarrollo web y tecnología.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          <GithubRepo />
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/judmontoyaso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
            <span>Visita mi perfil de GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
