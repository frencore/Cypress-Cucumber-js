import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I visit Google", () => {
  cy.visit("/");
});

When("I search for {string}", (searchTerm) => {
  cy.get(".iblpc").click();
  cy.screenshot("pantalla de inicio google");
  cy.get(".iblpc").type(`${searchTerm}{enter}`);
  // cy.get('input[name="q"]').type(`${searchTerm}{enter}`);
});

Then("I should see {string} in the results", (expectedText) => {
  cy.wait(2000);
  cy.get(
    '.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb'
  ).should("contain", expectedText);
  cy.screenshot("pantalla de resultado de busqueda");
});
