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

              <div className="font-light text-lg px-1 mb-12">
                <h2 className="text-xl font-semibold mb-4 mt-10 ">Educación</h2>
                <div className="flex align-middle ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-2 mr-2"
                  />
                  <div>
                    <h3 className="font-semibold ">Ingeniería biológica</h3>
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
                    <h3 className="font-semibold ">
                      Desarrollo de aplicaciones web
                    </h3>
                    <p className="font-semibold text-gray-700">
                      Universidad de Antioquia / Misiontic 2021
                    </p>
                  </div>
                </div>
              </div>

              <div className="font-light text-lg px-2 mb-12">
                <h2 className="text-xl font-semibold mb-4">Idiomas</h2>
                <div className="flex align-middle ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1 mr-2"
                  />
                  <h3 className="font-semibold text-gray-700">Español</h3>
                </div>
                <div className="flex align-middle  ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 mt-1 mr-2"
                  />
                  <h3 className="font-semibold text-gray-700">Inglés</h3>
                </div>
              </div>
            </div>
            <div className="content w-full p-12">
              <div id="profile" className="prose">
                <h2 className="section-headline">Perfil</h2>
                <p>
                  Ingeniero orientado a la calidad. Soy una persona positiva,
                  proactiva, autodidacta y responsable. Tengo conocimientos en
                  biotecnología y en desarrollo web, me apasiona el manejo de
                  herramientas tecnológicas que permitan aprovechar la
                  eficiencia en el manejo de la información.
                </p>
                <p>
                  I am highly motivated in expanding my horizons day by day for
                  better performance, testing and user experience.
                </p>
              </div>
              <hr className="mt-8 mb-12" />
              <div id="experience" className="prose">
                <h2 className="section-headline">Experience</h2>
                <div>
                  <h3>Example Inc</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Jul.&nbsp;2019:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      Fullstack Developer
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Task:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Description:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Tools:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      <span className="rounded-xl bg-gray-300 px-3">Vue</span>
                      <span className="rounded-xl bg-gray-300 px-3">Vuex</span>
                      <span className="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                      <span className="rounded-xl bg-gray-300 px-3">Docker</span>
                      <span className="rounded-xl bg-gray-300 px-3">Git</span>
                      <span className="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                      <span className="rounded-xl bg-gray-300 px-3">Jira</span>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-8 mb-12" />
              <div id="projects" className="prose">
                <h2 className="section-headline">Projects</h2>
                <div className="mb-16">
                  <h3 id="chrisko-headline">Chrisko.io</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Personal blog:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      My blog is the center of my online presence. Here, I share
                      posts about what I've learnt, tutorials and my thoughts on
                      web development in general.
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Deployed to:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      <a
                        href="https://chrisko.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        chrisko.io
                      </a>
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Code on:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      <a
                        href="https://github.com/christiankozalla/nextjs-blog"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub/nextjs-blog
                      </a>
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Features:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      <ul>
                        <li>Static generation</li>
                        <li>Blog content written in Markdown</li>
                        <li>Counter for pageviews and likes</li>
                        <li>My latest tweets</li>
                        <li>Featured images made with Inkscape</li>
                        <li>SEO</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                      Built with:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full">
                      <span className="rounded-xl bg-gray-300 px-3">Next.js</span>
                      <span className="rounded-xl bg-gray-300 px-3">CSS</span>
                      <span className="rounded-xl bg-gray-300 px-3">
                        styled-jsx
                      </span>
                      <span className="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                      <span className="rounded-xl bg-gray-300 px-3">Vercel</span>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-8 mb-12" />
              <div id="projects" className="prose">
                <h2 className="section-headline">Expand my skills</h2>
                <div className="mb-16">
                  <h4 id="expand-knowledge-headline">
                    I'd like to expand my skills and knowledge in several fields
                  </h4>
                  <ul>
                    <li>TypeScript</li>
                    <li>Testing, e.g. with Mocha, Chai, Jest</li>
                    <li>Web Components, e.g. with StencilJS, LitElement</li>
                    <li>
                      Prototyping and Wireframing, e.g. with Figma, Adobe XD
                    </li>
                    <li>Scalable Vector Graphics</li>
                    <li>Databases</li>
                    <li>Mobile development</li>
                    <li>
                      Backend development, e.g. learn additional language like
                      Go, Python, PHP, Ruby, Java, Rust
                    </li>
                  </ul>
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
