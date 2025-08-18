import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
<<<<<<< HEAD
    outDir: "dist",
    sourcemap: false,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei"]
        }
      }
    }
  }
=======
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
>>>>>>> 3c4e7a34de44f42dbda80d86dbcc34d307f8bcf3
});
