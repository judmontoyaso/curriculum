import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiedPiper } from "@fortawesome/free-brands-svg-icons";
import {
  faHamburger,
  faUserCircle,
  faFileAlt,
  faLaptopCode,
  faPaperPlane,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import ActiveRoute from "./ActiveRoute";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import LikeButton from "./LikeButton";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const { theme } = useTheme();
  const handleClick = () => {
    setActive(!active);
  };
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <nav className="sticky top-0 z-20 py-2 bg-gray-200 md:py-4 md:mb-6  dark:bg-black  transition-all duration-1000">
      <ThemeSwitch />

    
<div className="float-right flex flex-row">

      <div className="  !transition-none ">
        <LikeButton />
      </div>
      <button
        className=" pr-3 pl-3 pt-1 dark:hover:text-blue-400 hover:text-green-500 rounded-sm lg:hidden text-black ml-auto outline-none justify-end dark:text-white  hover:text-xl"
        onClick={handleClick}
      >
        {!active ? (
          <FontAwesomeIcon icon={faHamburger} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faHotdog} size="lg" />
        )}
      </button></div>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto lg:float-right`}
      >
        <div className=" lg:inline-flex lg:flex-row lg:ml-auto lg:mr-10 lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto  lg:sticky absolute dark:bg-black dark:bg-opacity-80 bg-white lg:bg-transparent lg:dark:bg-transparent bg-opacity-80  transition-color duration-1000">
          
          <ActiveRoute href="/">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"bracket"}
              brackets={["left", "right"]}
            >
              <FontAwesomeIcon icon={faUserCircle} />
              <span className="lg:ml-2 ml-5 ">Perfil</span>
            </RoughNotation>
          </ActiveRoute>
          <ActiveRoute href="/curriculum">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"bracket"}
              brackets={["left", "right"]}
            >
              <FontAwesomeIcon icon={faFileAlt} />
              <span className="lg:ml-2 ml-5">Curriculum</span>
            </RoughNotation>
          </ActiveRoute>
          <ActiveRoute href="/timeline">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"bracket"}
              brackets={["left", "right"]}
            >
              <FontAwesomeIcon icon={faHistory} />
              <span className="lg:ml-2 ml-5">Timeline</span>
            </RoughNotation>
          </ActiveRoute>
          <ActiveRoute href="/project">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"bracket"}
              brackets={["left", "right"]}
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <span className="lg:ml-2 ml-5">Proyectos</span>
            </RoughNotation>
          </ActiveRoute>
          <ActiveRoute href="/blog">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"bracket"}
              brackets={["left", "right"]}
            >
              <FontAwesomeIcon icon={faPiedPiper} />

              <span className="lg:ml-2 ml-5">Blog</span>
            </RoughNotation>
          </ActiveRoute>
          <ActiveRoute href="/contact">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"bracket"}
              brackets={["left", "right"]}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="lg:ml-2 ml-5">Contacto</span>
            </RoughNotation>
          </ActiveRoute>


        </div>
      </div>
    </nav>
  );
};

export default Navigation;
