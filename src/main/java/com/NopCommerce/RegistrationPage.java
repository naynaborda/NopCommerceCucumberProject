package com.NopCommerce;

import org.openqa.selenium.By;

public class RegistrationPage extends Utils {
    static String email = "test" + timeStamp() + "@test.com";
    static String email1 = "Test1" + timeStamp() + "@test.com";

    By _gender = By.id("gender-male");
    By _firstName = By.id("FirstName");
    By _lastName = By.id("LastName");
    By _dateOfBirthDay = By.name("DateOfBirthDay");
    By _dateOfBirthMonth = By.name("DateOfBirthMonth");
    By _dateOfBirthYear = By.name("DateOfBirthYear");
    By _email = By.id("Email");
    By _password = By.id("Password");
    By _confirmPassword = By.id("ConfirmPassword");
    By _registerBtn = By.id("register-button");

    public void fillTheRegistrationForm() {
        //click on male
        clickOnElement(_gender);
        //type FirstName
        typeText(_firstName, "Ram");
        //type LastName
        typeText(_lastName, "Sita");
        //select Date of Birthday
        selectValueFromDropDown(_dateOfBirthDay, "2");
        //select Date of Month
        selectValueFromDropDown(_dateOfBirthMonth, "March");
        //select Date of year
        selectValueFromDropDown(_dateOfBirthYear, "1986");
        //type email
        typeText(_email, email);
        //type password
        typeText(_password, "sitaram");
        //type confirm password
        typeText(_confirmPassword, "sitaram");

    }

    public void clickOnRegisterButton1() {
        //click on register button
        clickOnElement(_registerBtn);
    }

    public void fillTheRegistrationFormForVirtualGiftCard() {
        //click on male
        clickOnElement(_gender);
        //type FirstName
        typeText(_firstName, "Ram");
        //type LastName
        typeText(_lastName, "Sita");
        //select Date of Birthday
        selectValueFromDropDown(_dateOfBirthDay, "2");
        //select Date of Month
        selectValueFromDropDown(_dateOfBirthMonth, "March");
        //select Date of year
        selectValueFromDropDown(_dateOfBirthYear, "1986");
        //type email
        typeText(_email, email1);
        //type password
        typeText(_password, "sitaram");
        //type confirm password
        typeText(_confirmPassword, "sitaram");

    }


}
