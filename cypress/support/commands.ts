/* eslint-disable no-unused-vars */
/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
export {};

declare global {
  namespace Cypress {
    type ReviewInput = {
      recipeId: string;
      rating: number;
      comment: string;
    };

    interface Chainable {
      review(options: ReviewInput): Chainable<void>;
      login(email: string): Chainable<void>;
    }
  }
}

function loginUser(email) {
  // cy.visit("/");
  // cy.get("[data-cy=login-button]").click();
  // cy.get("#input-email-for-email-provider").type(`${email} {enter}`);

  // cy.request("GET", myUrl)
  //   .its("body")
  //   .then((res) => cy.request("GET", res).its("body"))
  //   .then((subRes) => cy.request("GET", subRes).its("body"))
  //   .then((subSubRes) => {
  //     expect(subSubRes, myMessage).to.eq(myEvaluation);
  //   });

  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.request("/api/auth/csrf")
    .its("body")
    .then((body) => {
      cy.setCookie("next-auth.csrf-token", body.csrfToken);
      cy.setCookie("next-auth.callback-url", "http://localhost:3000");
      cy.request("POST", "/api/auth/signin/email", {
        email: "test@test.com",
      });
    })
    .task("getLastEmail", "test@test.com")
    .its("html")
    .then(cy.wrap)
    .invoke("match", /href="(?<link>[^"]*)"/) // href with named groups
    .its("groups.link")
    .then((link) => {
      cy.log(link);
      // cy.getCookie("next-auth.csrf-token");
      // cy.setCookie("next-auth.callback-url", "http://localhost:3000/dashboard");
      // cy.getCookie("next-auth.session-token");
      // cy.visit(link);

      // cy.request("/api/auth/csrf").then((response) => {
      //   cy.setCookie("next-auth.csrf-token", response.body.csrfToken);
      // });
      // cy.contains("[data-cy=dashboard-page-heading]", /dashboard/i);
    });

  // .then((response) => {
  //   cy.setCookie("next-auth.csrf-token", response.body.csrfToken);
  //   cy.setCookie("next-auth.callback-url", "http://localhost:3000");
  //   cy.request("POST", "/api/auth/signin/email", {
  //     email: "test@test.com",
  //   });
  // });

  // cy.task("getLastEmail", email)
  //   .its("html")
  //   .then(cy.wrap)
  //   .invoke("match", /href="(?<link>[^"]*)"/) // href with named groups
  //   .its("groups.link")
  //   .then((link) => {
  //     cy.getCookie("next-auth.csrf-token");
  //     cy.setCookie("next-auth.callback-url", "http://localhost:3000/dashboard");
  //     cy.getCookie("next-auth.session-token");
  //     // cy.request(link.slice(21));
  //     cy.visit(link);
  //     // cy.request("/api/auth/csrf").then((response) => {
  //     //   cy.setCookie("next-auth.csrf-token", response.body.csrfToken);
  //     // });
  //     // cy.contains("[data-cy=dashboard-page-heading]", /dashboard/i);
  //   });
}

function createReview(options) {
  cy.request("POST", "/api/review", options).then((response) => {
    expect(response.status).to.eq(200);
    assert.isArray(response.body, "returns an Array");
  });
}

Cypress.Commands.add("login", loginUser);
Cypress.Commands.add("review", createReview);

//   cy.request("/api/auth/csrf").then((response) => {
//     cy.setCookie("next-auth.csrf-token", response.body.csrfToken);
//     cy.setCookie("next-auth.callback-url", "http://localhost:3000");
//     cy.request("POST", "/api/auth/signin/email", {
//       email: "test@test.com",
//     });
//   });

//   cy.task("getLastEmail", email)
//     .its("html")
//     .then(cy.wrap)
//     .invoke("match", /href="(?<link>[^"]*)"/) // href with named groups
//     .its("groups.link")
//     .then((link) => {
//       cy.getCookie("next-auth.csrf-token");
//       cy.setCookie("next-auth.callback-url", "http://localhost:3000/dashboard");
//       cy.getCookie("next-auth.session-token");
//       // cy.request(link.slice(21));
//       cy.visit(link);
//       // cy.request("/api/auth/csrf").then((response) => {
//       //   cy.setCookie("next-auth.csrf-token", response.body.csrfToken);
//       // });
//       // cy.contains("[data-cy=dashboard-page-heading]", /dashboard/i);
//     });
// }
