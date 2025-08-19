import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, useCallback } from "react";
import { LoadingScreen } from "../LoadingScreen";
import * as THREE from 'three';

// Create optimized texture loader
const textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = 'anonymous';

// Configure loading manager
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = (url, loaded, total) => {
  console.log(`Loading file: ${url}.\nLoaded ${loaded} of ${total} files.`);
};

// Enable Draco decoder
useGLTF.preload("/desktop_pc/scene.gltf", true);

type ComputersProps = {
  isMobile: boolean;
};

// Computers
const Computers = ({ isMobile }: ComputersProps) => {
  // Import scene with draco compression and caching
  const computer = useGLTF("./desktop_pc/scene.gltf", true);

  // Optimize scene when loaded
  useEffect(() => {
    if (computer.scene) {
      computer.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          // Enable shadows and optimize materials
          child.castShadow = true;
          child.receiveShadow = true;
          if ((child as THREE.Mesh).material) {
            const material = (child as THREE.Mesh).material as THREE.Material;
            
            // Optimize materials
            if ('map' in material) {
              const texturedMaterial = material as THREE.MeshStandardMaterial;
              if (texturedMaterial.map) {
                // Enable texture compression
                texturedMaterial.map.generateMipmaps = false;
                texturedMaterial.map.minFilter = THREE.LinearFilter;
                texturedMaterial.map.magFilter = THREE.LinearFilter;
                texturedMaterial.map.anisotropy = 1;
              }
            }

            // Enable material optimizations
            material.needsUpdate = true;
          }
        }
      });
    }
  }, [computer.scene]);

  return (
    // Mesh
    <mesh>
      {/* Optimized lighting setup */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={0.8} position={[5, 5, 5]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
        distance={200}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Preload the 3D model
  useEffect(() => {
    const preloadModel = async () => {
      await useGLTF.preload("./desktop_pc/scene.gltf");
      setIsLoading(false);
    };
    preloadModel();
  }, []);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1,
        shadowMapType: THREE.PCFSoftShadowMap
      }}
      performance={{ 
        min: 0.5,
        max: 1,
        debounce: 200
      }}
      camera={{
        position: [20, 3, 5],
        fov: 25,
        near: 0.1,
        far: 1000
      }}
    >
      <Suspense fallback={<LoadingScreen />}>
        {/* Optimized ambient lighting */}
        <ambientLight intensity={0.1} />
        <directionalLight 
          intensity={0.5}
          position={[5, 5, 5]}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
          shadow-radius={2}
        >
          <orthographicCamera 
            attach="shadow-camera"
            args={[-10, 10, -10, 10, 0.1, 50]}
          />
        </directionalLight>
        
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          makeDefault
          enableDamping
          dampingFactor={0.05}
        />
        
        {!isLoading && <Computers isMobile={isMobile} />}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
