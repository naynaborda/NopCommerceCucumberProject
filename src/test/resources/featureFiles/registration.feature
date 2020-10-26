Feature: registration functionality

  Scenario: to verify user is able to register successfully and login again with registered email address
    Given  User is on the home page
    When User click on the register button
    And User enter all the Mandatory/Required field on the registration page
    And User click on register button on the registration page
    Then User should able to register successfully
    And User Click on logout button on the register result page
    And User Click on login button on the home page
    And User enter Registered email address and password
    And User click on login button
    Then User should able to log in successfully


    Scenario Outline: to verify user is able to register successfully and login again with registered email address
      Given  User is on the home page
      When User click on the register button
      And User enter "<FirstName>","<LastName>","<email>","<Password>","<Confirm Password>"
      And User click on register button on the registration page
      Then User should able to register successfully
      And User Click on logout button on the register result page
      And User Click on login button on the home page
      And User enter Registered email address and password
      And User click on login button
      Then User should able to log in successfully

      Examples:
      |FirstName|LastName|email            |Password|Confirm Password|
      |Ram      |Sita    |test              |sitaram |sitaram        |
      |Ram1     |Sita1   |test1             |sitaram |sitaram        |





