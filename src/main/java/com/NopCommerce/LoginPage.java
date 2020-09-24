package com.NopCommerce;

import org.openqa.selenium.By;

public class LoginPage extends Utils {
    By _email = By.id("Email");
    By _password = By.id("Password");
    By _logInBtn = By.xpath("//input[@class='button-1 login-button']");

    public void fillingLogInDetails() {
        //type registered email
        typeText(_email, RegistrationPage.email);
        //type password
        typeText(_password, "sitaram");


    }

    public void clickOnLoginButton() {
        //click on login button
        clickOnElement(_logInBtn);

    }

    public void fillingLogInDetailsForVirtualGiftCard() {
        //type registered email
        typeText(_email, RegistrationPage.email1);
        //type password
        typeText(_password, "sitaram");


    }
}
