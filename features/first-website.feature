Feature: A sample feature test for end to end testing

  Scenario: Verify the header
    Given I go to http://info.cern.ch/
    Then it contains "http://info.cern.ch - home of the first website"

  Scenario: Verify the link to the WWW project
    Given I go to "http://info.cern.ch/"
    When I click "Browse the first website"
    Then the url "http://info.cern.ch/hypertext/WWW/TheProject.html"
    And the title is "World Wide Web"