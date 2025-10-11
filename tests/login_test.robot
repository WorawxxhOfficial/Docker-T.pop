*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Test Login Page Loads
    Open Browser    http://localhost    chrome
    Page Should Contain    Login
    [Teardown]    Close Browser
