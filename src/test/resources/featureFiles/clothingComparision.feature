Feature: T-shirt comparision Functionality
  Scenario1: to verify user should able to see confirmation message  no product for comparision in compare list with screenshot.
    Given User is on the home page
    When User click on Apparel
    And User click on clothing  from left side menu
    And User select sort by low to high price
    And User select  display 3 per page
    And User click on list
    And User take a screenshot
    And User add custom t-shirt to compare list
    And User add oversized women t-shirt to compare list
    And User take again screenshot with green line on top with message"The product has been added to your product comparision"
    And  User click on product comparision from green line link
    And User verify product name
    And User click on clear compare list
    Then User Should able to see confirmation message "no product for comparision

    Scenario2: to verify user should able to see confirmation message  no product for comparision in compare list.
      Given User is on the home page
      When User click on Apparel
      And User click on clothing  from left side menu
      And User select sort by high to low
      And User select  display 9 per page
      And User click on list
      And User add custom t-shirt to compare list
      And User add oversized women t-shirt to compare list
      And  User click on product comparision from green line link
      And User verify product name
      And User click on clear compare list
      Then User Should able to see confirmation message "no product for comparision

