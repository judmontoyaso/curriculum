import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
  const animationDuration = Math.floor(50 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 1]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};