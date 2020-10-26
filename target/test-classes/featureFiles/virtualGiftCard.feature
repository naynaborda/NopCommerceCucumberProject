Feature: adding a virtual gift card in the cart and send an email a friend functionality

  Scenario: To Verify User should able to add virtual gift card in the cart send an email a friend and see confirmation message
    Given  User is on the home page
    When User click on the register button
    And User enter all the Mandatory/Required field on the registration page for virtual gift card
    And User click on register button on the registration page
    And User Click on logout button on the register result page
    And User Click on login button on the home page
    And User enter login details for virtual gift card
    And User click on login button
    And User click on Gift Cards
    And User click on add to cart on virtual gift card
    And User enter all the personal details for gift card
    And User click on Email a friend
#    And User enter Friend's detail to send an email
#    And User click on send email button
#    Then User should able to send an email a friend
#    And User should able to see confirmation message Your message has been sent.
##
#
#    Scenario Outline: To Verify User should able to add virtual gift card in the cart and send an email a friend and see confirmation message
#      Given  User is on the home page
#      When User click on the register button
#      And  User enter <FirstName><LastName><email><Password><Confirm Password>
#      And User click on register button on the registration page
#      And User Click on logout button on the register result page
#      And User Click on login button on the home page
#      And User enter Registered email address and password
#      And User click on login button
#      And User click on Gift Cards
#      And User click on add to cart on virtual gift card
#      And User enter <Recipient's Name><Recipient's Email><User Name><User Email>
#      And User click on Email a friend
#      And User enter<Friend's email><User email address><Personal message>
#      And User click on send email button
#      Then User should able to send an email a friend
#      And User should able to see confirmation message Your message has been sent.
#
#      Examples:
#        |FirstName|LastName|email            |Password|Confirm Password|Recipient's Name|Recipient's Email|User Name    |User Email      |Friend's email|User email address|Personal message|
#        |Ram      |Sita    |ramsita@test.com |sitaram |sitaram         |Sonal            |sonal@test.com   |Ram Sita    |ramsita@test.com|sonal@test.com|ramsita@test.com  |Birthday Gift   |
#


