$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/bankTest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11190574800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify that Bank Manager should Add Customer Successfully",
  "description": "",
  "id": "bank-test;verify-that-bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Sanity"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click on \u0027Bank Manager Login\u0027 Bank Manager Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Add Customer\u0027 Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter PostCode in postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on \u0027Add Customer\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify message \u0027Customer added successfully\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginBankManagerTab()"
});
formatter.result({
  "duration": 1141995200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerAddCustomerTab()"
});
formatter.result({
  "duration": 383363500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterFirstNameInFirstNameField()"
});
formatter.result({
  "duration": 490525400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterLastNameInLastNameField()"
});
formatter.result({
  "duration": 239396100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterPostCodeInPostcodeField()"
});
formatter.result({
  "duration": 319057800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 175850100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyMessageCustomerAddedSuccessfully()"
});
formatter.result({
  "duration": 34904300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 56997100,
  "status": "passed"
});
formatter.after({
  "duration": 1741400,
  "status": "passed"
});
formatter.before({
  "duration": 4521760400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that Bank Manager should open account Successfully",
  "description": "",
  "id": "bank-test;verify-that-bank-manager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Smoke"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click on \u0027Bank Manager Login\u0027 Bank Manager Tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on \u0027Add Customer\u0027 Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter FirstName in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter LastName in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter PostCode in postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \u0027Add Customer\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click On \u0027Open Account\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select Customer from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select currency \u0027Pound\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on \u0027process\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify account created message \u0027Account created successfully\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginBankManagerTab()"
});
formatter.result({
  "duration": 1077717000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerAddCustomerTab()"
});
formatter.result({
  "duration": 434489200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterFirstNameInFirstNameField()"
});
formatter.result({
  "duration": 1362082000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterLastNameInLastNameField()"
});
formatter.result({
  "duration": 310480800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterPostCodeInPostcodeField()"
});
formatter.result({
  "duration": 387232500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 204122000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 16273900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 164944000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCustomerFromDropdownList()"
});
formatter.result({
  "duration": 546281000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 116339300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 119581000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyAccountCreatedMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 19431000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 83330600,
  "status": "passed"
});
formatter.after({
  "duration": 107500,
  "status": "passed"
});
formatter.before({
  "duration": 6814864200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 33,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@Smoke"
    },
    {
      "line": 32,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I click on \u0027Bank Manager Login\u0027 Bank Manager Tab",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click on \u0027Add Customer\u0027 Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter FirstName in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter LastName in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter PostCode in postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on \u0027Add Customer\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click On \u0027Open Account\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Select Customer from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Select currency \u0027Pound\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on \u0027process\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify account created message \u0027Account created successfully\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on \u0027Home\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on \u0027Customer Login\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I Select Name from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on \u0027Login\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I verify \u0027Logout\u0027 Tab displayed",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on \u0027Logout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I verify \u0027Your Name\u0027 text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginBankManagerTab()"
});
formatter.result({
  "duration": 1600092700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerAddCustomerTab()"
});
formatter.result({
  "duration": 2309091900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterFirstNameInFirstNameField()"
});
formatter.result({
  "duration": 1321181000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterLastNameInLastNameField()"
});
formatter.result({
  "duration": 399858100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterPostCodeInPostcodeField()"
});
formatter.result({
  "duration": 398984300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 242516100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 38209700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 356291000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCustomerFromDropdownList()"
});
formatter.result({
  "duration": 1005776300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 218762000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 196993600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyAccountCreatedMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 15003900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 45514700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomeButton()"
});
formatter.result({
  "duration": 255571600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 154480800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectNameFromDropdownList()"
});
formatter.result({
  "duration": 2289297100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 105466100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyLogoutTabDisplayed()"
});
formatter.result({
  "duration": 64290400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 1424890400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyYourNameTextDisplayed()"
});
formatter.result({
  "duration": 45293800,
  "status": "passed"
});
formatter.after({
  "duration": 36800,
  "status": "passed"
});
formatter.before({
  "duration": 6028527100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 56,
  "name": "Verify that Customer should Deposit Money Successfully",
  "description": "",
  "id": "bank-test;verify-that-customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "I click on \u0027Bank Manager Login\u0027 Bank Manager Tab",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "I click on \u0027Add Customer\u0027 Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter FirstName in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I enter LastName in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I enter PostCode in postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on \u0027Add Customer\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I click On \u0027Open Account\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I Select Customer from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I Select currency \u0027Pound\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click on \u0027process\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I verify account created message \u0027Account created successfully\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on \u0027Home\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on \u0027Customer Login\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I Select Name from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I click on \u0027Login\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click \u0027Deposit\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I enter \u0027Amount\u0027 in amount to be displayed tab",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I click \u0027Deposit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I verify \u0027Deposit successfully\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginBankManagerTab()"
});
formatter.result({
  "duration": 2622241800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerAddCustomerTab()"
});
formatter.result({
  "duration": 1260183500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterFirstNameInFirstNameField()"
});
formatter.result({
  "duration": 2384008000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterLastNameInLastNameField()"
});
formatter.result({
  "duration": 170708900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterPostCodeInPostcodeField()"
});
formatter.result({
  "duration": 273589000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 110258100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 46196900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 210867400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCustomerFromDropdownList()"
});
formatter.result({
  "duration": 906365100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 146223800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 181424700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyAccountCreatedMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 32703200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 59497300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomeButton()"
});
formatter.result({
  "duration": 249589400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 162100900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectNameFromDropdownList()"
});
formatter.result({
  "duration": 1897435600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 198404900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickDepositTab()"
});
formatter.result({
  "duration": 2441207000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterAmountInAmountToBeDisplayedTab()"
});
formatter.result({
  "duration": 2402556400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickDepositButton()"
});
formatter.result({
  "duration": 93643800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyDepositSuccessfullyMessage()"
});
formatter.result({
  "duration": 62320200,
  "status": "passed"
});
formatter.after({
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 4599759200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 80,
  "name": "Verify that Customer should Withdraw Money Successfully",
  "description": "",
  "id": "bank-test;verify-that-customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "I click on \u0027Bank Manager Login\u0027 Bank Manager Tab",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "I click on \u0027Add Customer\u0027 Add Customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I enter FirstName in first name field",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter LastName in last name field",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I enter PostCode in postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I click on \u0027Add Customer\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I click On \u0027Open Account\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I Select Customer from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I Select currency \u0027Pound\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I click on \u0027process\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I verify account created message \u0027Account created successfully\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "I click on \u0027ok\u0027 button on popup.",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "I click on \u0027Home\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "I click on \u0027Customer Login\u0027 Tab",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "I Select Name from Dropdown List",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "I click on \u0027Login\u0027 Button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "I click \u0027Deposit\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I enter \u0027Amount\u0027 in amount to be displayed tab",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I click \u0027Deposit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I click \u0027Withdrawl\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I enter \u0027Amount\u0027 in Amount to be Withdrawn box",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I click \u0027Wthdrawl\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "I verify \u0027Withdraw successfully\u0027 message",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestStep.iClickOnBankManagerLoginBankManagerTab()"
});
formatter.result({
  "duration": 2308465800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerAddCustomerTab()"
});
formatter.result({
  "duration": 2035007800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterFirstNameInFirstNameField()"
});
formatter.result({
  "duration": 1080198100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterLastNameInLastNameField()"
});
formatter.result({
  "duration": 296532800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterPostCodeInPostcodeField()"
});
formatter.result({
  "duration": 266844700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 167758200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 18124300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 243037400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCustomerFromDropdownList()"
});
formatter.result({
  "duration": 3762768500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 358801800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnProcessButton()"
});
formatter.result({
  "duration": 236668900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyAccountCreatedMessageAccountCreatedSuccessfully()"
});
formatter.result({
  "duration": 51235100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnOkButtonOnPopup()"
});
formatter.result({
  "duration": 65605600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnHomeButton()"
});
formatter.result({
  "duration": 282600500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 162765000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iSelectNameFromDropdownList()"
});
formatter.result({
  "duration": 2061982600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 147738500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickDepositTab()"
});
formatter.result({
  "duration": 940195500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterAmountInAmountToBeDisplayedTab()"
});
formatter.result({
  "duration": 2091324600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickDepositButton()"
});
formatter.result({
  "duration": 90391500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickWithdrawlTab()"
});
formatter.result({
  "duration": 78796700,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iEnterAmountInAmountToBeWithdrawnBox()"
});
formatter.result({
  "duration": 2100552400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iClickWthdrawlButton()"
});
formatter.result({
  "duration": 1112469100,
  "status": "passed"
});
formatter.match({
  "location": "BankTestStep.iVerifyWithdrawSuccessfullyMessage()"
});
formatter.result({
  "duration": 42269300,
  "status": "passed"
});
formatter.after({
  "duration": 66900,
  "status": "passed"
});
});