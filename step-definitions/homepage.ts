import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";

Given("I view {string}", async function (this: OurWorld, url: string) {
  await this.page.goto(`https://${url}`);
});

When(/^I click '([^']*)'$/, async function (this: OurWorld, text: string) {
  await this.page.$eval(`"${text}"`, (element) => {
    element.scrollIntoView();
  });
  await this.page.click(`"${text}"`);
});

Then("I expect to be on the accessibility page", async function (
  this: OurWorld
) {
  const heading1Text = (await this.page.textContent("h1")) as string;
  assert.strictEqual(
    trimExcessWhiteSpace(heading1Text),
    "Accessibility statement"
  );
});

const trimExcessWhiteSpace = (s: string) =>
  s.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
