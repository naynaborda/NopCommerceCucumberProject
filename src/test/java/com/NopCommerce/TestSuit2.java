package com.NopCommerce;

import org.testng.Assert;
import org.testng.annotations.Test;

public class TestSuit2 extends BaseTest {
    HomePage homePage = new HomePage();
    BooksPage booksPage = new BooksPage();
    Fahrenheit451BookPage fahrenheit451BookPage = new Fahrenheit451BookPage();
    CartPage cartPage = new CartPage();
    CheckoutAsGuestPage checkoutAsGuestPage = new CheckoutAsGuestPage();
    OnePageCheckOutPage onePageCheckOutPage = new OnePageCheckOutPage();
    CheckOutPage checkOutPage = new CheckOutPage();


    @Test(priority = 0)
    public void test1() {
        System.out.println("Test1");
    }

    @Test(priority = 1, enabled = false)
    public void test2() {
        System.out.println("Test2");
    }

    @Test(priority = 2)
    public void test3() {
        System.out.println("Test3");
    }

    @Test(priority = 3)
    public void test4() {
        System.out.println("Test4");
    }

    @Test(priority = 4, enabled = false)
    public void test5() {
        System.out.println("Test5");
    }

    //Program6
    @Test(priority = 5)
    public void buyingBook() {
        //click on book
        homePage.clickOnBook();
        //click on Fahrenheit 451 by ray Bradbury
        booksPage.clickOnFahrenheit451();
        //change quantity of the product 4
        fahrenheit451BookPage.changeQuantity();
        //add the book in wishlist
        fahrenheit451BookPage.addProductInWishList();
        //verify "The book has been added to you wishlist from testNg
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
        checkoutAsGuestPage.checkOutAsGuest();
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
}


