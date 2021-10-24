import { BasePage } from "../basePage";

const ORDER_SUMMARY_CONTINUE_BUTTON = "#divContinueSecurely .ContinueOn";
const GUEST_USER_EMAIL = "#Guest_EmailAddress";
const GUEST_CONTINUE_BTN = '[class|="dnnPrimaryAction"]';
const DELIVERY_CONTINUE_BTN =
  '[class="col-xs-12 col-md-4 CheckoutLeft"] [class="AddressContainBut NewAddressContainBut"] [value="Continue Securely"]';
const DELIVERY_OPTIONS_CONTINUE_BTN =
  '[class="ProgressButContain col-xs-12 hidden-xs hidden-sm"] .ContinueOn';
const ADD_NEW_CARD_BTN = "#NewCardPaymentForm";
const PAYMENT_CONTINUE_BTN = "#cardSubmit";
const CARD_DETAILS_INCOMPLETE_ERROR = "#cardDetailsIncompleteError";

export class OrderPage extends BasePage {
  static checkOut() {
    let email = "testing" + Math.floor(Math.random() * 1000) + "@testing.com";
    cy.visit("https://lv.sportsdirect.com/cart");
    cy.get(ORDER_SUMMARY_CONTINUE_BUTTON).click();
    this.type(GUEST_USER_EMAIL, email);
    cy.get(GUEST_CONTINUE_BTN).click();
    this.enterDeliveryData();
    cy.get(DELIVERY_CONTINUE_BTN).click({ force: true });
    cy.get(DELIVERY_OPTIONS_CONTINUE_BTN).first().click({ force: true });
    cy.get(ADD_NEW_CARD_BTN).click();
    cy.get(PAYMENT_CONTINUE_BTN).click();
    cy.get(CARD_DETAILS_INCOMPLETE_ERROR)
      .should("be.visible")
      .should("have.text", "Please complete the card details to continue.");
  }

  static enterDeliveryData() {
    cy.fillDeliveryData("deliveryData");
  }
}
