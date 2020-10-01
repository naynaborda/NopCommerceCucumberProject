package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\resources\\featureFiles",
        plugin = {"pretty", "html:target/cucumber-reports"})
//@CucumberOptions(features = "src\\test\\resources\\featureFiles"
  //     ,glue = {"stepDefinition"}
//)

public class Runner {
}
