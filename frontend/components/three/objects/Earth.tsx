"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Earth() {
  const earth = useRef<THREE.Group>(null);
  const clouds = useRef<THREE.Mesh>(null);

  const textures = useTexture({
    map: "/textures/earth/earth_day.jpg",
    emissiveMap: "/textures/earth/earth_night.jpg",
    roughnessMap: "/textures/earth/earth_roughness.png",
    metalnessMap: "/textures/earth/earth_specular.png",
    alphaMap: "/textures/earth/earth_clouds.png",
  });

  useFrame((_, delta) => {
    if (earth.current) {
      earth.current.rotation.y += delta * 0.05; // Earth rotation
    }

    if (clouds.current) {
      clouds.current.rotation.y += delta * 0.08; // Clouds rotate slightly faster
    }
  });

  return (
    <group ref={earth}>
      <mesh>
        <sphereGeometry args={[1.5, 128, 128]} />

        <meshStandardMaterial
          map={textures.map}
          emissiveMap={textures.emissiveMap}
          emissive="white"
          emissiveIntensity={0.35}
          roughnessMap={textures.roughnessMap}
          metalnessMap={textures.metalnessMap}
        />
      </mesh>

      <mesh ref={clouds} scale={1.01}>
        <sphereGeometry args={[1.5, 128, 128]} />

        <meshStandardMaterial
          alphaMap={textures.alphaMap}
          transparent
          opacity={0.45}
          depthWrite={false}
          color="white"
        />
      </mesh>
    </group>
  );
}