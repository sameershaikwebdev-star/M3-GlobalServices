"use client";

import { useGLTF } from "@react-three/drei";

export default function M3Logo() {
  const { scene } = useGLTF("/models/logo/m3-logo(5).glb");

  return (
    <primitive
      object={scene}
      position={[0.5, -0.5, 0]}
      rotation={[0, -8, 0]}
      scale={7}
    />
  );
}

useGLTF.preload("/models/logo/m3-logo(5).glb");