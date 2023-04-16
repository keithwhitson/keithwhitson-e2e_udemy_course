import { Locator, Page } from '@playwright/test'

export class FirstWebsitePage {
    
    readonly page: Page
    readonly headerText: Locator
    readonly browserFirstWebsite: Locator
    readonly pageTitle: Locator 

    constructor(page: Page) {
        this.page = page
        this.headerText = page.locator('h1')
        this.browserFirstWebsite = page.getByText('Browse the first website', { exact: true })
        this.pageTitle = page.locator('title')
    }

    async goto(url: string) {
        await this.page.goto(url)
    }


}