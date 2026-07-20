"use client";

export default function Lights() {
  return (
    <>
      {/* Global light */}
      <ambientLight intensity={0.45} />

      {/* Front */}
      <directionalLight
        position={[4, 4, 6]}
        intensity={1.8}
        color="#ffffff"
      />

      {/* Blue Rim */}
      <pointLight
        position={[0, 0, 6]}
        intensity={1.3}
        color="#3AAEFF"
      />

      {/* Orange highlight */}
      <pointLight
        position={[3, 2, 4]}
        intensity={0.6}
        color="#FF8C1A"
      />
    </>
  );
}