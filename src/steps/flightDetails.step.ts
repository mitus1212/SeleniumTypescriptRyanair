import { When, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { flightDetailsPage } from "./searchSteps.step";

When(/^the user selects the flights$/, { timeout: 3 * 5000 }, async () => {
  await flightDetailsPage.selectTheFlightButton();
  await flightDetailsPage.selectTheFlightButton();
});

When(/^the user selects Basic Fares$/, async () => {
  await flightDetailsPage.selectBasicFareButton();
});

When(
  /^the user clicks the Continue With Basic button$/,
  { timeout: 2 * 5000 },
  async () => {
    await flightDetailsPage.continueWithBasicButton();
  }
);

Then(/^the user sees a login popup$/, { timeout: 4 * 5000 }, async () => {
  expect(await flightDetailsPage.loginHeader()).to.exist;
  expect(await flightDetailsPage.loginButton()).to.exist;
  expect(await flightDetailsPage.signUpButton()).to.exist;
  expect(await flightDetailsPage.logoIcon()).to.exist;
  expect(await flightDetailsPage.googleLoginButton()).to.exist;
  expect(await flightDetailsPage.paypalLoginButton()).to.exist;
  expect(await flightDetailsPage.facebookLoginButton()).to.exist;
  expect(await flightDetailsPage.emailInputLoginPopup()).to.exist;
  expect(await flightDetailsPage.passwordInputLoginPopup()).to.exist;
});

When(
  /^the user clicks the Login Later button$/,
  { timeout: 2 * 5000 },
  async () => {
    await flightDetailsPage.logInLaterButton();
  }
);

When(
  /^the user clicks the title drodpown for '([^"]*)' passenger$/,
  async (passenger) => {
    await flightDetailsPage.titleDropdown(passenger);
  }
);

When(
  /^the user clicks the Title for passenger$/,
  { timeout: 2 * 5000 },
  async () => {
    await flightDetailsPage.titleValue();
  }
);

When(
  /^the user provides the First Name for '([^"]*)' passenger$/,
  async (passenger) => {
    await flightDetailsPage.firstNameInput(passenger);
  }
);

When(
  /^the user provides the Last Name for '([^"]*)' passenger$/,
  async (passenger) => {
    await flightDetailsPage.lastNameInput(passenger);
  }
);

When(
  /^the user provides the First Name for '([^"]*)' child$/,
  async (child) => {
    await flightDetailsPage.childFirstNameInput(child);
  }
);

When(/^the user provides the Last Name for '([^"]*)' child$/, async (child) => {
  await flightDetailsPage.childLastNameInput(child);
});

When(/^the user clicks the Continue button$/, async () => {
  await flightDetailsPage.continueButton();
});

When(/^the user clicks the Add Recommended Seats button$/, async () => {
  await flightDetailsPage.addRecommendedSeatsButton();
});

When(
  /^the user clicks the No Thanks Fast Track button$/,
  { timeout: 3 * 5000 },
  async () => {
    await flightDetailsPage.noThanksFastTrackButton();
  }
);

When(
  /^the user chooses small bags for all passengers$/,
  { timeout: 3 * 5000 },
  async () => {
    await flightDetailsPage.addSmallBagsForAllPassengersButton();
  }
);

When(
  /^the user chooses big bags for all passengers$/,
  { timeout: 2 * 5000 },
  async () => {
    await flightDetailsPage.addBigBagsForAllPassengersButton();
  }
);

When(/^the user click Okay Got It button$/, { timeout: 3 * 5000 }, async () => {
  await flightDetailsPage.okayGotItButton();
});

When(
  /^the user clicks the Continue button on the extras page$/,
  { timeout: 3 * 5000 },
  async () => {
    await flightDetailsPage.continueExtrasButton();
  }
);

When(
  /^the user clicks the Continue button on the transport page$/,
  async () => {
    await flightDetailsPage.continueTransportButton();
  }
);
