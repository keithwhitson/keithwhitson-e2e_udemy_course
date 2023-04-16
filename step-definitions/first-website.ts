import { Given, When, Then, Then as And, Before, BeforeAll } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";
import { FirstWebsitePage } from "../page-objects/first-website";

Given(/^I go to (.+)$/, async function (this: OurWorld, url: string) {
    const firstWebsitePage = new FirstWebsitePage(this.page);
    await firstWebsitePage.goto(`${url}`);
    await this.page.waitForTimeout(2000);
});

Then(/^the h1 header equals (.+)$/, async function (this: OurWorld, header: string) {
    const firstWebsitePage = new FirstWebsitePage(this.page);
    assert.equal(await firstWebsitePage.headerText.textContent(), header);
    await this.page.waitForTimeout(2000);
});

When(/^I click (.+)$/, async function (this: OurWorld, text: string) {
    const firstWebsitePage = new FirstWebsitePage(this.page);
    await firstWebsitePage.browserFirstWebsite.click();
    await this.page.waitForTimeout(2000);
});

Then(/^the url is (.+)$/, async function (this: OurWorld, url: string) {
    const firstWebsitePage = new FirstWebsitePage(this.page);
    const url_ = firstWebsitePage.page.url();
    assert.equal(firstWebsitePage.page.url(), url);
    await this.page.waitForTimeout(2000);
});

And(/^the title is (.+)$/, async function (this: OurWorld, title: string) {
    const firstWebsitePage = new FirstWebsitePage(this.page);
    const title_ = await firstWebsitePage.pageTitle.textContent();
    assert.equal(title, title_);
    await this.page.waitForTimeout(2000);
});

Before(async function (this: OurWorld, scenario) {
    console.log("Calling 'Before' hook")
    console.log("from",scenario.pickle.name)    
    console.log()
});

Before({tags:'@special'},async function (this: OurWorld, scenario) {
    console.log("Calling @special 'Before' hook")
    console.log("from",scenario.pickle.name)    
    console.log()
});

BeforeAll(async function (this: OurWorld) {
    console.log("Calling 'BeforeAll' hook")
    console.log()
});