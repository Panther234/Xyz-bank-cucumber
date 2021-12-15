package com.bank.cucumber.stepdefs;

import com.bank.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BankTestStep {

    @When("^I click on 'Bank Manager Login' Bank Manager Tab$")
    public void iClickOnBankManagerLoginBankManagerTab() {
        new HomePage().clickBankManagerLogin();
    }
    @And("^I click on 'Add Customer' Add Customer tab$")
    public void iClickOnAddCustomerAddCustomerTab() {
        new BankManagerLoginPage().addCustomerButton();
    }

    @And("^I enter FirstName in first name field$")
    public void iEnterFirstNameInFirstNameField() {
        new AddCustomerPage().firstName("Bob");
    }

    @And("^I enter LastName in last name field$")
    public void iEnterLastNameInLastNameField() {
        new AddCustomerPage().lastName("Alexa");
    }

    @And("^I enter PostCode in postcode field$")
    public void iEnterPostCodeInPostcodeField() {
        new AddCustomerPage().postCode("AB1 2CD");
    }

    @And("^I click on 'Add Customer' Button$")
    public void iClickOnAddCustomerButton() {
        new AddCustomerPage().addCustomer();
    }

    @And("^I verify message 'Customer added successfully'$")
    public void iVerifyMessageCustomerAddedSuccessfully() throws InterruptedException {
        new AddCustomerPage().alertTextVerify("Customer added successfully with customer id :6");
    }

    @And("^I click on 'ok' button on popup\\.$")
    public void iClickOnOkButtonOnPopup() {
        new AddCustomerPage().acceptAlert();
    }

    @And("^I click On 'Open Account' Tab$")
    public void iClickOnOpenAccountTab() throws InterruptedException {
        new BankManagerLoginPage().openAccount();
    }

    @And("^I Select Customer from Dropdown List$")
    public void iSelectCustomerFromDropdownList() {
        new OpenAccountPage().selectFromCustomerDropdown("Bob Alexa");
    }

    @And("^I Select currency 'Pound'$")
    public void iSelectCurrencyPound() {
        new OpenAccountPage().selectFromCurrencyDropdown("Pound");
    }

    @And("^I click on 'process' button$")
    public void iClickOnProcessButton() {
        new OpenAccountPage().clickProcess();
    }


    @And("^I verify account created message 'Account created successfully'$")
    public void iVerifyAccountCreatedMessageAccountCreatedSuccessfully() throws InterruptedException {
       new OpenAccountPage().alertTextVerify("Account created successfully with account Number :1016");
    }

    @And("^I click on 'Home' button$")
    public void iClickOnHomeButton() {
        new OpenAccountPage().backToHomePage();
    }

    @And("^I click on 'Customer Login' Tab$")
    public void iClickOnCustomerLoginTab() {
        new HomePage().clickCustomerLogin();
    }

    @And("^I Select Name from Dropdown List$")
    public void iSelectNameFromDropdownList() {
        new CustomerLoginPage().selectFromYourNameDropdown("Bob Alexa");
    }

    @And("^I click on 'Login' Button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().loginButton();
    }

    @And("^I verify 'Logout' Tab displayed$")
    public void iVerifyLogoutTabDisplayed() throws InterruptedException {
        new AccountPage().verifyLogoutTabDisplayed();
    }

    @And("^I click on 'Logout' button$")
    public void iClickOnLogoutButton() {
        new AccountPage().clickLogoutTab();
    }

    @Then("^I verify 'Your Name' text displayed$")
    public void iVerifyYourNameTextDisplayed() throws InterruptedException {
        new CustomersPage().verifyDisplayNameMessage("Your Name :");
    }

    @And("^I click 'Deposit' tab$")
    public void iClickDepositTab() {
        new AccountPage().clickDepositTab();
    }

    @And("^I enter 'Amount' in amount to be displayed tab$")
    public void iEnterAmountInAmountToBeDisplayedTab() throws InterruptedException {
        new AccountPage().enterAmount("100");
    }

    @And("^I click 'Deposit' button$")
    public void iClickDepositButton() {
        new AccountPage().clickDepositButton();
    }

    @Then("^I verify 'Deposit successfully' message$")
    public void iVerifyDepositSuccessfullyMessage() {
        new AccountPage().verifyDepositMessage("Deposit Successful");
    }

    @And("^I click 'Withdrawl' tab$")
    public void iClickWithdrawlTab() {
        new AccountPage().clickWithdrawalTab();
    }

    @And("^I enter 'Amount' in Amount to be Withdrawn box$")
    public void iEnterAmountInAmountToBeWithdrawnBox() throws InterruptedException {
        new AccountPage().enterAmount("50");
    }

    @And("^I click 'Wthdrawl' button$")
    public void iClickWthdrawlButton() throws InterruptedException {
        new AccountPage().clickWithdrawlButton();
    }

    @Then("^I verify 'Withdraw successfully' message$")
    public void iVerifyWithdrawSuccessfullyMessage() {
        new AccountPage().verifyWithdrawMessage("Transaction successful");
    }
}
