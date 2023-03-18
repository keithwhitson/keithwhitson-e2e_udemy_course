import { Before, BeforeAll, AfterAll, After } from "@cucumber/cucumber";
import { devices, webkit } from "playwright";
import { OurWorld } from "./types";

BeforeAll(async function () {
  global.browser = await webkit.launch({
    headless: false,
    slowMo: 50,
  });
});

AfterAll(async function () {
  await global.browser.close();
});

Before(async function (this: OurWorld) {
  const pixel2 = devices["Pixel 2"];
  this.context = await global.browser.newContext({
    viewport: pixel2.viewport,
    userAgent: pixel2.userAgent,
  });
  this.page = await this.context.newPage();
});

After(async function (this: OurWorld) {
  await this.page.close();
  await this.context.close();
});
