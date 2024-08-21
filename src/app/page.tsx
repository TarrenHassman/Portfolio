"use client";
import Image from "next/image";
import mist1 from "../../public/mistBackground1.png";
import mist2 from "../../public/mistBackground2.png";
import mist3 from "../../public/mistBackground3.png";
import gradients from "./components/BackgroundGradient.module.css";
import Scene from "./components/Scene";
import { Canvas } from "@react-three/fiber";
import NavigationButtons from "./components/NavigationButtons";
import clsx from "clsx";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={gradients.gradient3} />
      <div className={gradients.gradient8} />
      <div className={gradients.gradient1} />
      <div className={gradients.gradient2} />
      <div className={gradients.gradient4} />
      <div className={gradients.gradient5} />
      <div className={gradients.gradient6} />
      <div className={gradients.gradient7} />
      <Image
        alt="Aetheral Mist of Creation"
        src={mist1}
        layout="fill"
        style={{ objectFit: "cover" }}
      ></Image>
      <Image
        alt="Aetheral Mist of Creation"
        src={mist2}
        layout="fill"
        style={{
           objectFit: "cover" }}
      ></Image>
      <Image
        alt="Aetheral Mist of Creation"
        src={mist3}
        layout="fill"
        style={{ objectFit: "cover" }}
      ></Image>
      <Canvas
        style={{
          height: "100vh",
          width: "100vh",
          position: "absolute",
        }}
        shadows
        camera={{
          position: [0, -1, 5],
          fov: 50,
        }}
      >
        <Scene></Scene>
      </Canvas>
      <NavigationButtons></NavigationButtons>
      <div className="w-full h-screen"></div>
    </main>
  );
}
