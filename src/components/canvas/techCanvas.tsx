import React, { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Decal, Float, useTexture } from "@react-three/drei";
import CanvasLoader from "../loader";

type Tech = {
  name: string;
  icon: string;
};

const TechSphere = ({
  position,
  textureUrl,
  name,
  hovered,
  selected,
  onHover,
  onUnhover,
  onSelect,
}: {
  position: [number, number, number];
  textureUrl: string;
  name: string;
  hovered: boolean;
  selected: boolean;
  onHover: () => void;
  onUnhover: () => void;
  onSelect: () => void;
}) => {
  // useTexture must be called inside the R3F canvas render tree
  const [decal] = useTexture([textureUrl]);

  const scale = selected ? 1.6 : hovered ? 1.35 : 1.2;

  return (
    <Float speed={1.5} rotationIntensity={0.75} floatIntensity={1.5}>
      <mesh
        castShadow
        receiveShadow
        position={position}
        scale={scale}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover();
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onUnhover();
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
          roughness={0.3}
          metalness={0.2}
        />
        {decal && <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} map={decal} />}
      </mesh>
    </Float>
  );
};

type TechCanvasProps = {
  techs: Tech[];
  columns?: number;
};

const TechCanvas = ({ techs, columns = 5 }: TechCanvasProps) => {
  // compute urls for textures (they will be loaded inside each TechSphere via useTexture)
  const urls = useMemo(() => techs.map((t) => t.icon), [techs]);

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

  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div style={{ width: "100%", height: `${Math.max(300, rows * 140)}px`, position: "relative" }}>
      {/* overlay for hovered/selected tech name */}
      <div
        style={{
          position: "absolute",
          left: 12,
          top: 12,
          zIndex: 10,
          color: "#fff",
          padding: "6px 10px",
          background: "rgba(0,0,0,0.4)",
          borderRadius: 6,
          pointerEvents: "none",
          fontSize: 14,
        }}
      >
        {selected || hovered || ""}
      </div>

      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, cameraZ] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
          {/* enable zoom so mobile pinch-to-zoom works; allow rotate by touch */}
          <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          {techs.map((t, i) => (
            <TechSphere
              key={t.name}
              position={positions[i]}
              textureUrl={urls[i]}
              name={t.name}
              hovered={hovered === t.name}
              selected={selected === t.name}
              onHover={() => setHovered(t.name)}
              onUnhover={() => setHovered((cur) => (cur === t.name ? null : cur))}
              onSelect={() => setSelected((cur) => (cur === t.name ? null : t.name))}
            />
          ))}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TechCanvas;
