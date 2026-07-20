"use client";

import { PerspectiveCamera } from "@react-three/drei";

export default function MainCamera() {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0, 8]}
      fov={35}
    />
  );
}