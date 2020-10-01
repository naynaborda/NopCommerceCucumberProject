package testRunner;

import com.NopCommerce.BasePage;
import com.NopCommerce.BrowserSelector;
import com.NopCommerce.LoadProp;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProp loadProp = new LoadProp();

    @Before
    public void openBrowser() {
        //browserSelector.selectBrowser("firefox");
        browserSelector.selectBrowser(loadProp.readProperties("browserName"));
        driver.get(loadProp.readProperties("url"));
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

    }

    @After
    public void closeBrowser() {
        //driver.quit();
    }
}
