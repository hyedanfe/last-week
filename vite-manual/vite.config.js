import { defineConfig } from "vite";
import { resolve } from "node:path";

const env = process.env.NODE_ENV;

const viteConfig = defineConfig({
  build: {
    outDir: "docs",
  },
  server: {
    host: "localhost",
    port: 3000,
    cors: true,
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName:
        env === "development"
          ? "[name]__[local]"
          : "[name]__[local]___[hash:base64:5]",
    },
  },
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});

export default viteConfig;
