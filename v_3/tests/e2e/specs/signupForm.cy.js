// https://docs.cypress.io/api/table-of-contents

describe("Test Signup app", () => {
  ////////////////////////
  // testing function
  ///////////////////////
  const testFun = (signupData, error = false, testTitle = null) => {
    const values = Object.values(signupData).filter((e) => Boolean(e.trim()));
    it(`${testTitle ? testTitle + "\n" : ""} values: [${values.join(
      " , "
    )}] validation `, () => {
      cy.visit("/");
      const setValue = (selector, value) => {
        if (value) cy.get(selector).type(value).should("have.value", value);
        else {
          cy.get("button[type='submit']").click();
          cy.get(".error");
        }
      };

      setValue("input[name='username']", signupData.username);
      setValue("input[name='email']", signupData.email);
      setValue("input[name='password']", signupData.password);
      setValue("input[name='confirmPassword']", signupData.confirmPassword);
      cy.get("button").click();

      if (error) cy.get(".error");
      else {
        cy.url().should("include", "/welcome");
        cy.contains(`Welcome ${signupData.username}`);
      }
    });
  };

  /////////////////////
  // Test Cases
  /////////////////////
  const passObj = { confirmPassword: "123456", password: "123456" },
    unMatchedPassObj = { confirmPassword: "12345", password: "123456" };

  // Happy scenario
  testFun(
    { username: "Norhan22", email: "norhan@app.com", ...passObj },
    false,
    "Happy scenario"
  );

  //------ invalid Passwords
  // missed
  testFun(
    { username: "Norhan", email: "norhan@app.com" },
    true,
    "missed password"
  );
  // unMatched
  testFun(
    { username: "Norhan", email: "norhan@app.com", ...unMatchedPassObj },
    true,
    "unMatched Passwords"
  );
  //------- invalid username
  // small
  testFun(
    { username: "Ahmed", email: "norhan@app.com", ...passObj },
    true,
    "invalid short username"
  );
  // empty
  testFun(
    { username: "", email: "norhan@app.com", ...passObj },
    true,
    "invalid empty username"
  );
  // spaces
  testFun(
    { username: " ", email: "norhan@app.com", ...passObj },
    true,
    "invalid spaces username"
  );

  //-------  invalid emails
  testFun(
    { username: "Norhan", email: "", ...passObj },
    true,
    "invalid empty email"
  );
  testFun(
    { username: "Norhan", email: "norhanapp.com", ...passObj },
    true,
    'invalid email missed "@" '
  );
  testFun(
    { username: "Norhan", email: "norhanapp", ...passObj },
    true,
    'invalid email missed "@" && ".com" '
  );
});
