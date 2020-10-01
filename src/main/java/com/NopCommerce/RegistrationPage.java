package com.NopCommerce;

import org.openqa.selenium.By;

public class RegistrationPage extends Utils {
    LoadProp loadProp = new LoadProp();
    static String email = "test" + timeStamp() + "@test.com";
    static String email1 = "Test1" + timeStamp() + "@test.com";

    private By _gender = By.id("gender-male");
    private By _firstName = By.id("FirstName");
    private By _lastName = By.id("LastName");
    private By _dateOfBirthDay = By.name("DateOfBirthDay");
    private By _dateOfBirthMonth = By.name("DateOfBirthMonth");
    private By _dateOfBirthYear = By.name("DateOfBirthYear");
    private By _email = By.id("Email");
    private By _password = By.id("Password");
    private By _confirmPassword = By.id("ConfirmPassword");
    private By _registerBtn = By.id("register-button");

    public void fillTheRegistrationForm() {
        //click on male
        clickOnElement(_gender);
        //type FirstName
        typeText(_firstName, loadProp.readProperties("firstName"));
        //typeText(_firstName, "Ram");
        //type LastName
        typeText(_lastName, loadProp.readProperties("lastName"));
        //typeText(_lastName, "Sita");
        //select Date of Birthday
        selectValueFromDropDown(_dateOfBirthDay, "2");
        //select Date of Month
        selectValueFromDropDown(_dateOfBirthMonth, "March");
        //select Date of year
        selectValueFromDropDown(_dateOfBirthYear, "1986");
        //type email
        typeText(_email, email);
        //type password
        typeText(_password, loadProp.readProperties("password"));
        //typeText(_password, "sitaram");
        //type confirm password
        typeText(_confirmPassword, loadProp.readProperties("confirmPassword"));
        // typeText(_confirmPassword, "sitaram");

    }

    public void clickOnRegisterButton1() {
        //click on register button
        clickOnElement(_registerBtn);
    }

    public void fillTheRegistrationFormForVirtualGiftCard() {
        //click on male
        clickOnElement(_gender);
        //type FirstName
        //typeText(_firstName, "Ram");
        typeText(_firstName, loadProp.readProperties("firstName"));
        //type LastName
        // typeText(_lastName, "Sita");
        typeText(_lastName, loadProp.readProperties("lastName"));
        //select Date of Birthday
        selectValueFromDropDown(_dateOfBirthDay, "2");
        //select Date of Month
        selectValueFromDropDown(_dateOfBirthMonth, "March");
        //select Date of year
        selectValueFromDropDown(_dateOfBirthYear, "1986");
        //type email
        typeText(_email, email1);
        //type password
        //typeText(_password, "sitaram");
        typeText(_password, loadProp.readProperties("password"));
        //type confirm password
        //typeText(_confirmPassword, "sitaram");
        typeText(_confirmPassword, loadProp.readProperties("confirmPassword"));

    }


}
