// add reviews
// check that it is calculating correctly

describe("reviews", () => {
  it.only("", () => {
    cy.setCookie(
      "next-auth.session-token",
      "1a9c5edd-7e7e-4b9b-945e-d92f9aac5f3a"
    );

    // cy.request("/api/review").as("reviewRequest");
    // cy.get("@reviewRequest");
    cy.request("POST", "/api/review", {
      recipeId: "clds6195h0002a53058l0l52z",
      rating: 5,
      comment: "hello teu",
    });
    // .then((reviews) => {

    //   expect(todos.status).to.eq(200);
    //   assert.isArray(todos.body, "Todos Response is an array");
    // });
  });
});
