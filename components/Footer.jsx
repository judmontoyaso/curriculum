import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6 lg:pb-7">
      <div className="max-w-4xl px-4 mx-auto text-gray-700 dark:text-gray-300">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-4 font-medium lg:pt-0 mb-14 lg:mb-0">
            <div className="border-r-2 pr-5 pl-5 border-gray-400 dark:border-gray-400">
              <a
                href="https://www.linkedin.com/in/juansolorzano/"
                className={"transition-colors hover:text-yellow-500"}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <div className="">
              <a
                href="https://github.com/judmontoyaso/"
                className={"transition-colors hover:text-yellow-500"}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
          <p className="text-xs">
            Built with Next.js, Tailwind and deploy on Vercel
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
