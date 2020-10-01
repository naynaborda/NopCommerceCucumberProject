package testRunner;

import com.NopCommerce.ApparelPage;
import com.NopCommerce.ClothingPage;
import com.NopCommerce.CompareProductPage;
import com.NopCommerce.HomePage;
import cucumber.api.java.en.*;
import org.junit.Assert;

import java.nio.channels.spi.AsynchronousChannelProvider;

public class ClothingComparisonSteps {
    HomePage homePage = new HomePage();
    ApparelPage apparelPage = new ApparelPage();
    ClothingPage clothingPage = new ClothingPage();
    CompareProductPage compareProductPage = new CompareProductPage();

    @When("^User click on Apparel$")
    public void user_click_on_Apparel() throws Throwable {
        homePage.clickOnApparel();

    }

    @When("^User click on clothing  from left side menu$")
    public void user_click_on_clothing_from_left_side_menu() throws Throwable {
        apparelPage.clickOnClothing();

    }

    @When("^User select sort by low to high price$")
    public void user_select_sort_by_low_to_high_price() throws Throwable {
        clothingPage.sortByLowToHighPrice();

    }

    @When("^User select  display (\\d+) per page$")
    public void user_select_display_per_page(int arg1) throws Throwable {
        clothingPage.displayBy3Number();


    }

    @When("^User click on list$")
    public void user_click_on_list() throws Throwable {
        clothingPage.clickOnList();

    }

    @When("^User take a screenshot$")
    public void user_take_a_screenshot() throws Throwable {
        clothingPage.firstScreenShot();

    }

    @When("^User add custom t-shirt to compare list$")
    public void user_add_custom_t_shirt_to_compare_list() throws Throwable {
        clothingPage.addCustomTiShirtToComparison();

    }

    @When("^User add over-sized women t-shirt to compare list$")
    public void user_add_over_sized_women_t_shirt_to_compare_list() throws Throwable {
        clothingPage.addOverSizedWomenTShirtToComparison();

    }

    @When("^User take again screenshot with green line on top with message, The product has been added to your product comparison$")
    public void user_take_again_screenshot_with_green_line_on_top_with_message_The_product_has_been_added_to_your_product_comparison() throws Throwable {
        clothingPage.secondScreenshot();

    }

    @When("^User click on product comparison from green line link$")
    public void user_click_on_product_comparison_from_green_line_link() throws Throwable {
        clothingPage.productComparisonFromGreenLink();

    }

    @When("^User verify custom t-shirt name in compare list$")
    public void user_verify_custom_t_shirt_name_in_compare_list() throws Throwable {
        Assert.assertEquals("Custom T-Shirt", compareProductPage.verifyCustomTShirt());
    }


    @When("^User click on clear compare list$")
    public void user_click_on_clear_compare_list() throws Throwable {
        compareProductPage.clearCompareList();

    }

    @Then("^User Should able to see confirmation message,no product for comparison$")
    public void user_Should_able_to_see_confirmation_message_no_product_for_comparison() throws Throwable {
        Assert.assertEquals("You have no items to compare.", compareProductPage.noProductForComparision());

    }

    @When("^User select sort by high to low$")
    public void user_select_sort_by_high_to_low() throws Throwable {
        clothingPage.sortByHighToLowPrice();


    }

    @When("^User select  display (\\d+) item per page$")
    public void user_select_display_item_per_page(int arg1) throws Throwable {
        clothingPage.displayBy9Number();


    }

    @When("^User verify over-sized women t-shirt name in compare list$")
    public void user_verify_over_sized_women_t_shirt_name_in_compare_list() throws Throwable {
        Assert.assertEquals("Oversized Women T-Shirt", compareProductPage.verifyOverSizedWomenTShirt());


    }


}
