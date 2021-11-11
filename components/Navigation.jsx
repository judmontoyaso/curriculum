import Link from "next/link";
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
} from "@fortawesome/free-solid-svg-icons";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveRoute";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky top-0 z-20 py-2 bg-white md:py-4 md:mb-6  dark:bg-black  transition-all duration-1000">
      <ThemeSwitch />

      <button
        className="float-right pr-3 pl-3 pt-1 dark:hover:text-blue-400 hover:text-green-500 rounded-sm lg:hidden text-black ml-auto outline-none justify-end dark:text-white  hover:text-xl"
        onClick={handleClick}
      >
        {!active ? (
          <FontAwesomeIcon icon={faHamburger} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faHotdog} size="lg" />
        )}
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto lg:float-right`}
      >
        <div className=" lg:inline-flex lg:flex-row lg:ml-auto lg:mr-10 lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto  lg:sticky absolute dark:bg-black dark:bg-opacity-80 bg-white lg:bg-transparent lg:dark:bg-transparent bg-opacity-80  transition-color duration-1000">
          <ActiveLink href="/">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="lg:ml-2 ml-4 ">Perfil</span>
          </ActiveLink>
          <ActiveLink href="/curriculum">
              <FontAwesomeIcon icon={faFileAlt} />
              <span className="lg:ml-2 ml-5">Curriculum</span>
            
          </ActiveLink>
          <ActiveLink href="/project">
              <FontAwesomeIcon icon={faLaptopCode} />
              <span className="lg:ml-2 ml-4">Proyectos</span>
          </ActiveLink>
          <ActiveLink href="/blog">
              <FontAwesomeIcon icon={faPiedPiper} />
              <span className="lg:ml-2 ml-5">Blog</span>
          </ActiveLink>
          <ActiveLink href="/contact">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span className="lg:ml-2 ml-5">Contacto</span>
          </ActiveLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
