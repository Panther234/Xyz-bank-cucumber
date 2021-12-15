package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CustomersPage extends Utility {private static final Logger log = LogManager.getLogger(CustomersPage.class.getName());

    public CustomersPage() {
        PageFactory.initElements(driver, this);}

    @CacheLookup
    @FindBy(xpath = "//label[normalize-space()='Your Name :']")
    WebElement verifyMessage;


    public void verifyDisplayNameMessage(String expectedMessage) throws InterruptedException {
        String Message = getTextFromElement(verifyMessage);
        verifyText(expectedMessage, Message, "Element not displayed");
        log.info("Verify Displayed Name Message: " + expectedMessage + verifyMessage.toString());
    }
}
