import { Given, When } from "@cucumber/cucumber";
import MainPage from "../pageObjects/mainPage";
import { Builder, WebDriver } from "selenium-webdriver";
import { countTimesToClick, setupBrowserCapabilities } from "../utils/utils";
import dotenv from "dotenv";
import FlightDetailsPage from "../pageObjects/flightDetailsPage";

dotenv.config();

let departureDate: string;

export let driver: WebDriver;
let page: MainPage;
export let flightDetailsPage: FlightDetailsPage;

const browserType = `${process.env.BROWSER}`;

Given("the user is on the main page", { timeout: 2 * 5000 }, async () => {
  driver = await new Builder()
    .forBrowser(browserType)
    .withCapabilities(setupBrowserCapabilities(browserType))
    .build();
  page = new MainPage(driver);
  flightDetailsPage = new FlightDetailsPage(driver);
  await page.navigateToMainPage();
});

When("the user accepts the cookies", async () => {
  await page.clickAcceptAllCookiesButton();
});

When(
  /^the user selects the '([^"]*)' as the departure country$/,
  async (country: string) => {
    await page.clickDepartureButton();
    await page.clickDepartureCountryValue(country);
  }
);

When(
  /^the user selects the '([^"]*)' as the departure airport$/,
  async (airport: string) => {
    await page.clickDepartureAirportValue(airport);
  }
);

When(
  /^the user selects the '([^"]*)' as a destination country$/,
  async (country: string) => {
    await page.clickDestinationCountryValue(country);
  }
);

When(
  /^the user selects the '([^"]*)' as the destination airport$/,
  async (airport: string) => {
    await page.clickDestinationAirportValue(airport);
  }
);

When(
  /^the user selects the '([^"]*)' as the departure date$/,
  { timeout: 3 * 5000 },
  async (date: string) => {
    const timesToClick = countTimesToClick(
      new Date().toJSON().slice(0, 10),
      date
    );

    for (let i = 0; i < timesToClick; i++) {
      await page.clickNextMonthButton();
    }
    await page.clickDepartureDate(date);
    departureDate = date;
  }
);

When(
  /^the user selects the '([^"]*)' as the return date$/,
  { timeout: 3 * 5000 },
  async (date: string) => {
    departureDate;
    const timesToClick = countTimesToClick(departureDate, date);

    for (let i = 0; i < timesToClick; i++) {
      await page.clickNextMonthButton();
    }
    await page.clickDepartureDate(date);
  }
);

When(
  /^the user selects '([^"]*)' number of adults$/,
  async (adults: string) => {
    for (let i = 0; i < Number(adults) - 1; i++) {
      await page.clickIncreaseAdultsButton();
    }
  }
);

When(
  /^the user selects '([^"]*)' number of children$/,
  async (children: string) => {
    for (let i = 0; i < Number(children); i++) {
      await page.clickIncreaseChildrenButton();
    }
  }
);

When(/^the user clicks the search button$/, async () => {
  await page.clickSearchButton();
});
