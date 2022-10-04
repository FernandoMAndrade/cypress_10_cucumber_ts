import { defineConfig } from "cypress";
import defu from 'defu';
import defaultConfig from "../../cypress.config"

export default defineConfig(
    defu(
        {
            env: {
                environment: 'dev'
            },
            e2e: {
                baseUrl: "https://dev.uniquedomain.com"
            },
        },
        defaultConfig
    )
);
