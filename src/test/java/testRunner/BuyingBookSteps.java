package testRunner;


import com.NopCommerce.*;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class BuyingBookSteps {
    HomePage homePage = new HomePage();
    BooksPage booksPage = new BooksPage();
    CartPage cartPage = new CartPage();
    Fahrenheit451BookPage fahrenheit451BookPage = new Fahrenheit451BookPage();
    CheckoutAsGuestPage checkoutAsGuestPage = new CheckoutAsGuestPage();
    OnePageCheckOutPage onePageCheckOutPage = new OnePageCheckOutPage();
    CheckOutPage checkOutPage = new CheckOutPage();

    @When("^User click on books$")
    public void user_click_on_books() throws Throwable {
        homePage.clickOnBook();

    }

    @When("^User click on Fahrenheit (\\d+) by ray bradbury$")
    public void user_click_on_Fahrenheit_by_ray_bradbury(int arg1) throws Throwable {
        booksPage.clickOnFahrenheit451();


    }

    @When("^User change quantity of the product (\\d+)$")
    public void user_change_quantity_of_the_product(int arg1) throws Throwable {
        fahrenheit451BookPage.changeQuantity();

    }

    @When("^User add Fahrenheit (\\d+) by bradbury book in wish list$")
    public void user_add_Fahrenheit_by_bradbury_book_in_wish_list(int arg1) throws Throwable {
        fahrenheit451BookPage.addProductInWishList();

    }

    @Then("^User should see The product has been added to your wishlist message from top green line$")
    public void user_should_see_The_product_has_been_added_to_your_wishlist_message_from_top_green_line() throws Throwable {
        Assert.assertEquals("The product has been added to your wishlist", fahrenheit451BookPage.verifyBookAddedToWishlist());

    }

    @Then("^User add product in to cart$")
    public void user_add_product_in_to_cart() throws Throwable {
        fahrenheit451BookPage.addProductInToCart();


    }

    @Then("^User click on cart from top green message$")
    public void user_click_on_cart_from_top_green_message() throws Throwable {
        fahrenheit451BookPage.clickOnCartTopGreenMessage();

    }

    @Then("^User click on term and condition$")
    public void user_click_on_term_and_condition() throws Throwable {
        cartPage.clickOnTermAndCondition();


    }

    @Then("^User click on checkout$")
    public void user_click_on_checkout() throws Throwable {
        cartPage.clickOnCheckOut();

    }

    @Then("^User click on checkout as guest$")
    public void user_click_on_checkout_as_guest() throws Throwable {
        checkoutAsGuestPage.clickOnCheckOutAsGuest();

    }

    @Then("^User filled personal details for checkout$")
    public void user_filled_personal_details_for_checkout() throws Throwable {
        onePageCheckOutPage.fillingPersonalDetailsForCheckOut();

    }

    @Then("^User click on continue button from one page check out page$")
    public void user_click_on_continue_button_from_one_page_check_out_page() throws Throwable {
        onePageCheckOutPage.clickOnContinueFromOnePageCheckoutPage();

    }

    @Then("^User click on continue button from shipping page$")
    public void user_click_on_continue_button_from_shipping_page() throws Throwable {
        onePageCheckOutPage.clickOnContinueFromShippingPage();

    }

    @Then("^User click on credit card$")
    public void user_click_on_credit_card() throws Throwable {
        onePageCheckOutPage.clickOnCreditCard();

    }

    @Then("^User click on Continue From Opc-Payment-Method Page$")
    public void user_click_on_Continue_From_Opc_Payment_Method_Page() throws Throwable {
        onePageCheckOutPage.clickOnContinueFromOpcPaymentMethodPage();

    }

    @Then("^User enter card details$")
    public void user_enter_card_details() throws Throwable {
        onePageCheckOutPage.addCardDetails();
    }

    @Then("^User click on Continue button From Opc-Payment_Info Page$")
    public void user_click_on_Continue_button_From_Opc_Payment_Info_Page() throws Throwable {
        onePageCheckOutPage.clickOnContinueFromOpcPaymentInfoPage();

    }

    @Then("^User click on Confirm button From Opc-Confirm_Order Page$")
    public void user_click_on_Confirm_button_From_Opc_Confirm_Order_Page() throws Throwable {
        onePageCheckOutPage.clickOnConfirmButton();

    }

    @Then("^User should able to see order confirmation message$")
    public void user_should_able_to_see_order_confirmation_message() throws Throwable {
        Assert.assertEquals("Your order has been successfully processed!", checkOutPage.verifyOrderConfirmationText());

    }

}
