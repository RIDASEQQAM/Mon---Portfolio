import { Html, useProgress } from '@react-three/drei';

export const LoadingScreen = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white mt-4">
          Loading 3D Experience... {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};
