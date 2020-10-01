package com.NopCommerce;


import org.testng.Assert;
import org.testng.annotations.Test;


public class TestSuit extends BaseTest {
    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegisterResultPage registerResultPage = new RegisterResultPage();
    LoginPage loginPage = new LoginPage();
    ApparelPage apparelPage = new ApparelPage();
    ClothingPage clothingPage = new ClothingPage();
    CompareProductPage compareProductPage = new CompareProductPage();
    BooksPage booksPage = new BooksPage();
    Fahrenheit451BookPage fahrenheit451BookPage = new Fahrenheit451BookPage();
    CartPage cartPage = new CartPage();
    CheckoutAsGuestPage checkoutAsGuestPage = new CheckoutAsGuestPage();
    OnePageCheckOutPage onePageCheckOutPage = new OnePageCheckOutPage();
    CheckOutPage checkOutPage = new CheckOutPage();
    GiftCardsPage giftCardsPage = new GiftCardsPage();
    VirtualGiftCard virtualGiftCard = new VirtualGiftCard();


    @Test(groups = {"sanity", "regression"}, priority = 4)

    public void verifyingRegisterSuccessfully() {
        //click on register button
        homePage.clickOnRegisterBtn();
        //filling Registration details
        registrationPage.fillTheRegistrationForm();
        //click on registration button on
        registrationPage.clickOnRegisterButton1();
        //verify message for successful registration from testNg
        String expectedResult = "Your registration completed";
        String actualResult = registerResultPage.registrationConfirmationMessageText();
        Assert.assertEquals(actualResult, expectedResult, "User is unable to register");
        //click on logout
        registerResultPage.logOut();
        //click on login
        homePage.clickOnLoginBtn();
        //filling login details
        loginPage.fillingLogInDetails();
        //click on log in button
        loginPage.clickOnLoginButton();
        String expectedText = "My account";
        String actualText = loginPage.logInConfirmationMessage();
        Assert.assertEquals(actualText, expectedText, "Login unsuccessful");


    }

    //Program6
    @Test(groups = {"smoke"}, priority = 0)
    public void buyingBook() {
        //click on book
        homePage.clickOnBook();
        //click on Fahrenheit 451 by ray Bradbury
        booksPage.clickOnFahrenheit451();
        //change quantity of the product 4
        fahrenheit451BookPage.changeQuantity();
        //add the book in wishlist
        fahrenheit451BookPage.addProductInWishList();
        //verify "The book has been added to you wishlist  from top green line from testNg
        String expectedMessage = "The product has been added to your wishlist";
        String actualMessage = fahrenheit451BookPage.verifyBookAddedToWishlist();
        Assert.assertEquals(actualMessage, expectedMessage, "Book is not in wish list");
        //add product in to cart
        fahrenheit451BookPage.addProductInToCart();
        //go to cart from top green message
        fahrenheit451BookPage.clickOnCartTopGreenMessage();
        //click on term and condition
        cartPage.clickOnTermAndCondition();
        //click on checkout
        cartPage.clickOnCheckOut();
        //click on checkout as guest
        checkoutAsGuestPage.clickOnCheckOutAsGuest();
        //filling Personal details for checkout
        onePageCheckOutPage.fillingPersonalDetailsForCheckOut();
        //Click on Continue from one page checkout
        onePageCheckOutPage.clickOnContinueFromOnePageCheckoutPage();
        //Click on Continue From Shipping page
        onePageCheckOutPage.clickOnContinueFromShippingPage();
        //Click on CreditCard  From Opc-Payment-Method Page
        onePageCheckOutPage.clickOnCreditCard();
        //Click on Continue From Opc-Payment-Method Page
        onePageCheckOutPage.clickOnContinueFromOpcPaymentMethodPage();
        //Add Card Details
        onePageCheckOutPage.addCardDetails();
        //Click on Continue From Opc-Payment_Info Page
        onePageCheckOutPage.clickOnContinueFromOpcPaymentInfoPage();
        //Click on Confirm Order From Opc-Confirm_Order Page
        onePageCheckOutPage.clickOnConfirmButton();
        //Asserting Confirmation message from test ng
        String expectedText = "Your order has been successfully processed!";
        String actualText = checkOutPage.verifyOrderConfirmationText();
        Assert.assertEquals(actualText, expectedText, "User is unable to processed order");


    }

    @Test(groups = {"sanity"}, priority = 1, enabled = false)
    public void clothingShoppingWithScreenShot() {
        //click on Apparel
        homePage.clickOnApparel();
        //click on Clothing
        apparelPage.clickOnClothing();
        //click on sort by low to high price
        clothingPage.sortByLowToHighPrice();
        //display 3 per page
        clothingPage.displayBy3Number();
        //click on list(view)
        clothingPage.clickOnList();
        //take a screenshot of clothing page
        clothingPage.firstScreenShot();
        //add to comparision custom t-shirt
        clothingPage.addCustomTiShirtToComparison();
        //add  to comparision oversized women t-shirt
        clothingPage.addOverSizedWomenTShirtToComparison();
        //take again screenshot with green line on top with message"The product has been added to your product comparison
        clothingPage.secondScreenshot();
        //click on product comparision from green line link
        clothingPage.productComparisonFromGreenLink();
        //asserting product name custom t-shirt from testNg
        String expectedName = "Custom T-Shirt";
        String actualName = compareProductPage.verifyCustomTShirt();
        Assert.assertEquals(actualName, expectedName, "Custom T-Shirt is not there");
        //clear compare list
        compareProductPage.clearCompareList();
        //asserting message you have no items to compare from testNg
        String expectedText = "You have no items to compare.";
        String actualText = compareProductPage.noProductForComparision();
        Assert.assertEquals(actualText, expectedText, "Item is still in compare List");


    }

    //program2
    @Test(groups = {"sanity"}, priority = 2)
    public void clothingShoppingWithoutScreenShot() {
        //click on Apparel
        homePage.clickOnApparel();
        //click on Clothing
        apparelPage.clickOnClothing();
        //click on sort by high to low price
        clothingPage.sortByHighToLowPrice();
        //display 9 per page
        clothingPage.displayBy9Number();
        //click on list(view)
        clothingPage.clickOnList();
        //add to comparision custom t-shirt
        clothingPage.addCustomTiShirtToComparison();
        //add  to comparision oversized women t-shirt
        clothingPage.addOverSizedWomenTShirtToComparison();
        //click on product comparision from green line link
        clothingPage.productComparisonFromGreenLink();
        //asserting product name oversized women t-shirt from testNg
        String expectedTShirtName = "Oversized Women T-Shirt";
        String actualTShirtName = compareProductPage.verifyOverSizedWomenTShirt();
        Assert.assertEquals(actualTShirtName, expectedTShirtName, "Oversized women t-shirt is not there");
        //clear compare list
        compareProductPage.clearCompareList();
        //asserting message you have no items to compare
        String expectedText = "You have no items to compare.";
        String actualText = compareProductPage.noProductForComparision();
        Assert.assertEquals(actualText, expectedText, "Item is still in compare List");


    }

    //Program 7
    @Test(groups = {"sanity"}, priority = 3)
    public void addingVirtualGiftCard() {
        //click on register button
        homePage.clickOnRegisterBtn();
        //filling Registration details
        registrationPage.fillTheRegistrationFormForVirtualGiftCard();
        //click on register button from registration page
        registrationPage.clickOnRegisterButton1();
        //click on logout
        registerResultPage.logOut();
        //click on login
        homePage.clickOnLoginBtn();
        //filling login details
        loginPage.fillingLogInDetailsForVirtualGiftCard();
        //click on login button from login page
        loginPage.clickOnLoginButton();
        //Click on GiftCard
        homePage.clickOnGiftCard();
        //adding a virtual gift card in the cart
        giftCardsPage.addingVirtualGiftCardInCart();
        //filling all the personal details for gift card
        virtualGiftCard.fillingAllPersonalDetails();
        // click on email a friend button
        virtualGiftCard.clickOnEmailFriend();


    }

}
