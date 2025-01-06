Feature: Login Functionality

  Background:
    Given User navigates to app

  Scenario: Login Page
    Given Sauce Demo Website login page
    # When I enter valid username and password
    # And I click on the login button
    # Then I should be redirected to the home page
    And Close the browser

  Scenario Outline: user is able to login with valid users
    Given Sauce Demo Website login page
    When user enters valid username "<username>" and password "<password>"
    And User click on the login button
    Then login is successful
    And user logs out
    And Close the browser

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: user is not able to login with Invalid users
    Given Sauce Demo Website login page
    When user enters valid username "<username>" and password "<password>"
    And User click on the login button
    Then Error message "<message>" is shown
    And Close the browser

    Examples:
      | username        | password     | message                                             |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |

