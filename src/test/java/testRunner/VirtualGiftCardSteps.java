package testRunner;

import com.NopCommerce.*;
import cucumber.api.java.en.*;

public class VirtualGiftCardSteps {
    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    GiftCardsPage giftCardsPage = new GiftCardsPage();
    VirtualGiftCard virtualGiftCard = new VirtualGiftCard();
    LoginPage loginPage = new LoginPage();


    @When("^User enter all the Mandatory/Required field on the registration page for virtual gift card$")
    public void user_enter_all_the_Mandatory_Required_field_on_the_registration_page_for_virtual_gift_card() throws Throwable {
        registrationPage.fillTheRegistrationFormForVirtualGiftCard();


    }


    @When("^User enter login details for virtual gift card$")
    public void user_enter_login_details_for_virtual_gift_card() throws Throwable {
        loginPage.fillingLogInDetailsForVirtualGiftCard();


    }


    @When("^User click on Gift Cards$")
    public void user_click_on_Gift_Cards() throws Throwable {
        homePage.clickOnGiftCard();


    }

    @When("^User click on add to cart on virtual gift card$")
    public void user_click_on_add_to_cart_on_virtual_gift_card() throws Throwable {
        giftCardsPage.addingVirtualGiftCardInCart();

    }

    @When("^User enter all the personal details for gift card$")
    public void user_enter_all_the_personal_details_for_gift_card() throws Throwable {
        virtualGiftCard.fillingAllPersonalDetails();

    }

    @When("^User click on Email a friend$")
    public void user_click_on_Email_a_friend() throws Throwable {
        virtualGiftCard.clickOnEmailFriend();

    }

}
