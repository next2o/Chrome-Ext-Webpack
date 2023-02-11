const { defineConfig } = require('cypress')
// const extensionLoader = require('cypress-browser-extension-plugin');
const { lighthouse, prepareAudit } = require('cypress-audit');
const addExtensionCommands = require('cypress-browser-extension-plugin/commands');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = { name: 'chrome', family: 'chromium' }, launchOptions) => {
        // if (browser.name === 'chrome' && browser.isHeadless) {
        // launchOptions.args.push('--window-size=1400,1200')
        // launchOptions.args.push('--force-device-scale-factor=1')
        // }
        launchOptions.extensions.push('C:/Users/umas1/Documents/JavaScript/CodeSmith/GIt/OSP/Chrome-Ext-Webpack/build')
        prepareAudit(launchOptions)

        return launchOptions
      });
      // on('task', { lighthouse: lighthouse() })
    },
  },
});




