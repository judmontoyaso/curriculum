import React from "react";
import Image from "next/image";
import profile from "/public/profile.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

const About = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hola!,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Soy un{" "}
              <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[0]}>
                  {" "}
                  Ingeniero{" "}
                </RainbowHighlight>
              </RoughNotationGroup>{" "}
              orientado a la calidad. Soy una persona positiva,
              <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[1]}>proactiva</RainbowHighlight>
              </RoughNotationGroup>
              , comprometida y responsable. Tengo conocimientos en biotecnología
              y en{" "}
              <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[3]}>
                  desarrollo web
                </RainbowHighlight>
              </RoughNotationGroup>
              , me apasiona el manejo de herramientas tecnológicas que permitan
              aprovechar la eficiencia en el manejo de la información. Mi
              objetivo profesional esta enfocado en integrarme en un{" "}
              <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[0]}>
                  equipo de trabajo
                </RainbowHighlight>
              </RoughNotationGroup>
              , donde pueda aportar desde mi formación y que me permita crecer
              profesionalmente.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={200}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
