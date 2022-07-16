// https://docs.cypress.io/api/table-of-contents

describe("Test users Management create form", () => {
  ////////////////////////
  // testing function
  ///////////////////////
  const testFun = (userData, error = false, testTitle = null) => {
    const values = Object.values(userData).filter((e) => Boolean(e.trim()));
    it(`${testTitle ? testTitle + "\n" : ""} values: [${values.join(
      " , "
    )}] validation `, () => {
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

      if (error) cy.get(".error");
      else {
        cy.url().should("include", "/users/");
        // cy.contains(`Welcome ${userData.username}`);
      }
    });
  };

  /////////////////////
  // Test Cases
  /////////////////////

  // Happy scenario
  // testFun(
  //   { firstName: "Norhan", email: "norhan@app.com", lastName: "Mohammed" },
  //   false,
  //   "Happy scenario"
  // );

  //------- invalid username
  // small
  // testFun(
  //   { username: "Ahmed", email: "norhan@app.com", ...passObj },
  //   true,
  //   "invalid short username"
  // );
  // // empty
  // testFun(
  //   { username: "", email: "norhan@app.com", ...passObj },
  //   true,
  //   "invalid empty username"
  // );
  // // spaces
  // testFun(
  //   { username: " ", email: "norhan@app.com", ...passObj },
  //   true,
  //   "invalid spaces username"
  // );
  //
  // //-------  invalid emails
  // testFun(
  //   { username: "Norhan", email: "", ...passObj },
  //   true,
  //   "invalid empty email"
  // );
  // testFun(
  //   { username: "Norhan", email: "norhanapp.com", ...passObj },
  //   true,
  //   'invalid email missed "@" '
  // );
  // testFun(
  //   { username: "Norhan", email: "norhanapp", ...passObj },
  //   true,
  //   'invalid email missed "@" && ".com" '
  // );
});
