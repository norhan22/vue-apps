// https://docs.cypress.io/api/table-of-contents

describe("HelloWorld Test", () => {
  it("Visits the HelloWorld app root url", () => {
    cy.visit("/home");
    cy.contains("h1", "Welcome to Your Vue.js App");
  });
});
