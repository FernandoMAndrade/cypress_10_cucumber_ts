import {Given, When, Then, After} from "@badeball/cypress-cucumber-preprocessor"

When("a user visits \"duckduckgo.com\"", () => {
    cy.visit('/')
})

Then("that user must access duckduckgo.com", () => {

})