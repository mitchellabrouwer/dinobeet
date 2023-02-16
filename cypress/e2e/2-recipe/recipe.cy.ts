/* eslint-disable import/no-extraneous-dependencies */

import { recipes, user } from "../../../data/test";

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
    // cy.task("log", );
    cy.task("getUserNumber").then((userNumber) => {
      cy.login(userNumber + user.email);
    });
  });

  it("get a recipe", () => {});

  it("can add a review and retrieve it", () => {
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
  });

  // it.skip("correctly calculates review scores", () => {
  //   cy.request("POST", "/api/review", newReview).then((response) => {
  //     expect(response.status).to.eq(200);
  //     expect(response.body.review).to.be.true;
  //   });

  //   cy.logout();
  //   cy.login(userTwo.email);

  //   cy.getCookie("next-auth.csrf-token").should("exist");

  //   cy.request("POST", "/api/review", newReviewTwo).then((response) => {
  //     expect(response.status).to.eq(200);
  //     expect(response.body.review).to.be.true;
  //   });
  // });
});

export {};
