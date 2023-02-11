// add reviews
// check that it is calculating correctly
/// <reference types="cypress" />
export {};

const sampleReview = {
  recipeId: "clds6195h0002a53058l0l52z",
  rating: 5,
  comment: "hello teu",
};

describe("reviews", () => {
  // before(() => {
  //   cy.setCookie(
  //     "next-auth.session-token",
  //     "1a9c5edd-7e7e-4b9b-945e-d92f9aac5f3a"
  //   );
  // });

  it.only("can add a review and retrieve it", () => {
    cy.login("test@test.com");
    // cy.review(sampleReview);
    // cy.request("POST", "/api/review", sampleReview).then((response) => {
    //   expect(response.status).to.eq(200);
    //   assert.isArray(response.body, "returns an Array");
    // });

    // cy.request("GET", "/api/review").then((response) => {
    //   expect(response.status).to.eq(200);
    //   assert.isArray(response.body, "Reviews Response is an array");
    // });
  });
});
