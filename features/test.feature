Feature: Test Feature 1

@run
  Scenario: Test 1
    Given I open 'chrome' browser
    When I navigate to 'http://www.google.com' page
    Then I wait for 3 seconds
    Then I click on 'home.searchbox' element
    Then I enter 'Sathya Sai' in 'home.searchbox' element
    Then I press 'enter' on 'home.searchbox' element
    Then I wait for 3 seconds
    Then I close the browser

  Scenario: Test 2
    Given I open 'firefox' browser
    When I navigate to 'http://www.google.com' page
    Then I wait for 3 seconds
    Then I click on 'home.searchbox' element
    Then I enter 'Yogananda' in 'home.searchbox' element
    Then I press 'enter' on 'home.searchbox' element
    Then I wait for 3 seconds
    Then I close the browser
@run
  Scenario: Test 3
    Given I open 'chrome' browser
    When I navigate to 'http://www.google.com' page
    Then I wait for 3 seconds
    Then I click on 'home.searchbox' element
    Then I enter 'Yukteswar' in 'home.searchbox' element
    Then I press 'enter' on 'home.searchbox' element
    Then I wait for 3 seconds
    Then I close the browser

  Scenario: Test 4
    Given I open 'firefox' browser
    When I navigate to 'http://www.google.com' page
    Then I wait for 3 seconds
    Then I click on 'home.searchbox' element
    Then I enter 'Krishna' in 'home.searchbox' element
    Then I press 'enter' on 'home.searchbox' element
    Then I wait for 3 seconds
    Then I close the browser

  Scenario: Test 5
    Given I open 'chrome' browser
    When I navigate to 'http://www.google.com' page
    Then I wait for 3 seconds
    Then I click on 'home.searchbox' element
    Then I enter 'Rama' in 'home.searchbox' element
    Then I press 'enter' on 'home.searchbox' element
    Then I wait for 3 seconds
    Then I close the browser

  Scenario: Test 6
    Given I open 'firefox' browser
    When I navigate to 'http://www.google.com' page
    Then I wait for 3 seconds
    Then I click on 'home.searchbox' element
    Then I enter 'Flight risk' in 'home.searchbox' element
    Then I press 'enter' on 'home.searchbox' element
    Then I wait for 3 seconds
    Then I close the browser