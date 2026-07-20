"use client";
import { AdditiveBlending } from "three";
export default function Atmosphere() {
  return (
    <mesh scale={1.03}>
      <sphereGeometry args={[1.5, 128, 128]} />

      <meshBasicMaterial
        color="#4da6ff"
        transparent
        opacity={0.08}
        side={2}
       blending={AdditiveBlending}
      />
    </mesh>
  );
}