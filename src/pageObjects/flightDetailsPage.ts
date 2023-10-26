import { By, WebDriver } from "selenium-webdriver";
import { until } from "selenium-webdriver";
import { faker } from "@faker-js/faker";
import { sleep } from "../utils/utils";

export default class FlightDetailsPage {
  private driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async selectTheFlightButton() {
    const increaseChildrenButtonLocator = By.xpath(
      "//button[contains(@class,'flight-card-summary__select-btn')]"
    );
    const increaseChildrenButton = await this.driver.wait(
      until.elementLocated(increaseChildrenButtonLocator),
      15000
    );
    await this.driver.wait(until.elementIsVisible(increaseChildrenButton));
    await increaseChildrenButton.click();
  }

  async selectBasicFareButton() {
    await sleep(1000);
    const basicFareButtonLocator = By.xpath(
      "//*[@data-e2e='fare-card-standard']"
    );
    const basicFareButton = await this.driver.wait(
      until.elementLocated(basicFareButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(basicFareButton));
    await basicFareButton.click();
  }

  async continueWithBasicButton() {
    await sleep(1000);
    const basicFareButtonLocator = By.xpath("//button[@data-e2e='value']");
    const basicFareButton = await this.driver.wait(
      until.elementLocated(basicFareButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(basicFareButton));
    await basicFareButton.click();
  }

  async logInLaterButton() {
    await sleep(500);
    const loginLaterButtonLocator = By.xpath(
      "//span[contains(@class, 'login-later')]/ancestor::button[contains(@class, 'login')]"
    );
    const loginLaterButton = await this.driver.wait(
      until.elementLocated(loginLaterButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(loginLaterButton));
    await loginLaterButton.click();
  }

  async titleDropdown(passenger: string) {
    const titleDropdownLocator = By.xpath(
      `(//ry-dropdown[contains(@data-ref, 'pax-details__title')])[${passenger}]`
    );
    const titleDropdown = await this.driver.wait(
      until.elementLocated(titleDropdownLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(titleDropdown));
    await titleDropdown.click();
  }
  async titleValue() {
    const titleValueLocator = By.xpath(
      `//div[contains(@class, 'dropdown-item') and contains(text(), "Mrs")]`
    );
    const titleValue = await this.driver.wait(
      until.elementLocated(titleValueLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(titleValue));
    await titleValue.click();
  }
  async firstNameInput(passenger: string) {
    const firstNameInputLocator = By.xpath(
      `//input[@id="form.passengers.ADT-${Number(passenger) - 1}.name"]`
    );
    const firstNameInput = await this.driver.wait(
      until.elementLocated(firstNameInputLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(firstNameInput));
    await firstNameInput.sendKeys(`${faker.name.firstName()}`);
  }

  async lastNameInput(passenger: string) {
    await sleep(500);
    const lastNameInputLocator = By.xpath(
      `//input[@id="form.passengers.ADT-${Number(passenger) - 1}.surname"]`
    );
    const lastNameInput = await this.driver.wait(
      until.elementLocated(lastNameInputLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(lastNameInput));
    await lastNameInput.sendKeys(`${faker.name.lastName()}`);
  }

  async childFirstNameInput(passenger: string) {
    await sleep(1000);
    const firstNameInputLocator = By.xpath(
      `//input[@id="form.passengers.CHD-${Number(passenger) - 1}.name"]`
    );
    const firstNameInput = await this.driver.wait(
      until.elementLocated(firstNameInputLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(firstNameInput));
    await firstNameInput.sendKeys(`${faker.name.firstName()}`);
  }

  async childLastNameInput(passenger: string) {
    const lastNameInputLocator = By.xpath(
      `//input[@id="form.passengers.CHD-${Number(passenger) - 1}.surname"]`
    );
    const lastNameInput = await this.driver.wait(
      until.elementLocated(lastNameInputLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(lastNameInput));
    await lastNameInput.sendKeys(`${faker.name.lastName()}`);
  }

  async continueButton() {
    await sleep(1000);
    const continueButtonLocator = By.xpath(
      `//button[contains(text(),"Continue")]`
    );
    const continueButton = await this.driver.wait(
      until.elementLocated(continueButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(continueButton));
    await continueButton.click();
  }

  async continueExtrasButton() {
    const continueExtrasButtonLocator = By.xpath(
      `//button[contains(@class,"airport-and-flight")]`
    );
    const continueExtrasButton = await this.driver.wait(
      until.elementLocated(continueExtrasButtonLocator),
      15000
    );
    await this.driver.wait(until.elementIsVisible(continueExtrasButton));
    await continueExtrasButton.click();
  }

  async continueTransportButton() {
    const continueTransportButtonLocator = By.xpath(
      `//button[contains(@class,"transport__cta")]`
    );
    const continueTransportButton = await this.driver.wait(
      until.elementLocated(continueTransportButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(continueTransportButton));
    await continueTransportButton.click();
  }

  async addRecommendedSeatsButton() {
    await sleep(1000);
    const addRecommendedSeatsButtonLocator = By.xpath(
      `//button[contains(text(),"Add recommended seats")]`
    );
    const addRecommendedSeatsButton = await this.driver.wait(
      until.elementLocated(addRecommendedSeatsButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(addRecommendedSeatsButton));
    await addRecommendedSeatsButton.click();
  }

  async noThanksFastTrackButton() {
    await sleep(1000);
    const noThanksFastTrackButtonLocator = By.xpath(
      `//button[contains(@data-ref,"dismiss-cta")]`
    );
    const noThanksFastTrackButton = await this.driver.wait(
      until.elementLocated(noThanksFastTrackButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(noThanksFastTrackButton));
    await noThanksFastTrackButton.click();
  }

  async addBigBagsForAllPassengersButton() {
    const addBigBagsForAllPassengersButtonLocator = By.xpath(
      `//span[@data-at="both-all-BBG-add"]`
    );
    const addBigBagsForAllPassengersButton = await this.driver.wait(
      until.elementLocated(addBigBagsForAllPassengersButtonLocator),
      10000
    );
    await this.driver.wait(
      until.elementIsVisible(addBigBagsForAllPassengersButton)
    );
    await addBigBagsForAllPassengersButton.click();
  }

  async addSmallBagsForAllPassengersButton() {
    const addSmallBagsForAllPassengersButtonLocator = By.xpath(
      `//ry-radio-circle-button[@data-at="both-all-SBAG-add"]`
    );
    const addSmallBagsForAllPassengersButton = await this.driver.wait(
      until.elementLocated(addSmallBagsForAllPassengersButtonLocator),
      15000
    );
    await this.driver.wait(
      until.elementIsVisible(addSmallBagsForAllPassengersButton)
    );
    await addSmallBagsForAllPassengersButton.click();
  }

  async continueWithBagsButton() {
    const continueWithBagsButtonLocator = By.xpath(
      `//button[@data-ref="bags-continue-button"]`
    );
    const continueWithBagsButton = await this.driver.wait(
      until.elementLocated(continueWithBagsButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(continueWithBagsButton));
    await continueWithBagsButton.click();
  }

  async okayGotItButton() {
    const okayGotItButtonLocator = By.xpath(
      `//button[contains(text(), 'Okay, got it.')]`
    );
    const okayGotItButton = await this.driver.wait(
      until.elementLocated(okayGotItButtonLocator),
      15000
    );
    await this.driver.wait(until.elementIsVisible(okayGotItButton));
    await okayGotItButton.click();
  }

  async loginHeader() {
    const loginHeaderTextLocator = By.xpath(
      "//h3[contains(text(), 'Log in ')]"
    );
    const loginHeaderText = await this.driver.wait(
      until.elementLocated(loginHeaderTextLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(loginHeaderText));
    const loginHeaderLocator = By.xpath(
      "//span[contains(text(), 'Make it simple with myRyanair')]"
    );
    const loginHeader = await this.driver.wait(
      until.elementLocated(loginHeaderLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(loginHeader));
    return {
      loginHeader,
      loginHeaderText,
    };
  }

  async loginButton() {
    const loginButtonLocator = By.xpath(
      "//button[contains(@class, 'auth-submit__button')]"
    );
    const loginButton = await this.driver.wait(
      until.elementLocated(loginButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(loginButton));

    return {
      loginButton,
    };
  }

  async signUpButton() {
    const signUpButtonLocator = By.xpath(
      "//button[@data-ref='signup_login_signup']"
    );
    const signUpButton = await this.driver.wait(
      until.elementLocated(signUpButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(signUpButton));

    return {
      signUpButton,
    };
  }

  async logoIcon() {
    const logoIconLocator = By.xpath("//icon[@iconid='ryanair-logomark']");
    const logoIcon = await this.driver.wait(
      until.elementLocated(logoIconLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(logoIcon));

    return {
      logoIcon,
    };
  }

  async googleLoginButton() {
    const googleLoginButtonLocator = By.xpath(
      "//button[contains(@class, 'google')]/descendant::span[contains(text(), 'Continue with Google')]"
    );
    const googleLoginButton = await this.driver.wait(
      until.elementLocated(googleLoginButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(googleLoginButton));
    return {
      googleLoginButton,
    };
  }
  async facebookLoginButton() {
    const facebookLoginButtonLocator = By.xpath(
      "//button[contains(@class, 'facebook')]/descendant::span[contains(text(), 'Continue with Facebook')]"
    );
    const facebookLoginButton = await this.driver.wait(
      until.elementLocated(facebookLoginButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(facebookLoginButton));
    return {
      facebookLoginButton,
    };
  }
  async paypalLoginButton() {
    const paypalLoginButtonLocator = By.xpath(
      "//button[contains(@class, 'paypal')]/descendant::span[contains(text(), 'Continue with PayPal')]"
    );
    const paypalLoginButton = await this.driver.wait(
      until.elementLocated(paypalLoginButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(paypalLoginButton));
    return {
      paypalLoginButton,
    };
  }
  async emailInputLoginPopup() {
    const emailInputLoginPopupLocator = By.xpath("//input[@name='email']");
    const emailInputLoginPopup = await this.driver.wait(
      until.elementLocated(emailInputLoginPopupLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(emailInputLoginPopup));
    return {
      emailInputLoginPopup,
    };
  }

  async passwordInputLoginPopup() {
    const passwordInputLoginPopupLocator = By.xpath(
      "//input[@name='password']"
    );
    const passwordInputLoginPopup = await this.driver.wait(
      until.elementLocated(passwordInputLoginPopupLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(passwordInputLoginPopup));
    return {
      passwordInputLoginPopup,
    };
  }
}
