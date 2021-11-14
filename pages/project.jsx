import React from "react";
import GithubRepo from "../components/GithubRepo";

const project = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold text-gray-900 lg:text-3xl dark:text-white mt-10">
        Proyectos
      </h1>
      <div className="lg:mr-28 lg:ml-28 text-justify lg:mt-10 lg:mb-14 mt-10 mb-14 mr-10 ml-10">
        <span className="font-semibold text-gray-600 dark:text-gray-400 text-lg">
          <p>
            En esta sección encontraras los ultimos proyectos personales en los
            que he trabajado, incluyendo este sitio web.
          </p>{" "}
          Si deseas ver el repositorio da click en la flecha y te llevara a
          github.
        </span>

        <hr className="mt-8  border-gray-300 dark:border-gray-700" />
      </div>
      <GithubRepo></GithubRepo>
    </div>
  );
};

export default project;
