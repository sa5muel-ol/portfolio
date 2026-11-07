import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

function githubPages() {
    return {
        name: "github-pages",
        apply: "build",
        writeBundle(outputOptions) {
            const distDir = outputOptions.dir || resolve("dist");
            // GitHub Pages serves this file for unknown paths and keeps the URL,
            // so a refresh on /projects/:id still loads the client-side router.
            copyFileSync(resolve(distDir, "index.html"), resolve(distDir, "404.html"));
            // Pages only keeps the custom domain when the uploaded artifact contains CNAME.
            copyFileSync(resolve("CNAME"), resolve(distDir, "CNAME"));
        },
    };
}

export default defineConfig({
    base: "/",
    plugins: [
        react(),
        eslint({
            failOnError: false,
            failOnWarning: false,
            include: ['src/**/*.js', 'src/**/*.jsx'],
            cache: false,
            lintOnStart: false,
        }),
        githubPages(),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        hmr: {
            overlay: false,
        },
        host: true, // needed for the Docker Container port mapping to work
        strictPort: true,
        port: 5173, // you can replace this port with any port
        allowedHosts: ['samuelninsiima.com', "www.samuelninsiima.com"]
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks: undefined
            }
        }
    }
});