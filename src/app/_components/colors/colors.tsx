import { tailwindColors } from "@/configs/tailwindColors";
import React from "react";

export const Colors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(tailwindColors).map(([name, value]) => (
        <div key={name} className="m-4 flex flex-col items-center">
          <div
            className="size-24 rounded-full"
            style={{ backgroundColor: value }}
          />
          <span className="mt-2 text-sm">{name}</span>
          <span className="mt-2 text-sm">{value}</span>
        </div>
      ))}
    </div>
  );
};
