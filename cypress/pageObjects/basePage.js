export class BasePage {
  static click(selector) {
    cy.get(selector).click();
  }

  static type(selector, text) {
    cy.get(selector).type(text);
  }

  static check(selector) {
    cy.get(selector).check();
  }

  static hasText(selector, text) {
    cy.get(selector).should("have.text", text);
  }
}
