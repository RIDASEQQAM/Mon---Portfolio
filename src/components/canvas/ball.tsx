import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../loader";

type BallProps = {
  imgUrl: string;
};

// Ball
const Ball = ({ imgUrl }: BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.75} floatIntensity={1.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
          roughness={0.3}
          metalness={0.2}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
};

// Ball Canvas
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        powerPreference: "default",
        depth: true,
        stencil: false
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
