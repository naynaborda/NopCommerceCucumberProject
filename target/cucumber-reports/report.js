$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buyingBook.feature");
formatter.feature({
  "line": 1,
  "name": "Buying a Book Functionality",
  "description": "",
  "id": "buying-a-book-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10629248100,
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
  "duration": 220916300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_books()"
});
formatter.result({
  "duration": 2463473300,
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
  "duration": 3393439300,
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
  "duration": 106985300,
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
  "duration": 280089000,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_should_see_The_product_has_been_added_to_your_wishlist_message_from_top_green_line()"
});
formatter.result({
  "duration": 1118371300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_add_product_in_to_cart()"
});
formatter.result({
  "duration": 262872300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_cart_from_top_green_message()"
});
formatter.result({
  "duration": 6495163200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_term_and_condition()"
});
formatter.result({
  "duration": 253727300,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_checkout()"
});
formatter.result({
  "duration": 2342672100,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_checkout_as_guest()"
});
formatter.result({
  "duration": 4297357200,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_filled_personal_details_for_checkout()"
});
formatter.result({
  "duration": 772490800,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_continue_button_from_one_page_check_out_page()"
});
formatter.result({
  "duration": 256359700,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_continue_button_from_shipping_page()"
});
formatter.result({
  "duration": 1232490100,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_credit_card()"
});
formatter.result({
  "duration": 1486513100,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Continue_From_Opc_Payment_Method_Page()"
});
formatter.result({
  "duration": 272769700,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_enter_card_details()"
});
formatter.result({
  "duration": 1930680400,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Continue_button_From_Opc_Payment_Info_Page()"
});
formatter.result({
  "duration": 252502700,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_click_on_Confirm_button_From_Opc_Confirm_Order_Page()"
});
formatter.result({
  "duration": 767751000,
  "status": "passed"
});
formatter.match({
  "location": "BuyingBookSteps.user_should_able_to_see_order_confirmation_message()"
});
formatter.result({
  "duration": 3183755700,
  "status": "passed"
});
formatter.after({
  "duration": 421500,
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
  "duration": 7491702800,
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
  "duration": 67400,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_Apparel()"
});
formatter.result({
  "duration": 1894051500,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clothing_from_left_side_menu()"
});
formatter.result({
  "duration": 1874106000,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_select_sort_by_low_to_high_price()"
});
formatter.result({
  "duration": 730129800,
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
  "duration": 801413700,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_list()"
});
formatter.result({
  "duration": 1638820900,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_take_a_screenshot()"
});
formatter.result({
  "duration": 162742600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_custom_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 260283800,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_over_sized_women_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 268473200,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_take_again_screenshot_with_green_line_on_top_with_message_The_product_has_been_added_to_your_product_comparison()"
});
formatter.result({
  "duration": 218136100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_product_comparison_from_green_line_link()"
});
formatter.result({
  "duration": 1206131900,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_verify_custom_t_shirt_name_in_compare_list()"
});
formatter.result({
  "duration": 40925000,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clear_compare_list()"
});
formatter.result({
  "duration": 67108000,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_Should_able_to_see_confirmation_message_no_product_for_comparison()"
});
formatter.result({
  "duration": 1936678100,
  "status": "passed"
});
formatter.after({
  "duration": 19300,
  "status": "passed"
});
formatter.before({
  "duration": 7093251000,
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
  "duration": 77100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_Apparel()"
});
formatter.result({
  "duration": 1553313400,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clothing_from_left_side_menu()"
});
formatter.result({
  "duration": 1433310300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_select_sort_by_high_to_low()"
});
formatter.result({
  "duration": 1641999900,
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
  "duration": 750994600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_list()"
});
formatter.result({
  "duration": 850733600,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_custom_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 273416000,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_add_over_sized_women_t_shirt_to_compare_list()"
});
formatter.result({
  "duration": 244458900,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_product_comparison_from_green_line_link()"
});
formatter.result({
  "duration": 1763831300,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_verify_over_sized_women_t_shirt_name_in_compare_list()"
});
formatter.result({
  "duration": 166760400,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_click_on_clear_compare_list()"
});
formatter.result({
  "duration": 53294100,
  "status": "passed"
});
formatter.match({
  "location": "ClothingComparisonSteps.user_Should_able_to_see_confirmation_message_no_product_for_comparison()"
});
formatter.result({
  "duration": 1324098700,
  "status": "passed"
});
formatter.after({
  "duration": 18900,
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
  "duration": 8471724300,
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
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 915275900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_all_the_Mandatory_Required_field_on_the_registration_page()"
});
formatter.result({
  "duration": 1622935400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 2343769200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 45612100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 1211437500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 804342900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_enter_Registered_email_address_and_password()"
});
formatter.result({
  "duration": 180950500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 1435504400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_should_able_to_log_in_successfully()"
});
formatter.result({
  "duration": 59659900,
  "status": "passed"
});
formatter.after({
  "duration": 15200,
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
  "duration": 8904877700,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "To Verify User should able to add virtual gift card in the cart send an email a friend and see confirmation message",
  "description": "",
  "id": "adding-a-virtual-gift-card-in-the-cart-and-send-an-email-a-friend-functionality;to-verify-user-should-able-to-add-virtual-gift-card-in-the-cart-send-an-email-a-friend-and-see-confirmation-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User click on the register button",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enter all the Mandatory/Required field on the registration page for virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User click on register button on the registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Click on logout button on the register result page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on login button on the home page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter login details for virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on Gift Cards",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on add to cart on virtual gift card",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter all the personal details for gift card",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Email a friend",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 157200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_the_register_button()"
});
formatter.result({
  "duration": 1439204400,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_enter_all_the_Mandatory_Required_field_on_the_registration_page_for_virtual_gift_card()"
});
formatter.result({
  "duration": 1498840200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_register_button_on_the_registration_page()"
});
formatter.result({
  "duration": 2243404900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_logout_button_on_the_register_result_page()"
});
formatter.result({
  "duration": 919881300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_Click_on_login_button_on_the_home_page()"
});
formatter.result({
  "duration": 1483757600,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_enter_login_details_for_virtual_gift_card()"
});
formatter.result({
  "duration": 161383500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.user_click_on_login_button()"
});
formatter.result({
  "duration": 913598800,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_Gift_Cards()"
});
formatter.result({
  "duration": 951786600,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_add_to_cart_on_virtual_gift_card()"
});
formatter.result({
  "duration": 310290600,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_enter_all_the_personal_details_for_gift_card()"
});
formatter.result({
  "duration": 771962900,
  "status": "passed"
});
formatter.match({
  "location": "VirtualGiftCardSteps.user_click_on_Email_a_friend()"
});
formatter.result({
  "duration": 120104200,
  "status": "passed"
});
formatter.after({
  "duration": 13900,
  "status": "passed"
});
});