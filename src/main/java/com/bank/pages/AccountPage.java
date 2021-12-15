package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Logout']")
    WebElement logoutTab;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Deposit']")
    WebElement depositTab;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement addAmount;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement depositButton;

    @CacheLookup
    @FindBy(xpath = "//span[@class='error ng-binding']")
    WebElement depositSuccessful;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdrawl']")
    WebElement withdrawlTab;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Withdraw']")
    WebElement withdrawButton;

    @CacheLookup
    @FindBy(xpath = "(//span[@class='error ng-binding'])[1]")
    WebElement transactionSuccessful;

    @CacheLookup
    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement withdrawAmount;



    public void verifyLogoutTabDisplayed() throws InterruptedException {
        verifyThatTextIsDisplayed(logoutTab, "Logout");
        log.info("Verify Logout displayed : " + logoutTab.toString());
    }

    public void clickLogoutTab() {
        clickOnElement(logoutTab);
        log.info("Click Logout Tab : " + logoutTab.toString());
    }

    public void clickDepositTab() {
        clickOnElement(depositTab);
        log.info("Click Deposit Tab : " + depositTab.toString());
    }

    public void enterAmount(String money) throws InterruptedException {
        Thread.sleep(2000);
        sendKeysToElement(addAmount, money);
        log.info("Click Enter Amount :" + money + addAmount.toString());
    }

    public void clickDepositButton() {
        clickOnElement(depositButton);
        log.info("Click Deposit Button : " + depositButton.toString());
    }

    public void verifyDepositMessage(String expectedMessage) {
        String Message = getTextFromElement(depositSuccessful);
        verifyText(expectedMessage, Message, "Element not displayed");
        log.info("Verify Deposit Message : " + expectedMessage + depositSuccessful.toString());
    }

    public void clickWithdrawalTab() {
        clickOnElement(withdrawlTab);
        log.info("Click Withdrawl tab : " + withdrawlTab.toString());
    }

    public void enterWithdrawlAmount(String money)  {
        sendKeysToElement(withdrawAmount, money);
        log.info("Enter Withdrawl Amount : " + money + withdrawAmount.toString());
    }

    public void clickWithdrawlButton() throws InterruptedException {
        Thread.sleep(1000);
        clickOnElement(withdrawButton);
        log.info("Click Withdrawl Button : " + withdrawButton.toString());
    }

    public void verifyWithdrawMessage(String expectedMessage) {
        String Message = getTextFromElement(transactionSuccessful);
        verifyText(expectedMessage, Message, "Element not displayed");
        log.info("Verify Withdrawl Message  : " + expectedMessage + transactionSuccessful.toString());
    }

}
