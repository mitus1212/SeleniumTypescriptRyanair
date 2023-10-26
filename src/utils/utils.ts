import { Capabilities } from "selenium-webdriver";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function setupBrowserCapabilities(browserType: string): Capabilities {
  let browserCapabilities: Capabilities;

  if (browserType === "chrome") {
    browserCapabilities = Capabilities.chrome();
    browserCapabilities.set("goog:chromeOptions", {
      args: [
        "--window-size=1920,1200",
        "--no-sandbox",
        "--allow-insecure-localhost",
        "--log-level=3",
        "--incognito",
        "deny-permission-prompts",
      ],
    });
  } else if (browserType === "firefox") {
    browserCapabilities = Capabilities.firefox();
  } else {
    throw new Error(`Unsupported browser type: ${browserType}`);
  }

  return browserCapabilities;
}

export function countTimesToClick(startDate: string, endDate: string): number {
  const currentYear = Number(startDate.slice(0, 4));
  const providedYear = Number(endDate.slice(0, 4));
  let providedMonth: number;
  let currentMonth: number;
  let timesToClick = 0;

  if (Number(endDate.slice(5, 7)) < 10) {
    providedMonth = Number(endDate.slice(6, 7));
  } else {
    providedMonth = Number(endDate.slice(5, 7));
  }

  if (Number(startDate.slice(5, 7)) < 10) {
    currentMonth = Number(startDate.slice(6, 7));
  } else {
    currentMonth = Number(startDate.slice(5, 7));
  }

  if (currentYear < providedYear) {
    timesToClick = providedMonth + 12 - currentMonth;
  } else {
    timesToClick = providedMonth - currentMonth;
  }
  return timesToClick;
}
