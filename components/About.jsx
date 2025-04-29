import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <RoughNotationGroup show={true}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Columna de texto */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                Especialista en Analítica y Big Data
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <RoughNotation
                  type="underline"
                  color="#3B82F6"
                  strokeWidth={2}
                  padding={[0, 2]}
                  order={1}
                >
                  Juan David
                </RoughNotation>
              </h1>
            </div>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Soy un especialista en analítica y big data con experiencia en ciencia de datos y desarrollo web. 
                Me especializo en análisis de datos con{" "}
                <RoughNotation
                  type="highlight"
                  color="#F59E0B"
                  padding={[0, 2]}
                  order={2}
                >
                  Machine Learning
                </RoughNotation>{" "}
                y desarrollo de aplicaciones usando{" "}
                <RoughNotation
                  type="highlight"
                  color="#10B981"
                  padding={[0, 2]}
                  order={3}
                >
                  Python, Next.js y .NET
                </RoughNotation>.
              </p>
              <p className="text-lg leading-relaxed">
                Actualmente me desempeño como{" "}
                <RoughNotation
                  type="highlight"
                  color="#84CC16"
                  padding={[0, 2]}
                  order={4}
                >
                  Bioinformatic Associate
                </RoughNotation>{" "}
                en Iluma Alliance, donde lidero el desarrollo de plataformas web para visualización de reportes gráficos interactivos 
                y participo en la creación de agentes IA para la generación de resúmenes de información.
              </p>
            </div>
            
            <div className="pt-4 flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
          
          {/* Columna de imagen */}
          <div className="md:col-span-5 flex justify-center">
            <Link href="/curriculum">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 opacity-20"></div>
                <img
                  src="https://i.postimg.cc/3wvnSR27/profile-removebg-preview.png"
                  alt="Juan David"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </Link>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};

export default About;
