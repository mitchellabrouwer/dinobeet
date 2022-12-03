/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// mail-server.js
// @ts-ignore
const ms = require("smtp-tester");

const port = 7777;
const mailServer = ms.init(port);
console.log("mail server at port %d", port);

// process all emails
mailServer.bind((addr, id, email) => {
  console.log("--- email ---");
  console.log(addr, id, email);
});
