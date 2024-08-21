"use client";
import React, { useEffect, useRef } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function Avatar(props) {
  const group = useRef();
  const { scene } = useGLTF("/tarren.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { animations: idleAnimation } = useFBX("/treading.fbx ");
  idleAnimation[0].name = "Treading";
  const { actions } = useAnimations(idleAnimation, group);
  useEffect(() => {
    actions["Treading"]?.play();
  });
  const ref = useRef();
  useFrame((state, delta, xFrame) => {
    ref.current.position.y =
       Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group ref={ref} rotation={[-3.14 / 2 + 3.14 / 7, 0, 0.01]}>
      <group {...props} ref={group} dispose={null}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Wolf3D_Avatar_Transparent.geometry}
          material={materials.Wolf3D_Avatar_Transparent}
          skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton}
        ></skinnedMesh>

        {/* <DissolveMaterial></DissolveMaterial> */}
        <skinnedMesh
          name="Wolf3D_Avatar"
          geometry={nodes.Wolf3D_Avatar.geometry}
          material={materials.Wolf3D_Avatar}
          skeleton={nodes.Wolf3D_Avatar.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
        ></skinnedMesh>
      </group>
    </group>
  );
}

useGLTF.preload("/tarren.glb");
