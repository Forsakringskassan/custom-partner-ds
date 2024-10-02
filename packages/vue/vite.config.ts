import { defineConfig } from "@forsakringskassan/vite-lib-config/vite";

export default defineConfig({
    fk: {
        enableBanner: false,
    },
    resolve: {
        alias: {
            "@fkui/custom-partner-vue": "src/index.ts",
            "~@fkui/design": "@fkui/design",
            "~@fkui/css-variables": "@fkui/css-variables",
        },
    },
});
