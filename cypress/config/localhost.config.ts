import { defineConfig } from "cypress";
import defu from 'defu';
import defaultConfig from "../../cypress.config"

export default defineConfig(
    defu(
        {
            env: {
                environment: 'localhost'
            },
            e2e: {
                baseUrl: "http://127.0.0.1:8080"
            },
        },
        defaultConfig
    )
);
