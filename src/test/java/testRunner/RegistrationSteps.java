package testRunner;

import com.NopCommerce.HomePage;
import com.NopCommerce.LoginPage;
import com.NopCommerce.RegisterResultPage;
import com.NopCommerce.RegistrationPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class RegistrationSteps {
    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    RegisterResultPage registerResultPage = new RegisterResultPage();
    LoginPage loginPage = new LoginPage();

    @Given("^User is on the home page$")
    public void user_is_on_the_home_page() throws Throwable {

    }

    @When("^User click on the register button$")
    public void user_click_on_the_register_button() throws Throwable {
        homePage.clickOnRegisterBtn();

    }

    @When("^User enter all the Mandatory/Required field on the registration page$")
    public void user_enter_all_the_Mandatory_Required_field_on_the_registration_page() throws Throwable {
        registrationPage.fillTheRegistrationForm();


    }

    @When("^User click on register button on the registration page$")
    public void user_click_on_register_button_on_the_registration_page() throws Throwable {
        registrationPage.clickOnRegisterButton1();

    }

    @Then("^User should able to register successfully$")
    public void user_should_able_to_register_successfully() throws Throwable {
        Assert.assertEquals("Your registration completed", registerResultPage.registrationConfirmationMessageText());

    }

    @Then("^User Click on logout button on the register result page$")
    public void user_Click_on_logout_button_on_the_register_result_page() throws Throwable {
        registerResultPage.logOut();

    }

    @Then("^User Click on login button on the home page$")
    public void user_Click_on_login_button_on_the_home_page() throws Throwable {
        homePage.clickOnLoginBtn();

    }

    @Then("^User enter Registered email address and password$")
    public void user_enter_Registered_email_address_and_password() throws Throwable {
        loginPage.fillingLogInDetails();


    }

    @Then("^User click on login button$")
    public void user_click_on_login_button() throws Throwable {
        loginPage.clickOnLoginButton();

    }

    @Then("^User should able to log in successfully$")
    public void user_should_able_to_log_in_successfully() throws Throwable {
        Assert.assertEquals("My account", loginPage.logInConfirmationMessage());

    }


    @And("^User enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void userEnter(String FirstName, String LastName, String email, String Password, String ConfirmPassword) throws Throwable {
        registrationPage.fillTheRegistrationForm();

    }
}
