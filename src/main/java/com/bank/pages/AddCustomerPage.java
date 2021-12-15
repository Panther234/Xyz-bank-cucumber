package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AddCustomerPage extends Utility {
    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    public AddCustomerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement enterFirstName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement enterLastName;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement enterPostCode;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement clickAddCustomer;

    public void firstName(String firstName) {
        sendTextToElement(enterFirstName, firstName);
        log.info("Enter First name : " + firstName + enterFirstName.toString());
    }

    public void lastName(String lastName) {
        sendTextToElement(enterLastName, lastName);
        log.info("Enter First name : " + lastName + enterLastName.toString());
    }

    public void postCode(String postCode) {
        sendTextToElement(enterPostCode, postCode);
        log.info("Enter PostCode : " + postCode + enterPostCode.toString());
    }

    public void addCustomer() {
        clickOnElement(clickAddCustomer);
        log.info("Add Customer : " + clickAddCustomer.toString());
    }

    public void alertTextVerify(String expectedMessage) throws InterruptedException {
        log.info("Verify Alert Text : " + expectedMessage );
        String message = getTextFromAlert();
        verifyText(expectedMessage, message, "Error, Message not displayed as expected");
    }
}
