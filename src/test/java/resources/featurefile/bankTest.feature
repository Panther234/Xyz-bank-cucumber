Feature: Bank Test

  Background: I am on Homepage

  @Sanity @Regression
  Scenario: Verify that Bank Manager should Add Customer Successfully
    When I click on 'Bank Manager Login' Bank Manager Tab
    And I click on 'Add Customer' Add Customer tab
    And I enter FirstName in first name field
    And I enter LastName in last name field
    And I enter PostCode in postcode field
    And I click on 'Add Customer' Button
    And I verify message 'Customer added successfully'
    Then I click on 'ok' button on popup.

  @Smoke @Regression
  Scenario: Verify that Bank Manager should open account Successfully
    When I click on 'Bank Manager Login' Bank Manager Tab
    And I click on 'Add Customer' Add Customer tab
    And I enter FirstName in first name field
    And I enter LastName in last name field
    And I enter PostCode in postcode field
    And I click on 'Add Customer' Button
    And I click on 'ok' button on popup.
    And  I click On 'Open Account' Tab
    And I Select Customer from Dropdown List
    And I Select currency 'Pound'
    And I click on 'process' button
    And I verify account created message 'Account created successfully'
    Then I click on 'ok' button on popup.

  @Smoke @Regression
  Scenario: Customer should login and logout successfully
     When I click on 'Bank Manager Login' Bank Manager Tab
      And I click on 'Add Customer' Add Customer tab
      And I enter FirstName in first name field
      And I enter LastName in last name field
      And I enter PostCode in postcode field
      And I click on 'Add Customer' Button
      And I click on 'ok' button on popup.
      And I click On 'Open Account' Tab
      And I Select Customer from Dropdown List
      And I Select currency 'Pound'
      And I click on 'process' button
      And I verify account created message 'Account created successfully'
      And I click on 'ok' button on popup.
      And I click on 'Home' button
      And I click on 'Customer Login' Tab
      And I Select Name from Dropdown List
      And I click on 'Login' Button
      And I verify 'Logout' Tab displayed
      And I click on 'Logout' button
      Then I verify 'Your Name' text displayed

  @Regression
  Scenario: Verify that Customer should Deposit Money Successfully
    When I click on 'Bank Manager Login' Bank Manager Tab
    And I click on 'Add Customer' Add Customer tab
    And I enter FirstName in first name field
    And I enter LastName in last name field
    And I enter PostCode in postcode field
    And I click on 'Add Customer' Button
    And I click on 'ok' button on popup.
    And  I click On 'Open Account' Tab
    And I Select Customer from Dropdown List
    And I Select currency 'Pound'
    And I click on 'process' button
    And I verify account created message 'Account created successfully'
    And I click on 'ok' button on popup.
    And I click on 'Home' button
    And I click on 'Customer Login' Tab
    And I Select Name from Dropdown List
    And I click on 'Login' Button
    And I click 'Deposit' tab
    And I enter 'Amount' in amount to be displayed tab
    And I click 'Deposit' button
    Then I verify 'Deposit successfully' message

  @Regression
  Scenario: Verify that Customer should Withdraw Money Successfully
    When I click on 'Bank Manager Login' Bank Manager Tab
    And I click on 'Add Customer' Add Customer tab
    And I enter FirstName in first name field
    And I enter LastName in last name field
    And I enter PostCode in postcode field
    And I click on 'Add Customer' Button
    And I click on 'ok' button on popup.
    And  I click On 'Open Account' Tab
    And I Select Customer from Dropdown List
    And I Select currency 'Pound'
    And I click on 'process' button
    And I verify account created message 'Account created successfully'
    And I click on 'ok' button on popup.
    And I click on 'Home' button
    And I click on 'Customer Login' Tab
    And I Select Name from Dropdown List
    And I click on 'Login' Button
    And I click 'Deposit' tab
    And I enter 'Amount' in amount to be displayed tab
    And I click 'Deposit' button
    And I click 'Withdrawl' tab
    And I enter 'Amount' in Amount to be Withdrawn box
    And I click 'Wthdrawl' button
    Then I verify 'Withdraw successfully' message


