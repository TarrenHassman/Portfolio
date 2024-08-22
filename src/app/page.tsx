"use client";
import Scene from "./components/Scene";
import { Canvas } from "@react-three/fiber";
import NavigationButtons from "./components/navigation/NavigationButtons";
import clsx from "clsx";
import Particles from "./components/3components/Particles";
import Background from "./components/background/Background";
export default function Home() {
  return (
    <main
    
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Background></Background>
      <Particles></Particles>
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
      <div
        className="z-10"
        style={{
          pointerEvents: "none",
        }}
      >
        <Particles></Particles>
      </div>
      <div className="w-full h-screen"></div>
    </main>
  );
}
