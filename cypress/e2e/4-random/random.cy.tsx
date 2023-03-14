/// <reference types="cypress" />

import { user } from "../../../data/test";

describe("random recipe functionality", () => {
  beforeEach(() => {
    cy.task("resetEmails");
    cy.login(user.email);
  });

  afterEach(() => {
    cy.logout();
  });

  it("get a random recipe without passing an occasion", () => {
    cy.request(`/api/random`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it.only("get a random recipe passing occasion", () => {
    const occasion = "breakfast";
    cy.request(`/api/random?occasion=${occasion}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

export {};
