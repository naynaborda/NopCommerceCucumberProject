$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buyingBook.feature");
formatter.feature({
  "line": 1,
  "name": "Buying a Book Functionality",
  "description": "",
  "id": "buying-a-book-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13276666500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "to verify user should  able to see order confirmation message after buying a book",
  "description": "",
  "id": "buying-a-book-functionality;to-verify-user-should--able-to-see-order-confirmation-message-after-buying-a-book",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on books",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on Fahrenheit 451 by ray bradbury",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User change quantity of the product 4",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User add Fahrenheit 451 by bradbury book in wish list",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should see The product has been added to your wishlist message from top green line",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User add product in to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on cart from top green message",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on term and condition",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on checkout as guest",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User filled personal details for checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on continue button from one page check out page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on continue button from shipping page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on credit card",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Continue From Opc-Payment-Method Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enter card details",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Continue button From Opc-Payment_Info Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Confirm button From Opc-Confirm_Order Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should able to see order confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 299002500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_books()"
});
formatter.result({
  "duration": 1550523700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "451",
      "offset": 25
    }
  ],
  "location": "BuyingBookSteps.user_click_on_Fahrenheit_by_ray_bradbury(int)"
});
formatter.result({
  "duration": 2493769400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 36
    }
  ],
  "location": "BuyingBookSteps.user_change_quantity_of_the_product(int)"
});
formatter.result({
  "duration": 126418900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "451",
      "offset": 20
    }
  ],
  "location": "BuyingBookSteps.user_add_Fahrenheit_by_bradbury_book_in_wish_list(int)"
});
formatter.result({
  "duration": 275212600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_should_see_The_product_has_been_added_to_your_wishlist_message_from_top_green_line()"
});
formatter.result({
  "duration": 85103800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_add_product_in_to_cart()"
});
formatter.result({
  "duration": 259354700,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_cart_from_top_green_message()"
});
formatter.result({
  "duration": 2300917400,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_term_and_condition()"
});
formatter.result({
  "duration": 291174300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_checkout()"
});
formatter.result({
  "duration": 886931600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_checkout_as_guest()"
});
formatter.result({
  "duration": 1687829400,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_filled_personal_details_for_checkout()"
});
formatter.result({
  "duration": 892606500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_continue_button_from_one_page_check_out_page()"
});
formatter.result({
  "duration": 282165500,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_continue_button_from_shipping_page()"
});
formatter.result({
  "duration": 978850600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_credit_card()"
});
formatter.result({
  "duration": 321863600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Continue_From_Opc_Payment_Method_Page()"
});
formatter.result({
  "duration": 262080600,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_enter_card_details()"
});
formatter.result({
  "duration": 1047095800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Continue_button_From_Opc_Payment_Info_Page()"
});
formatter.result({
  "duration": 253192800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Confirm_button_From_Opc_Confirm_Order_Page()"
});
formatter.result({
  "duration": 335516300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_should_able_to_see_order_confirmation_message()"
});
formatter.result({
  "duration": 868665300,
  "status": "passed"
});
formatter.after({
  "duration": 38300,
  "status": "passed"
});
formatter.uri("clothingComparision.feature");
formatter.feature({
  "line": 1,
  "name": "T-shirt comparison Functionality",
  "description": "",
  "id": "t-shirt-comparison-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14161331600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "to verify user should able to see confirmation message  no product for comparison in compare list with screenshot.",
  "description": "",
  "id": "t-shirt-comparison-functionality;to-verify-user-should-able-to-see-confirmation-message--no-product-for-comparison-in-compare-list-with-screenshot.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Apparel",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on clothing  from left side menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User select sort by low to high price",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User select  display 3 per page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User take a screenshot",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User add custom t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User add over-sized women t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User take again screenshot with green line on top with message, The product has been added to your product comparison",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on product comparison from green line link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User verify custom t-shirt name in compare list",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on clear compare list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Should able to see confirmation message,no product for comparison",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 62400,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_Apparel()"
});
formatter.result({
  "duration": 1773046500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clothing_from_left_side_menu()"
});
formatter.result({
  "duration": 1574960500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_select_sort_by_low_to_high_price()"
});
formatter.result({
  "duration": 873577500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 21
    }
  ],
  "location": "ClothingComparisonSteps.user_select_display_per_page(int)"
});
formatter.result({
  "duration": 671313200,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_list()"
});
formatter.result({
  "duration": 780493300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_take_a_screenshot()"
});
formatter.result({
  "duration": 635784500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_custom_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 259561300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_over_sized_women_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 268567500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_take_again_screenshot_with_green_line_on_top_with_message_The_product_has_been_added_to_your_product_comparison()"
});
formatter.result({
  "duration": 346488400,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_product_comparison_from_green_line_link()"
});
formatter.result({
  "duration": 523378600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_verify_custom_t_shirt_name_in_compare_list()"
});
formatter.result({
  "duration": 38482300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clear_compare_list()"
});
formatter.result({
  "duration": 40600900,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_Should_able_to_see_confirmation_message_no_product_for_comparison()"
});
formatter.result({
  "duration": 720527600,
  "status": "passed"
});
formatter.after({
  "duration": 16300,
  "status": "passed"
});
formatter.before({
  "duration": 12005260800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "to verify user should able to see confirmation message  no product for comparison in compare list.",
  "description": "",
  "id": "t-shirt-comparison-functionality;to-verify-user-should-able-to-see-confirmation-message--no-product-for-comparison-in-compare-list.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Apparel",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User click on clothing  from left side menu",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User select sort by high to low",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select  display 9 item per page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on list",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User add custom t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User add over-sized women t-shirt to compare list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on product comparison from green line link",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User verify over-sized women t-shirt name in compare list",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User click on clear compare list",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Should able to see confirmation message,no product for comparison",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 204500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_Apparel()"
});
formatter.result({
  "duration": 1049183500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clothing_from_left_side_menu()"
});
formatter.result({
  "duration": 1615850600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_select_sort_by_high_to_low()"
});
formatter.result({
  "duration": 1491231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 21
    }
  ],
  "location": "ClothingComparisonSteps.user_select_display_item_per_page(int)"
});
formatter.result({
  "duration": 786291600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_list()"
});
formatter.result({
  "duration": 1677656200,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_custom_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 370429100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_over_sized_women_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 254038400,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_product_comparison_from_green_line_link()"
});
formatter.result({
  "duration": 1643070100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_verify_over_sized_women_t_shirt_name_in_compare_list()"
});
formatter.result({
  "duration": 283863600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clear_compare_list()"
});
formatter.result({
  "duration": 71620300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_Should_able_to_see_confirmation_message_no_product_for_comparison()"
});
formatter.result({
  "duration": 613025700,
  "status": "passed"
});
formatter.after({
  "duration": 20700,
  "status": "passed"
});
formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "registration functionality",
  "description": "",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11395999800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "to verify user is able to register successfully and login again with registered email address",
  "description": "",
  "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter all the Mandatory/Required field on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should able to register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter Registered email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 56900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1467846300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_all_the_Mandatory_Required_field_on_the_registration_page()"
});
formatter.result({
  "duration": 1613466700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 2134249000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 40459100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 1522202200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 676300100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_Registered_email_address_and_password()"
});
formatter.result({
  "duration": 177515700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 929796100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 70662200,
  "status": "passed"
});
formatter.after({
  "duration": 17100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "to verify user is able to register successfully and login again with registered email address",
  "description": "",
  "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cemail\u003e\",\"\u003cPassword\u003e\",\"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should able to register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter Registered email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should able to log in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "email",
        "Password",
        "Confirm Password"
      ],
      "line": 29,
      "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address;;1"
    },
    {
      "cells": [
        "Ram",
        "Sita",
        "test",
        "sitaram",
        "sitaram"
      ],
      "line": 30,
      "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address;;2"
    },
    {
      "cells": [
        "Ram1",
        "Sita1",
        "test1",
        "sitaram",
        "sitaram"
      ],
      "line": 31,
      "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16818124300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "to verify user is able to register successfully and login again with registered email address",
  "description": "",
  "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"Ram\",\"Sita\",\"test\",\"sitaram\",\"sitaram\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should able to register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter Registered email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 167700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1485803400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 12
    },
    {
      "val": "Sita",
      "offset": 18
    },
    {
      "val": "test",
      "offset": 25
    },
    {
      "val": "sitaram",
      "offset": 32
    },
    {
      "val": "sitaram",
      "offset": 42
    }
  ],
  "location": "RegistrationSteps.userEnter(String,String,String,String,String)"
});
formatter.result({
  "duration": 1626667600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 2653334700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 44922800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 2313885900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 1157549400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_Registered_email_address_and_password()"
});
formatter.result({
  "duration": 163998900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 979214700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 116797200,
  "status": "passed"
});
formatter.after({
  "duration": 18400,
  "status": "passed"
});
formatter.before({
  "duration": 11287937500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "to verify user is able to register successfully and login again with registered email address",
  "description": "",
  "id": "registration-functionality;to-verify-user-is-able-to-register-successfully-and-login-again-with-registered-email-address;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enter \"Ram1\",\"Sita1\",\"test1\",\"sitaram\",\"sitaram\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should able to register successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enter Registered email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should able to log in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1587243400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram1",
      "offset": 12
    },
    {
      "val": "Sita1",
      "offset": 19
    },
    {
      "val": "test1",
      "offset": 27
    },
    {
      "val": "sitaram",
      "offset": 35
    },
    {
      "val": "sitaram",
      "offset": 45
    }
  ],
  "location": "RegistrationSteps.userEnter(String,String,String,String,String)"
});
formatter.result({
  "duration": 1831390600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 997627300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 70337600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 1772264000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 1272448600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_Registered_email_address_and_password()"
});
formatter.result({
  "duration": 216846400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 2372396900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 89517500,
  "status": "passed"
});
formatter.after({
  "duration": 16500,
  "status": "passed"
});
formatter.uri("virtualGiftCard.feature");
formatter.feature({
  "line": 1,
  "name": "adding a virtual gift card in the cart and send an email a friend functionality",
  "description": "",
  "id": "adding-a-virtual-gift-card-in-the-cart-and-send-an-email-a-friend-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19331233800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "To Verify User should able to add virtual gift card in the cart send an email a friend and see confirmation message",
  "description": "",
  "id": "adding-a-virtual-gift-card-in-the-cart-and-send-an-email-a-friend-functionality;to-verify-user-should-able-to-add-virtual-gift-card-in-the-cart-send-an-email-a-friend-and-see-confirmation-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter all the Mandatory/Required field on the registration page for virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter login details for virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on Gift Cards",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on add to cart on virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter all the personal details for gift card",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User click on Email a friend",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 111400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1804310900,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_enter_all_the_Mandatory_Required_field_on_the_registration_page_for_virtual_gift_card()"
});
formatter.result({
  "duration": 1799493500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 2001692100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 1602106900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 1375730200,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_enter_login_details_for_virtual_gift_card()"
});
formatter.result({
  "duration": 251584100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 4373401500,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_Gift_Cards()"
});
formatter.result({
  "duration": 2129973800,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_add_to_cart_on_virtual_gift_card()"
});
formatter.result({
  "duration": 281382900,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_enter_all_the_personal_details_for_gift_card()"
});
formatter.result({
  "duration": 949779700,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_Email_a_friend()"
});
formatter.result({
  "duration": 3768186500,
  "status": "passed"
});
formatter.after({
  "duration": 17100,
  "status": "passed"
});
});