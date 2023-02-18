/// <reference types="cypress" />

import { recipes, user } from "../../../data/test";

const RECIPE_ID = recipes[1].id;
const RECIPE_NAME = recipes[1].name;

describe("favourites functionality", () => {
  beforeEach(() => {
    cy.task("resetEmails");
    cy.login(user.email);
  });

  afterEach(() => {
    cy.logout();
  });

  it("add, update, remove a favourite", () => {
    cy.request(`POST`, `/api/favourite`, { recipeId: RECIPE_ID }).then(
      (response) => expect(response.status).to.eq(200)
    );

    cy.request(`GET`, `/api/favourite`, {})
      .its("body.favourites")
      .then((list) => Cypress._.map(list, "recipeId"))
      .should("contain", RECIPE_ID);

    cy.request(`POST`, `/api/favourite`, { recipeId: RECIPE_ID }).then(
      (response) => expect(response.status).to.eq(200)
    );

    cy.request(`GET`, `/api/favourite`, {})
      .its("body.favourites")
      .then((list) => Cypress._.map(list, "recipeId"))
      .should("not.contain", RECIPE_ID);
  });

  it("renders favourited recipe correctly", () => {
    cy.request(`POST`, `/api/favourite`, { recipeId: RECIPE_ID }).then(
      (response) => expect(response.status).to.eq(200)
    );

    cy.visit("/dashboard/favourites");

    cy.contains("h2", RECIPE_NAME);
  });
});

export {};
