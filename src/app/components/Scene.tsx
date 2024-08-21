import React, { Suspense } from "react";
import Avatar from "./RenderModel";
import { useThree } from "@react-three/fiber";
import * as THREE from 'three';

export default function Scene() {
    useThree(({ camera }) => {
        camera.rotation.set(THREE.MathUtils.degToRad(12), 0, 0);
      });
  return (
    <>
      <ambientLight intensity={2}></ambientLight>
      <Suspense fallback={null}>
        <group
        position={new THREE.Vector3(0,-.4,0)}
        >
          <Avatar />
        </group>
        <group position-y={-1} position-x={1} scale={0.5}>
        </group>
      </Suspense>
    </>
  );
}
