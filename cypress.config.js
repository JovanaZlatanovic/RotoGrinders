const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",


  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report/mochawesome-report",
  },
  e2e: {
    baseUrl: 'https://rotogrinders.com/sign-up',
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    includeShadowDom: true,
    env: {
      updateSnapshots: false
    },
    setupNodeEvents(on, config) {
      if (config.env.environment === "dev") {
        config.baseUrl = 'devTest.app/'

      }
      else if (config.env.environment === "prod") {
        config.baseUrl = 'prodTest.app/'
      }
      return config
    },
  },
});
