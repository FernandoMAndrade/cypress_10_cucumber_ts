import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

<<<<<<< HEAD
async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
      "file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin(config)],
      })
  );

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: false,
    setupNodeEvents,
  },
});
=======
export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    video: false,
    screenshotOnRunFailure: false,
    retries: {
      runMode: 2,
      openMode: 2
    },
    async setupNodeEvents(
        on: Cypress.PluginEvents,
        config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);

      on(
          "file:preprocessor",
          createBundler({
            plugins: [createEsbuildPlugin(config)],
          })
      );

      return config;
    }
  },
});
>>>>>>> 7a2e0ff (Update cypress template)
