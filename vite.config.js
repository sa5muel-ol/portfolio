import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
    plugins: [
        react(),
        eslint({
            failOnError: false,
            failOnWarning: false,
            include: ['src/**/*.js', 'src/**/*.jsx'],
        }),
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
        allowedHosts: ['samuelninsiima.com']
    },
});