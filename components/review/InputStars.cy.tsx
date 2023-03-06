import { InputStars } from "./InputStars";

describe("Input", () => {
  it("correctly shows 3 stars", () => {
    const setRating = cy.stub();

    cy.mount(<InputStars setRating={setRating} initialStars={3} />);

    cy.getBySel("star-fill-input").should("have.length", 3);
    cy.getBySel("star-empty-input").should("have.length", 2);
  });
  it("correctly shows 0 stars", () => {
    const setRating = cy.stub();

    cy.mount(<InputStars setRating={setRating} initialStars={0} />);

    cy.getBySel("star-empty-input").should("have.length", 5);
  });
  it("correctly shows 5 stars", () => {
    const setRating = cy.stub();

    cy.mount(<InputStars setRating={setRating} initialStars={5} />);

    cy.getBySel("star-fill-input").should("have.length", 5);
  });
});
