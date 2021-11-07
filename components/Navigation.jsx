import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
      <ThemeSwitch />

      <button
        className="float-right pr-3 pl-3 pt-1 dark:hover:text-blue-400 hover:text-green-500 rounded-sm lg:hidden text-black ml-auto outline-none justify-end dark:text-white"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto lg:float-right`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:mr-20 lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto">
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400 dark:border-black border-b-2 border-white hover:text-green-400 hover:border-green-500 dark:text-white">
              <span className="">Curriculum</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400 dark:border-black border-b-2 border-white hover:text-green-400 hover:border-green-500 dark:text-white">
              <span className="">Proyectos</span>
            </a>
          </Link>
          <Link href="/">
            <a className="lg:mr-8 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-2xl text-black font-bold  items-center justify-center dark:hover:text-blue-300 dark:hover:border-blue-400 dark:border-black border-b-2   border-white hover:text-green-400 hover:border-green-500 dark:text-white">
              <span className="">Contacto</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;