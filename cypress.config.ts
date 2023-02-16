/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "cypress";

const { execSync } = require("child_process");
const ms = require("smtp-tester");

const printExec = (error, stdout, stderr) => {
  if (error) return console.error(`error: ${error.message}`);
  if (stderr) return console.error(`stderr: ${stderr}`);
  return console.log(`stdout:\n${stdout}`);
};

let userNumber = 0; // used to match email to user;

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // starts the SMTP server at localhost:7777
      // adapted from https://github.com/bahmutov/cypress-email-example
      const port = 7777;
      const mailServer = ms.init(port);
      console.log("mail server at port %d", port);

      // [receiver email]: email text
      let lastEmail = {};

      // process all emails
      mailServer.bind((addr, id, email) => {
        // console.log("--- email to %s ---", email.headers.to);
        // console.log(email.body);

        // console.log(email.body.matchAll(/href="(?<link>[^"]*)"/).groups.link);
        console.log(lastEmail);

        // console.log(email.body);
        // console.log("--- end ---");
        // store the email by the receiver email
        lastEmail[email.headers.to] = {
          body: email.body,
          html: email.html,
        };
      });

      on("before:run", () => {
        execSync("npm run base", printExec);
        userNumber += 1;
        return null;
      });

      on("after:run", () => execSync("npm run teardown", printExec) || null);

      on("task", {
        getUserNumber() {
          console.log(userNumber);

          userNumber += 1;
          return userNumber || null;
        },

        log(message) {
          console.log(message);
          return null;
        },

        resetEmails(email) {
          console.log("reset all emails");
          if (email) {
            delete lastEmail[email];
          } else {
            lastEmail = {};
          }
          return null;
        },

        getLastEmail(userEmail) {
          // console.log(lastEmail);
          // console.log(lastEmail[userEmail]);
          // cy.task cannot return undefined thus we return null as a fallback
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
