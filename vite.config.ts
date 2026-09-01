import { default as path } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const ROOT = path.resolve(__dirname, "./");

export default defineConfig({
    build: {
        emptyOutDir: true,
        lib: {
            cssFileName: "styles",
            entry: {
                index: path.resolve(ROOT, "./src/index.ts"),
                styles: path.resolve(ROOT, "./styles.entry.ts"),
            },
            fileName: (format, entryName) =>
                format === "es" ? `${entryName}.js` : `${entryName}.cjs`,
            formats: ["es", "cjs"],
            name: "index",
        },
        minify: false,
        outDir: path.resolve(ROOT, "./dist/"),
        rollupOptions: {
            external: [
                /^react(-dom)?(?:\/.*)?$/,
                "@radix-ui/react-slot",
                "class-variance-authority",
                "clsx",
                "tailwind-merge",
            ],
        },
        target: "ES2022",
    },
    plugins: [
        dts({
            entryRoot: path.resolve(ROOT, "./src/"),
            include: [path.resolve(ROOT, "./src/")],
            rollupTypes: false,
            tsconfigPath: path.resolve(ROOT, "./tsconfig.json"),
        }),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(ROOT, "./src/"),
            },
        ],
    },
});
