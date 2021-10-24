// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add("login", (user) => {
  cy.fixture("existingUser.json").then((fixture) => {
    console.log(fixture);
    cy.get("#Login_EmailAddress").type(fixture[user].email);
    cy.get("#Login_Password").type(fixture[user].password);
    cy.get("#LoginButton").click();
  });
});

Cypress.Commands.add("fillDeliveryData", (deliveryData) => {
  cy.fixture("deliveryData.json").then((fixture) => {
    console.log(fixture);
    cy.get("#NewAddressSelection_Address_FirstName").type(
      fixture[deliveryData].firstName
    );
    cy.get("#NewAddressSelection_Address_Surname").type(
      fixture[deliveryData].lastName
    );
    cy.get(".manuallyAddAddress").first().click();
    cy.get("#NewAddressSelection_Address_Line1").type(
      fixture[deliveryData].line1
    );
    cy.get("#NewAddressSelection_Address_Town").type(
      fixture[deliveryData].town
    );
    cy.get("#NewAddressSelection_Address_Postcode").type(
      fixture[deliveryData].postcode
    );
    cy.get("#TelephoneNumber").type(fixture[deliveryData].telephoneNumber);
  });
});
