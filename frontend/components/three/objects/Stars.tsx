"use client";

import { Stars } from "@react-three/drei";

export default function SpaceStars() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={70000}
      factor={5}
      saturation={0}
      fade
      speed={3}
    />
  );
}