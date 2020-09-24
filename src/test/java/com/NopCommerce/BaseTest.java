package com.NopCommerce;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Parameters;

import java.util.concurrent.TimeUnit;

public class BaseTest extends Utils {
    //this before method is for passing parameter from testNg xml file
//    @BeforeMethod
//   // @Parameters({"browserName"})
//    public void openBrowser(String name){
//        BrowserSelector browserSelector=new BrowserSelector();
//       // browserSelector.selectBrowser(name);
//
//        driver.get("https://demo.nopcommerce.com/");
//        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//        driver.manage().window().maximize();
//
//    }
    @BeforeMethod
    public void openBrowser() {
        BrowserSelector browserSelector = new BrowserSelector();
        browserSelector.selectBrowser("Firefox");
        driver.get("https://demo.nopcommerce.com/");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();

    }
    // @AfterMethod
    // public void closeBrowser(){
    //    driver.quit();

    // }
}
