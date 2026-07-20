"use client";

import { Environment } from "@react-three/drei";

export default function HDRI() {
  return (
    <Environment
      files="/textures/hdr/space.hdr"
      background={false}
      environmentIntensity={0.8}
    />
  );
}