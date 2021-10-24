import { MainPage } from "../pageObjects/pages/mainPage";
import { AuthPage } from "../pageObjects/pages/authPage";
import { OrderPage } from "../pageObjects/pages/orderPage";

context("Authentication cases", () => {
  it("Checkout as a guest user and check 'Please complete card details' error", () => {
    MainPage.stayOnLvPage();
    MainPage.addItemToCart();
    OrderPage.checkOut();
  });

  it("Log in with a registered user", () => {
    MainPage.stayOnLvPage();
    MainPage.goToAuthenticationPage();
    AuthPage.loginAsRegisteredUser();
  });

  it("Create a new user", () => {
    MainPage.stayOnLvPage();
    MainPage.goToAuthenticationPage();
    MainPage.goToRegistrationPage();
    AuthPage.registerNewAccount();
  });
});
