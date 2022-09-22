Feature: Cucumber
  As a cucumber framework
  I must use gherkin syntax
  To make my test writing more close to the human language

  Scenario: visiting the frontpage
    When I visit duckduckgo.com
    Then I should see a search bar