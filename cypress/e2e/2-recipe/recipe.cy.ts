/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

// import { faker } from "@faker-js/faker";
import { recipes, user, userTwo } from "../../../data/test";

const RECIPE_ID = recipes[2].id;
const newReview = {
  recipeId: RECIPE_ID,
  rating: 5,
  comment: "this is a comment",
};

const newReviewTwo = {
  recipeId: RECIPE_ID,
  rating: 4,
  comment: "this is a comment to post with different user",
};

describe("reviews", () => {
  beforeEach(() => {
    cy.task("resetEmails");
    cy.login(user.email);
  });

  afterEach(() => {
    cy.logout();
  });

  it("can login and out with different emails", () => {
    cy.login(user.email);

    cy.getSession().then((response) => {
      expect(response.body.user.email).to.equal(user.email);
    });

    cy.logout();

    cy.getSession().then((response) => {
      expect(response.body).to.be.empty;
    });

    cy.login(userTwo.email);

    cy.getSession().then((response) => {
      expect(response.body.user.email).to.equal(userTwo.email);
    });
  });

  it.only("can add, retrieve ahd delete a review", () => {
    cy.request("POST", "/api/review", newReview).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.review).to.be.true;
    });

    cy.request("GET", "/api/review", { recipeId: RECIPE_ID }).then(
      (response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response.body.reviews).should("have.property", RECIPE_ID);
        cy.wrap(response.body.reviews[RECIPE_ID]).should(
          "have.property",
          "count"
        );
        cy.wrap(response.body.reviews[RECIPE_ID]).should(
          "have.property",
          "average"
        );
      }
    );

    cy.request("DELETE", "/api/review", { recipeId: RECIPE_ID }).then(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );

    cy.logout();
  });

  it("correctly calculates review scores", () => {
    cy.login(user.email);

    cy.request("POST", "/api/review", newReview).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.review).to.be.true;
    });

    cy.logout();
    cy.task("resetEmails");

    cy.login(userTwo.email);

    cy.request("POST", "/api/review", newReviewTwo).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.review).to.be.true;
    });
    cy.logout();
    cy.task("resetEmails");
  });
});

export {};
