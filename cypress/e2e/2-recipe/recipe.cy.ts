/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import { user, userTwo } from "../../../data/test/base";

// import { faker } from "@faker-js/faker";

const RECIPE_NAME = "Banana Pillows";
const RECIPE_TWO_NAME = "Satay";

const newReview = {
  recipeId: RECIPE_NAME,
  rating: 5,
  comment: "this is a comment",
};

const newReviewTwo = {
  recipeId: "Meatballs",
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

  it("can add, retrieve ahd delete a review", () => {
    cy.request("POST", "/api/review", newReview).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.review).to.be.true;
    });

    // cy.request("GET", "/api/review", { recipeId: RECIPE_NAME }).then(
    //   (response) => {
    //     expect(response.status).to.eq(200);
    //     cy.wrap(response.body.reviews).should("have.property", RECIPE_NAME);
    //     cy.wrap(response.body.reviews[RECIPE_NAME]).should(
    //       "have.property",
    //       "count"
    //     );
    //     cy.wrap(response.body.reviews[RECIPE_NAME]).should(
    //       "have.property",
    //       "average"
    //     );
    //   }
    // );

    cy.request("DELETE", "/api/review", { recipeId: RECIPE_NAME }).then(
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

  it("get a single recipe", () => {
    cy.request(`/api/recipe?id=${RECIPE_NAME}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.be.a("string");
      expect(response.body.cook).to.be.a("number");
      expect(response.body.createdAt).to.be.a("string");
    });
  });

  it.only("handle a recipe that links to another recipe", () => {
    cy.request(`/api/recipe?id=${RECIPE_TWO_NAME}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("search for and display recipe", () => {
    cy.visit(`/dashboard/browse`);
    // go to browse
    // select recipe

    cy.get("h2").should("have.text", RECIPE_NAME);
  });
});

export {};
