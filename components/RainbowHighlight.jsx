import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, type, children }) => {
  const animationDuration = Math.floor(120 * children.length);

  return (
    <RoughNotation
      type={type}
      multiline={true}
      padding={[0, 0]}
      iterations={2}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
