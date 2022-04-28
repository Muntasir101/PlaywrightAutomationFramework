import { test, expect } from '@playwright/test'

import {loadHomepage, assertText} from '../tests/helpers.spec'

test('custom helpers', async ({ page }) => {
     await loadHomepage(page);
     await assertText(page);
})