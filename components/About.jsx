import React from "react";
import Image from "next/image";
import profile from "/public/profile.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

const About = () => {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="container px-4 mx-auto">
      <RoughNotationGroup show={true}>
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
          <div className="lg:px-4 lg:mt-12 ">
            <h1 className="text-xl font-bold text-gray-900 lg:text-3xl dark:text-white">
              Hola!, mi nombre es{" "}
              <RoughNotation
                color={colors[3]}
                type="underline"
                order="2"
                padding={[0, 1]}
              >
                {" "}
                Juan David{" "}
              </RoughNotation>
            </h1>
            <div className="mt-6 text-gray-800 dark:text-white">
              <p className="mb-4">
                Soy un{" "}
                <RainbowHighlight color={colors[0]} type={"highlight"}>
                  {" "}
                  Ingeniero
                </RainbowHighlight>{" "}
                orientado a la calidad. Soy una persona positiva,{" "}
                <RainbowHighlight color={colors[1]} type={"highlight"}>
                  proactiva,
                </RainbowHighlight>{" "}
                comprometida y responsable. Tengo conocimientos en biotecnología
                y en{" "}
                <RainbowHighlight color={colors[3]} type={"highlight"}>
                  desarrollo web,
                </RainbowHighlight>{" "}
                me apasiona el manejo de herramientas tecnológicas que permitan
                aprovechar la eficiencia en el manejo de la información. Mi
                objetivo profesional esta enfocado en integrarme en un{" "}
                <RainbowHighlight color={colors[0]} type={"highlight"}>
                  equipo de trabajo
                </RainbowHighlight>
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
              width={180}
              height={200}
              placeholder="blur"
            />
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
};

export default About;
