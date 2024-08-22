import clsx from "clsx";
import React from "react";
import Image from "next/image";
import mist1 from "../../../../public/mistBackground1.png";
import mist2 from "../../../../public/mistBackground2.png";
import mist3 from "../../../../public/mistBackground3.png";
import gradients from "./BackgroundGradient.module.css";

export default function Background() {
  return (
    <main
      className="min-h-screen w-full absolute top-0"
    
    >
      <div className={clsx("-z-20", gradients.gradient3)} />
      <div className={clsx("-z-20", gradients.gradient8)} />
      <div className={clsx("-z-20", gradients.gradient1)} />
      <div className={clsx("-z-20", gradients.gradient2)} />
      <div className={clsx("-z-20", gradients.gradient4)} />
      <div className={clsx("-z-20", gradients.gradient5)} />
      <div className={clsx("-z-20", gradients.gradient6)} />
      <div className={clsx("-z-20", gradients.gradient7)} />

      <Image
        className="-z-10"
        alt="Aetheral Mist of Creation"
        src={mist1}
        layout="fill"
        style={{ objectFit: "cover" }}
      ></Image>
      <Image
        className="-z-10"
        alt="Aetheral Mist of Creation"
        src={mist2}
        layout="fill"
        style={{
          objectFit: "cover",
        }}
      ></Image>
      <Image
        className="-z-10"
        alt="Aetheral Mist of Creation"
        src={mist3}
        layout="fill"
        style={{ objectFit: "cover" }}
      ></Image>
    </main>
  );
}
