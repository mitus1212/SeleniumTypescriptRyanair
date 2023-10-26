import { By, WebDriver } from "selenium-webdriver";
import { until } from "selenium-webdriver";

export default class MainPage {
  private driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  async navigateToMainPage() {
    //In real  life would be await this.driver.get(`${process.env.BASE_URL}`);
    await this.driver.get("https://www.ryanair.com/ie/en/");
  }

  async clickAcceptAllCookiesButton() {
    const acceptCookiesButtonLocator = By.xpath(
      "//button[@data-ref='cookie.accept-all']"
    );
    const acceptCookiesButton = await this.driver.wait(
      until.elementLocated(acceptCookiesButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(acceptCookiesButton), 1000);
    await acceptCookiesButton.click();
  }

  async clickDepartureButton() {
    const departureButtonLocator = By.id("input-button__departure");
    const departureButton = await this.driver.wait(
      until.elementLocated(departureButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(departureButton), 10000);
    await departureButton.click();
  }

  async clickDepartureCountryValue(country: string) {
    const departureCountryLocator = By.xpath(
      `//span[contains(@data-ref, 'country__name') and contains(text(), '${country}')]`
    );
    const departureCountry = await this.driver.wait(
      until.elementLocated(departureCountryLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(departureCountry), 10000);
    await departureCountry.click();
  }

  async clickDepartureAirportValue(airport: string) {
    const departureAirportLocator = By.xpath(`//span[@data-id='${airport}']`);
    const departureAirport = await this.driver.wait(
      until.elementLocated(departureAirportLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(departureAirport));
    await departureAirport.click();
  }

  async clickDepartureDate(date: string) {
    const departureDateLocator = By.xpath(`//div[@data-id='${date}']`);
    const departureDate = await this.driver.wait(
      until.elementLocated(departureDateLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(departureDate));
    await departureDate.click();
  }

  async clickReturnDate(date: string) {
    const returnDateLocator = By.xpath(`//div[@data-id='${date}']`);
    const returnDate = await this.driver.wait(
      until.elementLocated(returnDateLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(returnDate));
    await returnDate.click();
  }

  async clickDestinationCountryValue(country: string) {
    const destinationCountryLocator = By.xpath(
      `//span[contains(@data-ref, 'country__name') and contains(text(), '${country}')]`
    );
    const destinationCountry = await this.driver.wait(
      until.elementLocated(destinationCountryLocator),
      10000
    );

    await this.driver.wait(until.elementIsVisible(destinationCountry));
    await destinationCountry.click();
  }

  async clickDestinationAirportValue(airport: string) {
    const destinationAirportLocator = By.xpath(`//span[@data-id='${airport}']`);
    const destinationAirport = await this.driver.wait(
      until.elementLocated(destinationAirportLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(destinationAirport));
    await destinationAirport.click();
  }
  async clickNextMonthButton() {
    const increaseChildrenButtonLocator = By.xpath(
      "//div[@data-ref='calendar-btn-next-month']"
    );
    const nextMonthArrow = await this.driver.wait(
      until.elementLocated(increaseChildrenButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(nextMonthArrow));
    await nextMonthArrow.click();
  }

  async clickIncreaseAdultsButton() {
    const increaseAdultButtonLocator = By.xpath(
      "//ry-counter-button[contains(@aria-label, 'Adults+1')]/parent::div"
    );
    const increaseAdultButton = await this.driver.wait(
      until.elementLocated(increaseAdultButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(increaseAdultButton));
    await increaseAdultButton.click();
  }

  async clickIncreaseChildrenButton() {
    const increaseChildrenButtonLocator = By.xpath(
      "//ry-counter-button[contains(@aria-label, 'Children+1')]/parent::div"
    );
    const increaseChildrenButton = await this.driver.wait(
      until.elementLocated(increaseChildrenButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(increaseChildrenButton));
    await increaseChildrenButton.click();
  }

  async clickSearchButton() {
    const increaseChildrenButtonLocator = By.xpath(
      "//button[@data-ref='flight-search-widget__cta']"
    );
    const increaseChildrenButton = await this.driver.wait(
      until.elementLocated(increaseChildrenButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(increaseChildrenButton));
    await increaseChildrenButton.click();
  }

  async selectTheFlightButton() {
    const increaseChildrenButtonLocator = By.xpath(
      "//button[contains(@class,'flight-card-summary__select-btn')]"
    );
    const increaseChildrenButton = await this.driver.wait(
      until.elementLocated(increaseChildrenButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(increaseChildrenButton));
    await increaseChildrenButton.click();
  }

  async selectBasicFareButton() {
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
    const basicFareButtonLocator = By.xpath("//button[@data-e2e='value']");
    const basicFareButton = await this.driver.wait(
      until.elementLocated(basicFareButtonLocator),
      10000
    );
    await this.driver.wait(until.elementIsVisible(basicFareButton));
    await basicFareButton.click();
  }

  async loginHeader() {
    const loginHeaderTextLocator = By.xpath(
      "//h3[contains(text(), 'Log in to')]"
    );
    const loginHeaderText = await this.driver.wait(
      until.elementLocated(loginHeaderTextLocator),
      15000
    );
    await this.driver.wait(until.elementIsVisible(loginHeaderText));
    const loginHeaderLocator = By.xpath(
      "//header[contains(@class, 'login-touchpoint')]"
    );
    const loginHeader = await this.driver.wait(
      until.elementLocated(loginHeaderLocator),
      15000
    );
    await this.driver.wait(until.elementIsVisible(loginHeader));
    return {
      loginHeader,
      loginHeaderText,
    };
  }

  async loginButton() {
    const loginButtonLocator = By.xpath("//button[contains(text(), 'Log in')]");
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
      "//button[contains(text(), 'Sign up')]"
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
}
