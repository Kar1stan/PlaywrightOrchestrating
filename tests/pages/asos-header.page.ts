import { expect, Locator, Page } from '@playwright/test';

export class AsosHeaderPage {
  readonly page: Page;
  readonly header: Locator;
  readonly womenLink: Locator;
  readonly menLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly accountButton: Locator;
  readonly savedItemsLink: Locator;
  readonly bagLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('banner');
    this.womenLink = this.header.getByRole('link', { name: 'WOMEN', exact: true });
    this.menLink = this.header.getByRole('link', { name: 'MEN', exact: true });
    this.searchInput = this.header.getByRole('searchbox', {
      name: 'Search for items and brands',
    });
    this.searchButton = this.header.getByRole('button', { name: 'Search' });
    this.accountButton = this.header.getByRole('button', { name: 'My Account' });
    this.savedItemsLink = this.header.getByRole('link', { name: 'Saved Items' });
    this.bagLink = this.header.getByRole('link', { name: /^Bag\b/ });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
    await expect(
      this.page.getByRole('heading', { name: 'ASOS', exact: true }),
      'ASOS homepage did not render; check for an access-denied or network error',
    ).toBeVisible();
  }

  async searchFor(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  async openAccountMenu(): Promise<void> {
    await this.accountButton.click();
    await expect(this.accountButton).toHaveAttribute('aria-expanded', 'true');
    await expect(this.page.getByText('Welcome to ASOS', { exact: true })).toBeVisible();
  }
}
