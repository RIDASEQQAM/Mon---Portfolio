import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Decal, Float, useTexture } from "@react-three/drei";
import CanvasLoader from "../loader";

type Tech = {
  name: string;
  icon: string;
};

const TechSphere = ({ position, texture }: { position: [number, number, number]; texture: any }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.75} floatIntensity={1.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh castShadow receiveShadow position={position} scale={1.2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
          roughness={0.3}
          metalness={0.2}
        />
        {texture && (
          <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={texture} />
        )}
      </mesh>
    </Float>
  );
};

type TechCanvasProps = {
  techs: Tech[];
  columns?: number;
};

const TechCanvas = ({ techs, columns = 5 }: TechCanvasProps) => {
  // load all textures at once
  const urls = useMemo(() => techs.map((t) => t.icon), [techs]);
  // useTexture returns a mapped type; cast to any[] so we can index by number
  const textures = useTexture(urls as any) as any[];

  // compute grid positions
  const rows = Math.ceil(techs.length / columns);
  const spacing = 3.5;
  const positions = techs.map((_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;
    const x = col * spacing - ((columns - 1) * spacing) / 2;
    const y = -row * spacing + ((rows - 1) * spacing) / 2;
    return [x, y, 0] as [number, number, number];
  });

  // calculate camera distance to fit grid
  const gridWidth = Math.max(columns, techs.length) * spacing;
  const cameraZ = Math.max(8, Math.max(columns, rows) * spacing);

  return (
    <div style={{ width: "100%", height: `${Math.max(300, rows * 140)}px` }}>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, cameraZ] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          {techs.map((t, i) => (
            <TechSphere key={t.name} position={positions[i]} texture={textures[i]} />
          ))}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TechCanvas;
