// https://docs.cypress.io/api/table-of-contents

describe("Test users Management create form", () => {
  ////////////////////////
  // testing function
  ///////////////////////
  const testFun = (userData) => {
    it(` test CRUD System `, () => {
      cy.visit("/users/");
      cy.get("button#goToCreate").click();
      cy.url().should("include", "/users/create");

      const setValue = (selector, value) => {
        if (value) cy.get(selector).type(value).should("have.value", value);
        else {
          cy.get("button").click();
          cy.get(".error");
        }
      };

      setValue("input[name='firstName']", userData.firstName);
      setValue("input[name='lastName']", userData.lastName);
      setValue("input[name='email']", userData.email);

      cy.get("button").click();
      cy.visit("/users");
      cy.intercept("https://dummyapi.io/data/v1/user").as("getData");
      cy.wait(500);
      cy.wait("@getData").then(() => {});
    });
  };
  testFun({
    firstName: "Norn 1234",
    lastName: "Mohammed22",
    email: "we@w.com",
  });
  /////////////////////
  // Test Cases
  /////////////////////

  // Happy scenario
  // testFun(
  //   { firstName: "Norhan", email: "norhan@app.com", lastName: "Mohammed" },
  //   false,
  //   "Happy scenario"
  // );
});
