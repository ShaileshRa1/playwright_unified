Feature: Cart operation tests

  Background:
    Given User navigates to app
    And Sauce Demo Website login page

  Scenario Outline: user is able to add item to the cart
    Given user enters valid username "<username>" and password "<password>"
    And User click on the login button
    When login is successful
    # And Add 1st item to the cart
    # And User navigates to cart page 
    Then Verify 1st item is added to cart and is shown correctly on cart page
    And Close the browser

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: user Removes cart item and verify that the cart is empty
    Given Sauce Demo Website login page
    When user enters valid username "<username>" and password "<password>"
    And User click on the login button
    Then login is successful
    And User removes cart item and verify that the cart is empty
    And Close the browser

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
