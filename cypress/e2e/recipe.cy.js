// import seeded object

describe("recipe", () => {
  // before(() => {
  //   cy.exec("npm run seed");
  // });

  it.only("", () => {
    cy.setCookie(
      "next-auth.session-token",
      "1a9c5edd-7e7e-4b9b-945e-d92f9aac5f3a"
    );

    cy.request("GET", "/api/recipe").then((response) => {
      cy.log("response", response);
    });

    // check length is what has been seeded
  });
});
