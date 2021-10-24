import { BasePage } from "../basePage";

const FIRST_NAME_FIELD = "#Registration_FirstName";
const LAST_NAME_FIELD = "#Registration_LastName";
const REGISTER_EMAIL_FIELD = "#Registration_EmailAddress";
const PASSWORD_FIELD = '[class="password dnnFormRequired"]';
const CONFIRM_PASSWORD_FIELD = "#Registration_ConfirmPassword";
const SUBSCRIBE_CHECKBOX = "#Registration_IsSubscriber";
const REGISTER_BUTTON = ".ImgButWrap";
const USER_DETAILS_EMAIL = "#txtEmailAddress";
const SIGN_OUT_BTN = '[href="/?ctl=logoff"]';

export class AuthPage extends BasePage {
  static registerNewAccount() {
    let email = "tester_" + Math.floor(Math.random() * 1000) + "@testing.com";
    this.type(FIRST_NAME_FIELD, "John");
    this.type(LAST_NAME_FIELD, "Doe123");
    this.type(REGISTER_EMAIL_FIELD, email);
    this.type(PASSWORD_FIELD, "Test.123.");
    this.type(CONFIRM_PASSWORD_FIELD, "Test.123.");
    this.check(SUBSCRIBE_CHECKBOX);
    cy.get(REGISTER_BUTTON).contains("Register").click({ force: true });
    cy.wait(10000);
    this.verifyIfRegistered(email);
  }

  static loginAsRegisteredUser() {
    cy.login("registeredUser");
    this.verifyIfLoggedIn();
  }

  static verifyIfLoggedIn() {
    cy.visit(
      "https://lv.sportsdirect.com/accountinformation/editpersonaldetails"
    );
    cy.get(USER_DETAILS_EMAIL).should("have.value", "tester_663@testing.com");
  }

  static verifyIfRegistered(email) {
    cy.visit(
      "https://lv.sportsdirect.com/login?returnurl=%2faccountinformation"
    );
    cy.visit(
      "https://lv.sportsdirect.com/accountinformation/editpersonaldetails"
    );
    cy.get(USER_DETAILS_EMAIL).should("have.value", email);
  }

  static signOut() {
    cy.get(SIGN_OUT_BTN).contains("Sign Out").click({ force: true });
  }
}
