/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "cypress";

const { execSync } = require("child_process");
const ms = require("smtp-tester");

const printExec = (error, stdout, stderr) => {
  console.log("ran printExec");

  if (error) return console.error(`error: ${error.message}`);
  if (stderr) return console.error(`stderr: ${stderr}`);
  return console.log(`stdout:\n${stdout}`);
};

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // adapted from https://github.com/bahmutov/cypress-email-example
      const port = 7777;
      const mailServer = ms.init(port);
      console.log("mail server at port %d", port);

      let lastEmail = {};

      mailServer.bind((addr, id, email) => {
        lastEmail[email.headers.to] = email.body.match(/http[^"]*/g)[0].trim();
        console.log(lastEmail);
      });

      on("before:run", () => execSync("npm run base", printExec) || null);

      on("after:run", () => execSync("npm run teardown", printExec) || null);

      on("task", {
        log(message) {
          console.log(message);
          return null;
        },

        resetEmails(email) {
          // console.log("reset all emails");
          if (email) {
            delete lastEmail[email];
          } else {
            lastEmail = {};
          }
          return null;
        },

        getLastEmail(userEmail) {
          return lastEmail[userEmail] || null;
        },
      });
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
