import { BasePage } from "../basePage";

const HEADER_LOGIN_BUTTON = "a.login";
const CONTINUE_SECURELY_BUTTON = ".newCustomer .dnnPrimaryAction";
const STAY_ON_LV_PAGE = "#CountryRedirectStayFlag";
const ITEMTOADD =
  '[href="/nike-mc-ladies-training-shoes-273016#colcode=27301608"]';
const ITEM_SIZES = '[class="tooltip sizeButtonli"]';
const ADD_TO_CART_BUTTON = "#ProductStandardAddToBag";

export class MainPage extends BasePage {
  static goToMainPage() {
    cy.clearCookies();
    cy.wait(3000);
    cy.visit("https://lv.sportsdirect.com/");
    cy.wait(5000);
  }

  static stayOnLvPage() {
    this.click(STAY_ON_LV_PAGE); //need this because I'm in Spain now
  }

  static goToAuthenticationPage() {
    this.click(HEADER_LOGIN_BUTTON);
  }

  static goToRegistrationPage() {
    this.click(CONTINUE_SECURELY_BUTTON);
  }

  static addItemToCart() {
    cy.get(ITEMTOADD).click();
    cy.get(ITEM_SIZES).first().click();
    cy.get(ADD_TO_CART_BUTTON).click();
    cy.wait(3000);
  }
}
