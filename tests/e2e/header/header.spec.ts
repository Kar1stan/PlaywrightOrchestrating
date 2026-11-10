import { test, expect } from '@playwright/test';
import { AsosHeaderPage } from '../../pages/asos-header.page';

test.describe('ASOS header', () => {
  let header: AsosHeaderPage;

  test.beforeEach(async ({ page }) => {
    header = new AsosHeaderPage(page);
    await header.goto();
  });

  test('opens the women category', async ({ page }) => {
    await header.womenLink.click();

    await expect(page).toHaveURL(/\/women\/(?:\?.*)?$/);
  });

  test('opens the men category', async ({ page }) => {
    await header.menLink.click();

    await expect(page).toHaveURL(/\/men\/(?:\?.*)?$/);
  });

  test('submits a search from the header', async ({ page }) => {
    const query = 'denim jacket';

    await header.searchFor(query);

    await expect(page).toHaveURL(/\/search\//);
    await expect(header.searchInput).toHaveValue(query);
  });

  test('opens the account menu', async () => {
    await header.openAccountMenu();
  });

  test('opens saved items', async ({ page }) => {
    await header.savedItemsLink.click();

    await expect(page).toHaveURL(/\/saved-lists(?:\/|\?|$)/);
  });

  test('opens the bag', async ({ page }) => {
    await header.bagLink.click();

    await expect(page).toHaveURL(/\/bag(?:\/|\?|$)/);
  });
});
