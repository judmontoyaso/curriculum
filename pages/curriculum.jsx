import React from "react";
import { ProgresBar } from "../components/ProgresBar";
import Image from "next/image";
import profile from "/public/profile3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattleNet,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faEnvelope,
  faFilePdf,
  faHome,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import ContenedorHabilidad from "../components/ContenedorHabilidad";
import ContenedorHabilidadSolo from "../components/ContenedorHabilidadSolo";

const curriculum = () => {
  const habilidadesPrincipales = [
    "NextJs",
    "Python",
    "ASP.NET",
    "Power BI",
    "SQL",
    "ReactJs",
    "C#",
    "JavaScript",
    "HTML5/CSS3",
    "Machine Learning",
    "AWS",
    "FastAPI",
  ];
  const habilidadesBiotecnologia = [
    "Gestión de calidad",
    "Fermentación",
    "Bioinformática",
    "Fisicoquimica",
    "Microbiología",
    "Procesos biotecnológicos",
    "Ciencias de los alimentos",
    " NTC - ISO 9001",
  ];
  const saveFile = () => {
    //Para obtener archivos pdf, se obtiene un link de archivo codificado en base 64 y descargarlo como pdf
    saveAs(
);
  };
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
                    height={190}
                    placeholder="blur"
                  />
                </div>
                <h1 className=" text-center text-3xl font-semibold mb-2">
                  Juan David Montoya
                </h1>
                <h2 className="text-center text-xl font-light">Especialista en Analítica y Big Data</h2>
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
                <h2 className="text-xl font-semibold mb-4">
                  Habilidades en desarrollo
                </h2>
                <ul className="list-none">
                  <li className="mb-5">
                    <ProgresBar habilidad="Python" porcentaje="90" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="Next.js" porcentaje="90" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="React.js" porcentaje="85" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="ASP.NET" porcentaje="80" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="Power BI" porcentaje="85" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="SQL" porcentaje="80" />
                  </li>
                  <li className="mb-5">
                    <ProgresBar habilidad="Machine Learning" porcentaje="75" />
                  </li>
                  <li>
                    <div className="mb-4 mt-10 text-xl font-semibold">
                      Herramientas
                    </div>
                    <p className="leading-8 grid grid-cols-3">
                      {habilidadesPrincipales.map((habilidad) => (
                        <span
                          key={habilidad}
                          className="rounded-xl bg-gray-300 dark:bg-gray-500 px-4  mr-2 mb-2 hover:bg-indigo-400 hover:text-white dark:hover:bg-green-400 cursor-pointer"
                        >
                          {habilidad}
                        </span>
                      ))}
                    </p>
                  </li>

                  <li>
                    <div className="mb-4 mt-10 text-xl font-semibold">
                      Habilidades en biotecnología
                    </div>
                    <p className="leading-8 grid grid-cols-1">
                      {habilidadesBiotecnologia.map((habilidad) => (
                        <span
                          key={habilidad}
                          className="rounded-xl bg-gray-300 dark:bg-gray-500 px-4  mr-2 mb-2 hover:bg-indigo-400 hover:text-white dark:hover:bg-green-400 cursor-pointer"
                        >
                          {habilidad}
                        </span>
                      ))}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="font-light text-lg px-1 mb-12">
                <h2 className="text-xl font-semibold mb-4 mt-10 ">Educación</h2>
                <div className="flex align-middle ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 dark:text-green-300 mt-2 mr-2"
                  />
                  <div>
                    <h3 className="font-semibold ">Especialización en Analítica y Big Data</h3>
                    <p className="font-semibold text-gray-700">
                      I. U. Digital de Antioquia | 2023
                    </p>
                  </div>
                </div>
                <div className="flex align-middle mt-4 ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 dark:text-green-300 mt-2 mr-2"
                  />
                  <div>
                    <h3 className="font-semibold ">Ingeniero Biológico</h3>
                    <p className="font-semibold text-gray-700">
                      Universidad Nacional de Colombia | 2019
                    </p>
                  </div>
                </div>
              </div>

              <div className="font-light text-lg px-2 mb-12">
                <h2 className="text-xl font-semibold mb-4">Idiomas</h2>
                <div className="flex align-middle ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 dark:text-green-300 mt-1 mr-2"
                  />
                  <h3 className="font-semibold text-gray-700">Español</h3>
                </div>
                <div className="flex align-middle  ">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-green-500 dark:text-green-300 mt-1 mr-2"
                  />
                  <h3 className="font-semibold text-gray-700">Inglés</h3>
                </div>
              </div>
            </div>
            <div className="content w-full p-12">
              <div id="profile" className="prose">
                <div className="border-l-4 dark:border-green-300 border-blue-300">
                  <h2 className=" font-semibold text-2xl mb-10 ml-5">Perfil</h2>
                </div>
                <p>
                  Soy un profesional enfocado en resultados, con experiencia en
                  ciencia de datos y desarrollo web. Me especializo en análisis
                  de datos con Machine Learning y desarrollo de aplicaciones
                  usando Python, Next.js o .NET. He trabajado en proyectos de
                  desarrollo, IA, ETL, y visualización, y me gusta optimizar
                  procesos con automatización.
                </p>
                <p className="mt-2">
                  Siempre estoy buscando formas de innovar y aportar al equipo,
                  mientras sigo aprendiendo sobre analítica y Big Data.
                </p>
              </div>
              <hr className="mt-8 mb-12 border-gray-300 dark:border-gray-700 " />
              <div id="experience" className="prose">
                <div className="border-l-4 dark:border-green-300 border-blue-300">
                  <h2 className=" mb-10 font-semibold  text-2xl ml-5">
                    Experiencia
                  </h2>
                </div>
                <div>
                  <h3 className="mb-3">Iluma Alliance</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600">
                      Diciembre 2023 - Actualmente
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      Bioinformatic Associate
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Logros:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      <ul>
                        <li>
                          Lideré la creación de una plataforma web para la visualización de reportes
                          gráficos interactivos que permitió optimizar la presentación de la visualización
                          de experimentos, utilizando FastAPI para el backend y Next.js.
                        </li>
                        <li>
                          Participé en la creación de un agente IA para la generación de resúmenes de
                          información a partir de una base de datos de conocimiento haciendo más fácil
                          el acceso a información clave.
                        </li>
                        <li>
                          Diseñé e implementé un pipeline y la infraestructura en AWS para el manejo
                          de datos segmentados por experimentos para facilitar el acceso a la
                          información.
                        </li>
                        <li>
                          Participé en la creación de un toolkit/SDK para la carga e implementación de
                          transformaciones de datos, integrando Python con herramientas de AWS para
                          agilizar los procesos de exploración y análisis de datos.
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Habilidades:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10 grid">
                      <ContenedorHabilidadSolo Habilidad={"Python"} />
                      <ContenedorHabilidadSolo Habilidad={"Next.js"} />
                      <ContenedorHabilidadSolo Habilidad={"FastAPI"} />
                      <ContenedorHabilidadSolo Habilidad={"AWS"} />
                      <ContenedorHabilidadSolo Habilidad={"Machine Learning"} />
                    </div>
                  </section>
                </div>
                <hr className="mt-16 mb-12 ml-30 mr-30 lg:ml-48 lg:mr-48 border-gray-300 dark:border-gray-700" />
                <div>
                  <h3 className="mb-3">Q10 S.A.S</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600">
                      Noviembre 2021 - Diciembre 2023
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      Desarrollador
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Logros:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      <ul>
                        <li>
                          Desarrollo de soluciones ETL y dashboards con Power BI y SQL Server,
                          integrando APIs empresariales.
                        </li>
                        <li>
                          Segmentación de leads y optimización de campañas en Google Ads para
                          mejorar la relevancia y conversión de anuncios, usando clusterización.
                        </li>
                        <li>
                          Desarrollo de aplicaciones web con ASP.NET Framework y SQL Server, y
                          mejora del posicionamiento en motores de búsqueda.
                        </li>
                        <li>
                          Implementación de herramientas empresariales con SharePoint, Power BI
                          Embedded y Power Automate para automatización de procesos.
                        </li>
                        <li>
                          Desarrollo de campañas de email en HTML y mantenimiento de páginas web
                          corporativas.
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Habilidades:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10 grid">
                      <ContenedorHabilidadSolo Habilidad={"Power BI"} />
                      <ContenedorHabilidadSolo Habilidad={"SQL"} />
                      <ContenedorHabilidadSolo Habilidad={"ASP.NET"} />
                      <ContenedorHabilidadSolo Habilidad={"ETL"} />
                    </div>
                  </section>
                </div>
                <hr className="mt-16 mb-12 ml-30 mr-30 lg:ml-48 lg:mr-48 border-gray-300 dark:border-gray-700" />
                <div>
                  <h3 className="mb-3">Compañia de galletas Noel</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600">
                      Octube 2020 - Diciembre 2020
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      Operario de producción
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Tareas:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      Realicé verificación de calidad y empaque de producto
                      terminado.
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Habilidades:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10 grid">
                      <span className="rounded-xl bg-gray-300 px-3 dark:bg-gray-500 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        NTC - ISO 9001
                      </span>
                      <span className="rounded-xl  bg-gray-300 px-3 dark:bg-gray-500 mb-2 mr-2  hover:bg-indigo-400 hover:text-white  dark:hover:bg-green-400">
                        Ciencia de los alimentos
                      </span>
                    </div>
                  </section>
                </div>
                <hr className="mt-16 mb-12 ml-30 mr-30 lg:ml-48 lg:mr-48 border-gray-300 dark:border-gray-700" />
                <div>
                  <h3 className="mb-3">Billares la 53</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600">
                      Agosto 2019 - Marzo 2020
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      ADMINISTRADOR
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Tareas:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      Brindar servicio y atención a los clientes, atención a los
                      proveedores, manejo de caja registradora, control de
                      personal, verificación de estándares en productos y
                      servicios y control de inventarios.
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Habilidades:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10 grid">
                      <ContenedorHabilidadSolo
                        Habilidad={"Servicio al cliente"}
                      />
                      <ContenedorHabilidadSolo Habilidad={"Ventas"} />
                    </div>
                  </section>
                </div>
                <hr className="mt-16 mb-12 ml-30 mr-30 lg:ml-48 lg:mr-48 border-gray-300 dark:border-gray-700" />
                <div>
                  <h3 className="mb-3">Koba Colombia S.A.S</h3>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600">
                      Diciembre 2018 - Julio 2019
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      Practicante control de calidad
                    </div>
                  </section>
                  <section className="mb-6">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Tareas:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10">
                      <li className="mb-5">
                        Realicé controles de calidad mediante auditorias,
                        propuestas e implementación de planes de mejora, en más
                        de cien puntos de venta y el centro de distribución,
                        aplicando normas NTC ISO 9001, resolución 2674 de 2013 y
                        decreto 3075.
                      </li>
                      <li className="mb-5">
                        Capacite a los colaboradores de la regional norte en
                        BPM, plan de saneamiento básico y normatividad
                        sanitaria.
                      </li>
                      <li>
                        Brinde apoyo en labores administrativas relacionadas con
                        la calidad e inocuidad de los productos, mediante
                        control de trazabilidad, actas de destrucción, manejo de
                        productos no conformes y documentación legal.
                      </li>
                    </div>
                  </section>
                  <section className="mb-10">
                    <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2 lg:border-r-2 lg:border-gray-300 lg:dark:border-gray-600 ">
                      Habilidades:
                    </div>
                    <div className="lg:inline-block lg:w-8/12 w-full lg:ml-10 grid">
                      <ContenedorHabilidadSolo Habilidad={"NTC - ISO 9001"} />

                      <ContenedorHabilidadSolo
                        Habilidad={"Gestión de calidad"}
                      />

                      <ContenedorHabilidadSolo
                        Habilidad={"Gestión de calidad"}
                      />
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-8 mb-12 border-gray-300 dark:border-gray-700" />
              <div id="projects" className="prose">
                <div className="border-l-4 dark:border-green-300 border-blue-300">
                  <h2 className=" mb-10 text-2xl ml-5">
                    Proyecto de investigación
                  </h2>
                </div>
                <div className="mb-16">
                  <section className="mb-6">
                    <div className="lg:align-top italic mb-3">
                      ESTANDARIZACIÓN TÉCNICA PARA EVALUAR LA ACTIVIDAD
                      ANTIMICROBIANA DEL LACTOSUERO DULCE, FERMENTADO CON
                      GRÁNULOS DE KEFIR.
                    </div>
                    <div className="mb-6">Universidad Nacional de Colombia</div>
                    <div className="w-full mb-6">
                      <p>Proyecto de iniciación científica.</p> Brinde apoyo en
                      el desarrollo de una investigación de tesis de maestría,
                      entre mis funciones estaba esterilizar el material para
                      los experimentos, realizar evaluación de pruebas
                      antimicrobianas, realizar pruebas fisicoquimas, planear y
                      ejecutar proceso de fermentación y de analisis de
                      lactosuero.
                      <p className="mt-8">
                        {" "}
                        Directora: Dra. Blanca Cecilia Salazar Álzate
                      </p>
                    </div>
                  </section>
                </div>
              </div>
              <hr className="mt-8  border-gray-300 dark:border-gray-700" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-4 bg-gradient-to-r from-red-300 to-green-300 dark:from-indigo-300 dark:to-purple-300-300 ">
        <span className="font-semibold text-2xl">
          ¿Eres un reclutador y te gustaría descargar mi hoja de vida?
        </span>

        <p className="mt-6 pb-4 hover:scale-110 ease-in-out hover:-translate-y-1 duration-700 ">
          <span
            className="text-red-500 hover:text-red-800 transform cursor-pointer"
            onClick={saveFile}
          >
            <FontAwesomeIcon icon={faFilePdf} size="3x"></FontAwesomeIcon>
          </span>
        </p>
      </div>
    </div>
  );
};

export default curriculum;
