import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faUserCircle, faFileAlt, faLaptopCode, faHistory } from "@fortawesome/free-solid-svg-icons";
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
  
  return (
    <nav className="sticky top-0 z-20 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ThemeSwitch />
            <div className="ml-4">
              <LikeButton />
            </div>
          </div>
          
          <button
            className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={handleClick}
          >
            {!active ? (
              <FontAwesomeIcon icon={faHamburger} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faHotdog} size="lg" />
            )}
          </button>
          
          <div className={`${active ? "block" : "hidden"} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm lg:bg-transparent lg:dark:bg-transparent border-b border-gray-200 dark:border-gray-700 lg:border-0`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 p-4 lg:p-0">
              <ActiveRoute href="/">
                <RoughNotation
                  color={theme === "dark" ? "#3B82F6" : "#3B82F6"}
                  type="underline"
                  strokeWidth={2}
                  padding={[0, 2]}
                >
                  <div className="flex items-center py-2 lg:py-0">
                    <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                    <span>Perfil</span>
                  </div>
                </RoughNotation>
              </ActiveRoute>
              
              <ActiveRoute href="/curriculum">
                <RoughNotation
                  color={theme === "dark" ? "#10B981" : "#10B981"}
                  type="underline"
                  strokeWidth={2}
                  padding={[0, 2]}
                >
                  <div className="flex items-center py-2 lg:py-0">
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                    <span>Curriculum</span>
                  </div>
                </RoughNotation>
              </ActiveRoute>
              
              <ActiveRoute href="/timeline">
                <RoughNotation
                  color={theme === "dark" ? "#F59E0B" : "#F59E0B"}
                  type="underline"
                  strokeWidth={2}
                  padding={[0, 2]}
                >
                  <div className="flex items-center py-2 lg:py-0">
                    <FontAwesomeIcon icon={faHistory} className="mr-2" />
                    <span>Timeline</span>
                  </div>
                </RoughNotation>
              </ActiveRoute>
              
              <ActiveRoute href="/project">
                <RoughNotation
                  color={theme === "dark" ? "#84CC16" : "#84CC16"}
                  type="underline"
                  strokeWidth={2}
                  padding={[0, 2]}
                >
                  <div className="flex items-center py-2 lg:py-0">
                    <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                    <span>Proyectos</span>
                  </div>
                </RoughNotation>
              </ActiveRoute>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
