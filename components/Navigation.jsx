import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import { faHotdog } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black  transition-color duration-1000">
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
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:mr-20 lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto  lg:sticky absolute dark:bg-black dark:bg-opacity-20 bg-gray-200 bg-opacity-20  transition-color duration-1000">
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400  hover:border-b-2 hover:text-green-400 hover:border-green-500 dark:text-white  lg:mt-0 mt-4">
              <span className="">Curriculum</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400  hover:border-b-2 hover:text-green-400 hover:border-green-500 dark:text-white">
              <span className="">Proyectos</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400  hover:border-b-2   hover:text-green-400 hover:border-green-500 dark:text-white">
              <span className="">Contacto</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
