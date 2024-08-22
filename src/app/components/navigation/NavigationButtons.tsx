import React from "react";
import { BtnList } from "../data";
import NavButton from "./NavButton";
export default function NavigationButtons() {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div
      className="fixed h-screen flex items-center justify-center"
      style={{
        width: "100vh",
        transform: "translate(0px,-150px)",
      }}
    >
      <div className="flex items-center justify-center relative animate-spin-slow hover:pause group">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(300px)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;
          return (
            <NavButton
              key={index}
              x={x}
              y={y}
              label={btn.label}
              link={btn.link}
              icon={btn.icon}
              newTab={btn.newTab}
            ></NavButton>
          );
        })}
      </div>
    </div>
  );
}
