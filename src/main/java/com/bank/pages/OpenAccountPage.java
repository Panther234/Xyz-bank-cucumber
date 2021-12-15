package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OpenAccountPage extends Utility {private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    public OpenAccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement selectCustomer;

    @CacheLookup
    @FindBy(xpath = "//select[@id='currency']")
    WebElement selectCurrency;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Process']")
    WebElement clickProcessButton;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Home']")
    WebElement navigateHomePage;

    public void selectFromCustomerDropdown(String name) {
        selectByVisibleTextFromDropDown(selectCustomer, name);
        log.info("Select Customer : " + name + selectCustomer.toString());
    }

    public void selectFromCurrencyDropdown(String text) {
        selectByVisibleTextFromDropDown(selectCurrency, text);
        log.info("Select Currency : " + text + selectCurrency.toString());
    }

    public void clickProcess() {
        clickOnElement(clickProcessButton);
        log.info("Click Process button : " + clickProcessButton.toString());
    }

    public void alertTextVerify(String expectedMessage) throws InterruptedException {
        String message = getTextFromAlert();
        verifyText(expectedMessage, message, "Error, Message not displayed as expected");
        log.info("Verify Alert Text : " + expectedMessage );
    }

    public void backToHomePage() {
        clickOnElement(navigateHomePage);
        log.info("Navigate to Homepage : " + navigateHomePage.toString());
    }

}
