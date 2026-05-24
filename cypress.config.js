const { defineConfig } = require("cypress");
import { error } from "console";
import fs from "fs";
import path from "path";
import { json } from "stream/consumers";


function getEnvByConfig(env) {
  const filepath = path.resolve("config", `${env}.json`)
  if (!fs.existsSync(filepath)) {
    throw new Error("File not found");
  }
  return JSON.parse(fs.readFileSync(filepath))
}


module.exports = defineConfig({
  allowCypressEnv: true,
  chromeWebSecurity :false,
  screenshotOnRunFailure :true,
  reporter : 'cypress-mochawesome-reporter',
  reporterOptions:{
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'TestMu Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },


  e2e: {
     defaultCommandTimeout: 10000,
     pageLoadTimeout: 30000,

     retries:{
      runMode : 1,
      openMode: 0,
     },

    setupNodeEvents(on, config) {

      const configFile = config.env.configFile 

      if(!process.env.CI){
      const envConfig = getEnvByConfig(configFile);
      config.baseUrl = envConfig.baseUrl;
      config.env= {
        ...config.env,
        ...envConfig
      }
    }
    else{
      config.baseUrl= process.env.baseUrl;
       config.env = {
                    ...config.env,
                    email: process.env.EMAIL,
                    password: process.env.PASSWORD
                };
    }

    require('cypress-mochawesome-reporter/plugin')(on);
    return config; 
      // implement node event listeners here
    },
    //baseUrl: "https://automationexercise.com/",
  },
});
