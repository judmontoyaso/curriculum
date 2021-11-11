import React from "react";
import { Line, Circle } from "rc-progress";
import ProgressBar from "progress";
import { ProgresBar } from "../components/ProgresBar";
import Image from "next/image";
import profile from "/public/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattleNet,
  faFontAwesome,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faCheckCircle,
  faEnvelope,
  faHome,
  faMobileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const curriculum = () => {
  return (
    <div className="">
      <div className="font-sans antialiased w-full">
        <div className="container mx-auto max-w-screen-xl">
          <div
            id="wrapper"
            className="flex flex-col sm:flex-row sm:m-12 shadow-2xl"
          >
            <div
              id="sidebar"
              className="w-full sm:max-w-sm rounded-2xl p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white dark:from-purple-400 dark:to-blue-400 transition-colors duration-800 "
            >
              <div className="px-2 mb-12  ">
                <div className="text-center mb-4">
                  <Image
                    src={profile}
                    alt="Profile"
                    priority={true}
                    className="rounded-full"
                    width={180}
                    height={200}
                    placeholder="blur"
                  />
                </div>
                <h1 className="text-center text-3xl font-semibold mb-2">
                  Juan David Montoya
                </h1>
                <h2 className="text-center text-xl font-light">Ingeniero</h2>
              </div>

              <div className="font-light text-lg px-2 mb-12">
                <h2 className="text-xl font-semibold mb-4">Contácto</h2>
                <div className="flex items-center my-3 transition-colors hover:text-yellow-500">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  <a href="mailto:juandavidsolorzano73@gmail.com">
                    juandavidsolorzano73@gmail.com
                  </a>
                </div>
                <div className="flex items-center my-3">
                  <FontAwesomeIcon icon={faMobileAlt} className="mr-4" />
                  301 538 6556
                </div>

                <div className="flex items-center my-3">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Medellín, Colombia
                </div>
              </div>

              <div className="font-light text-lg px-2 mb-12">
                <h2 className="text-xl font-semibold mb-4">En la Web</h2>
                <div className="flex items-center my-3">
                  <a
                    href="https://www.linkedin.com/in/juansolorzano/"
                    className={"transition-colors hover:text-yellow-500"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
                    Linkedin/juansolorzano
                  </a>
                </div>
                <div className="flex items-center my-3">
                  <a
                    href="https://github.com/judmontoyaso/"
                    className={"transition-colors hover:text-yellow-500"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mr-3" />
                    Github/judmontoyaso
                  </a>
                </div>

                <div className="flex items-center my-3">
                  <a
                    href="https://juan-david-montoya.vercel.app/"
                    className={"transition-colors hover:text-yellow-500"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faBattleNet} className="mr-3" />
                    Mi sitio
                  </a>
                </div>
              </div>

              <div className="font-light text-lg px-2 mb-12">
                <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
                <ul className="list-none">
                  <li className="mb-5">
                    <ProgresBar habilidad="HTML5/CSS3" porcentaje="90" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="Reactjs" porcentaje="90" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="javascript" porcentaje="80" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="Python" porcentaje="70" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="Java" porcentaje="60" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="PHP" porcentaje="40" />
                  </li>
                  <li>
                    <div className="mb-4 mt-10 text-xl font-semibold">
                      Herramientas desarrollo web
                    </div>
                    <p className="leading-8 grid grid-cols-3">
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2 mb-2 hover:bg-indigo-400 hover:text-white dark:hover:bg-green-400">
                        Nextjs
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400 ">
                        Vercel
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        GraphQL
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Tailwind
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        MongoDB
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        SQLite
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        PowerBI
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Excel
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Git
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400"></span>
                    </p>
                  </li>

                  <li>
                    <div className="mb-4 mt-10 text-xl font-semibold">
                      Habilidades en biotecnología
                    </div>
                    <p className="leading-8 grid grid-cols-1">
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2 mb-2 hover:bg-indigo-400 hover:text-white dark:hover:bg-green-400">
                        NTC - ISO 9001
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400 ">
                        Ciencias de los alimentos
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Procesos biotecnológicos
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Microbiología
                      </span>
                      <span className="rounded-xl bg-gray-300 dark:bg-gray-400 px-3 mr-2  mb-2 hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Fisicoquimica
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Biología molecular
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Bioinformática
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Fermentación
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Gestión de calidad
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-400 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400"></span>
                    </p>
                  </li>
                </ul>
              </div>

              <div class="font-light text-lg px-1 mb-12">
                <h2 class="text-xl font-semibold mb-4 mt-10 ">Educación</h2>
                <div className="flex align-middle ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-2 mr-2"
                  />
                  <div>
                    <h3 class="font-semibold ">Ingeniería biológica</h3>
                    <p className="font-semibold text-gray-700">
                      Universidad Nacional de Colombia
                    </p>
                  </div>
                </div>
                <div className="flex align-middle mt-4 ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-2 mr-2"
                  />
                  <div>
                    <h3 class="font-semibold ">
                      Desarrollo de aplicaciones web
                    </h3>
                    <p className="font-semibold text-gray-700">
                      Universidad de Antioquia / Misiontic 2021
                    </p>
                  </div>
                </div>
              </div>

              <div class="font-light text-lg px-2 mb-12">
                <h2 class="text-xl font-semibold mb-4">Idiomas</h2>
                <div className="flex align-middle ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1 mr-2"
                  />
                  <h3 class="font-semibold text-gray-700">Español</h3>
                </div>
                <div className="flex align-middle  ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1 mr-2"
                  />
                  <h3 class="font-semibold text-gray-700">Inglés</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default curriculum;
