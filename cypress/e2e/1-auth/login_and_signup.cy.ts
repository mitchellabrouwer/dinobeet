/* eslint-disable consistent-return */
/// <reference types="cypress" />

const user = {
  email: "test@gmail.com",
  name: "John Do",
};

context("authentication", () => {
  beforeEach(() => {
    cy.task("resetEmails");
  });

  xit("manual email login", () => {
    cy.visit("/");
    cy.get("[data-cy=login-button]").click();
    cy.get("#input-email-for-email-provider").type(`${user.email} {enter}`);

    cy.task("getLastEmail", user.email)
      .its("html")
      .then(cy.wrap)
      .invoke("match", /href="(?<link>[^"]*)"/) // href with named groups
      .its("groups.link")
      .then((link) => {
        cy.visit(link);
        cy.contains("[data-cy=dashboard-page-heading]", /dashboard/i);
      });
  });

  xit("can pay with stripe and register", async () => {
    // this test is very flakey, no easy way to test available

    Cypress.on("uncaught:exception", (err) => {
      // Allow stripe error: "paymentRequest Element didn't mount normally"
      if (err.message.includes("paymentRequest")) return false;
    });

    cy.request("POST", "http://localhost:3000/api/stripe/session")
      .its("body")
      .its("url")
      .then((url) => {
        cy.visit(url);

        cy.url().should(
          "contains",
          "https://checkout.stripe.com/c/pay/cs_test"
        );

        cy.get("#email").type(user.email);
        cy.get("#cardNumber").type("4242424242424242");
        cy.get("#cardCvc").type("123");
        cy.get("#cardExpiry").type(
          `12${(new Date().getFullYear() + 10).toString().substr(-2)}`
        );
        cy.get("#billingName").type(user.name);

        cy.get(".SubmitButton").should(($div) => {
          expect($div.text()).to.include("Pay");
        });
        cy.get(".SubmitButton").click();
        cy.get(".SubmitButton").should(($div) => {
          expect($div.text()).to.include("Processing");
        });

        cy.get("[data-cy=successfully-joined-heading]").contains(/success/i);
      });
  });

  xit("can't pay twice", () => {});
});

export {};
