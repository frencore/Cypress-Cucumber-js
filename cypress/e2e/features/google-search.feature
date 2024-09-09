Feature: Google Search

  Scenario: Searching for Cypress documentation
    Given I visit Google
    When I search for "Cypress documentation"
    Then I should see "Cypress Documentation" in the results