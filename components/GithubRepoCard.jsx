import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeBranch, faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {latestRepo.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {latestRepo.description || "Sin descripción"}
            </p>
          </div>
          <FontAwesomeIcon 
            icon={faCode} 
            className="text-blue-500 text-2xl ml-4"
          />
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            <span>{latestRepo.stargazers_count}</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCodeBranch} className="mr-1" />
            <span>{latestRepo.forks_count}</span>
          </div>
        </div>

        {/* Languages */}
        {latestRepo.language && (
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full">
              {latestRepo.language}
            </span>
          </div>
        )}

        {/* Link */}
        <a
          href={latestRepo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          <span>Ver repositorio</span>
        </a>
      </div>
    </div>
  );
};

export default GithubRepoCard;
