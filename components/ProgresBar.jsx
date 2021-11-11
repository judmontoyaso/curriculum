import { Line, Circle } from "rc-progress";
import { useTheme } from "next-themes";

import React from "react";

export const ProgresBar = ({ habilidad, porcentaje }) => {
  const { theme } = useTheme();
  return (
    <div>
      <span className="font-medium">{habilidad}</span>
      <Line
        percent={porcentaje}
        strokeWidth="4"
        strokeColor={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
        trailColor={"#F0F8FF"}
      />
    </div>
  );
};
