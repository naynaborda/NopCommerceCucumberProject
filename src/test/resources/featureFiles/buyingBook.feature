Feature: Buying a Book Functionality

  Scenario: to verify user should  able to see order confirmation message after buying a book
    Given User is on home page
    When User click on books
    And User click on Fahrenheit 451 by ray bradbury
    And User change quantity of the product 4
    And User add Fahrenheit 451 by bradbury book in wish list
    Then User should see The product has been added to your wishlist message from top green line
    And User add product in to cart
    And User click on cart from top green message
    And User click on term and condition
    And User click on checkout
    And User click on checkout as guest
    And User filled personal details for checkout
    And User click on continue button from one page check out page
    And User click on continue button from shipping page
    And User click on credit card
    And User click on Continue From Opc-Payment-Method Page
    And User enter card details
    And User click on Continue button From Opc-Payment_Info Page
    And User click on Confirm button From Opc-Confirm_Order Page
    Then User should able to see order confirmation message



  Scenario Outline: to verify user should  able to see order confirmation message after buying a book
      Given User is on home page
      When User click on book button
      And User click on Fahrenheit 451 by ray bradbury
      And User change quantity of the book 4
      And User add Fahrenheit 451 by bradbury book in wish list
      Then User should see The product has been added to your wishlist message from top green line
      And User click on add to cart button
      And User click on cart from green line on top
      And User click on term and condition
      And User click on checkout
      And User click on checkout as guest
      And User enter<FirstName><LastName><Email><Country><City><Address1><PostCode><PhoneNumber>
      And User click on continue button from  one page check out page
      And User click on continue button from shipping page
      And User click on credit card
      And User click on Continue From Opc-Payment-Method Page
      And User enter card details<Card type><CardHolder Name><Card Number><Expiry Month><Expiry Year><Card Code>
      And User click on Continue button From Opc-Payment_Info Page
      And User click on Confirm button From Opc-Confirm_Order Page
      Then User should able to see order confirmation message



      Examples1:
      |FirstName|LastName|Email             |Country       |City  |Address1     |PostCode|PhoneNumber|
      |Raj      |Kapoor  |rajkappor@test.com|United Kingdom|London|606,ShivNagar|fg5 9lo |08965434875|

      Examples2:
      |Card Type  |CarHolder Name|Card Number    |Expiry Month|Expiry Year|Card Code|
      |Master card|Mr Raj        |378282246310005|02          |2021       |324      |
