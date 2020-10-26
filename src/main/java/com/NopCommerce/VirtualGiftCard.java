package com.NopCommerce;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class VirtualGiftCard extends Utils {
   // static String email = "test" + timeStamp() + "@test.com";
    //static String name = "Ram";
    private By _recipientName = By.id("giftcard_43_RecipientName");
    private By _recipientEMail = By.id("giftcard_43_RecipientEmail");
    private By _emailFriend = By.xpath("//input[@value='Email a friend']");
    // By _emailFriend=By.cssSelector("input.button-2.email-a-friend-button.valid");
    // By _emailFriend=By.xpath("/html[1]/body[1]/div[6]/div[3]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[8]/div[3]/input[1]");


    public void fillingAllPersonalDetails() {
        //Enter Recipient's Name
        typeText(_recipientName, "Sonal");
        //Enter Recipient's Email
        typeText(_recipientEMail, "sonal@test.com");


    }

    public void clickOnEmailFriend() {
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(_emailFriend));

        // clickOnElement(_emailFriend);


    }

//    public void clickOnLoginButton() {
//        //Click on Email a friend
//        clickOnElement(_emailFriend);
//
//    }


}
