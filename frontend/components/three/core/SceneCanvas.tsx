"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Experience from "./Experience";

export default function SceneCanvas() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 10],
        fov: 30,
      }}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#050816",
      }}
      shadows
    dpr={[1, 2]}

  gl={{
    antialias: true,
    alpha: true,
    toneMapping: THREE.ACESFilmicToneMapping,
    outputColorSpace: THREE.SRGBColorSpace,
  }}
>
  <Suspense fallback={null}>
        <Experience />
      </Suspense>
      
    </Canvas>
  );
}