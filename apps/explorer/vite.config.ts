import { default as path } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const PORT = 33334;

const ROOT = path.resolve(__dirname, "./");
const SRC_DIR = path.resolve(ROOT, "./src/");
const REPO_ROOT = path.resolve(ROOT, "../../");
const KIT_SOURCE_DIR = path.resolve(REPO_ROOT, "./src/");

export default defineConfig({
    build: {
        emptyOutDir: true,
        minify: true,
        outDir: path.resolve(ROOT, "./.build/"),
        target: "ES2022",
    },
    plugins: [
        tanstackRouter({
            srcDirectory: "src",
            target: "react",
        }),
        tailwindcss(),
        react(),
    ],
    resolve: {
        alias: [
            {
                find: /^@explorer\/route-tree$/,
                replacement: path.resolve(SRC_DIR, "./routeTree.gen.ts"),
            },
            {
                find: /^@rosinfo\.tech\/ui-kit$/,
                replacement: path.resolve(KIT_SOURCE_DIR, "./index.ts"),
            },
            {
                find: /^@rosinfo\.tech\/ui-kit\/(.+)$/,
                replacement: path.resolve(KIT_SOURCE_DIR, "./$1"),
            },
            {
                find: "@explorer",
                replacement: SRC_DIR,
            },
            {
                // Алиас исходников ui-kit (компилируются напрямую из src/)
                find: "@",
                replacement: KIT_SOURCE_DIR,
            },
        ],
    },
    server: {
        host: true,
        port: PORT,
    },
});
