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
      logout(): Chainable<void>;
      getSession(): Chainable<Cypress.Response<any>>;
    }
  }
}

function loginUser(email) {
  cy.request("/api/auth/csrf")
    .its("body")
    .then((body) => {
      cy.request("POST", "/api/auth/signin/email", {
        csrfToken: body.csrfToken,
        email,
      });
    });

  cy.task("getLastEmail", email).then((link: string) => {
    cy.request(link);
    cy.getCookie("next-auth.csrf-token");
  });
}

function getSession() {
  return cy.request("/api/auth/session");
}

function logoutUser() {
  cy.request("/api/auth/csrf")
    .its("body")
    .then((body) => {
      cy.setCookie(
        "next-auth.callback-url",
        "http://localhost:3000/api/auth/session"
      );

      cy.request("POST", "/api/auth/signout", {
        csrfToken: body.csrfToken,
        callbackUrl: "http://localhost:3000/dashboard",
        json: true,
      }).then((response) => expect(response.status).to.eq(200));
    });
}

function createReview(options) {
  cy.request("POST", "/api/review", options).then((response) => {
    expect(response.status).to.eq(200);
    assert.isArray(response.body, "returns an Array");
  });
}

Cypress.Commands.add("login", loginUser);
Cypress.Commands.add("logout", logoutUser);
Cypress.Commands.add("review", createReview);
Cypress.Commands.add("getSession", getSession);
