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

  it.only("occasion not valid throughs a bad request", () => {
    cy.request({
      method: "GET",
      url: "/api/random",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("no such occasion");
    });
  });

  it("get a random recipe passing occasion", () => {
    const occasion = "breakfast";
    cy.request(`/api/random?occasion=${occasion}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

export {};
