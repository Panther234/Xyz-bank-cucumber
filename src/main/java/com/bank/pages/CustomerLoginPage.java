package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomerLoginPage extends Utility {private static final Logger log = LogManager.getLogger(CustomerLoginPage.class.getName());

    public CustomerLoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement selectYourName;

    @CacheLookup
    @FindBy (xpath = "//button[normalize-space()='Login']")
    WebElement clickLoginButton;


    public void selectFromYourNameDropdown(String name){
        clickOnElement(selectYourName);
        selectByVisibleTextFromDropDown(selectYourName,name);
        log.info("Select Name from Dropdown : " + name + selectYourName.toString());
    }

    public void loginButton(){
        clickOnElement(clickLoginButton);
        log.info("Click Login button: "  + clickLoginButton.toString());
    }
}
