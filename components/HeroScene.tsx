"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const viewport = useThree((s) => s.viewport);

  useFrame((state, delta) => {
    if (!tilt.current || !spin.current) return;
    spin.current.rotation.y += delta * 0.15;
    tilt.current.rotation.x = THREE.MathUtils.lerp(
      tilt.current.rotation.x,
      -state.pointer.y * 0.25,
      0.05
    );
    tilt.current.rotation.z = THREE.MathUtils.lerp(
      tilt.current.rotation.z,
      state.pointer.x * 0.15,
      0.05
    );
  });

  return (
    <group ref={tilt} position={[viewport.width * 0.2, 0, 0]}>
      <group ref={spin}>
        {/* black core hides the back-facing lines, so the wireframe reads clean */}
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial
            color="#0a0a0a"
            polygonOffset
            polygonOffsetFactor={1}
            polygonOffsetUnits={1}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshBasicMaterial color="#b6ff00" wireframe />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        eventSource={document.body}
        eventPrefix="client"
      >
        <Core />
      </Canvas>
    </div>
  );
}