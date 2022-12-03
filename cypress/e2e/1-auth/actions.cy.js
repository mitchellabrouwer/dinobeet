/// <reference types="cypress" />

const email = "test@gmail.com";

context("authentication", () => {
  beforeEach(() => {
    cy.task("resetEmails");
  });

  it("can login with email", () => {
    cy.visit("/");
    cy.get("[data-cy=login-button]").click();
    cy.get("#input-email-for-email-provider").type(`${email} {enter}`);

    cy.task("getLastEmail", email)
      .its("html")
      .then(cy.wrap)
      .invoke("match", /href="(?<link>[^"]*)"/) // href with named groups
      .its("groups.link")
      .then((link) => {
        cy.visit(link);
        cy.contains("[data-cy=dashboard-page-heading]", /dashboard/i);
      });
  });

  it.only("can pay with stripe and register", () => {
    cy.visit("/");
    cy.get("[data-cy=sign-me-up-button]").click();
    cy.get("#email").type("SatoshiNakamoto@email.com");
    cy.get("#cardNumber").type("4242424242424242");
    cy.get("#cardCvc").type("123");
    cy.get("#cardExpiry").type(
      `12${(new Date().getFullYear() + 10).toString().substr(-2)}`
    );
    cy.get("#billingName").type("Satoshi Nakamoto");
    cy.get("#billingPostalCode").type("94043");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000);
    cy.get(".SubmitButton").should(($div) => {
      expect($div.text()).to.include("Pay");
    });
    cy.get(".SubmitButton").click();
    cy.get(".SubmitButton").should(($div) => {
      expect($div.text()).to.include("Processing");
    });
  });
});
