const { defineConfig } = require("cypress");

module.exports = defineConfig({

  baseUrl: "https://example.cypress.io",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
