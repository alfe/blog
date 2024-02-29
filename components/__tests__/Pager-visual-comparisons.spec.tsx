import { test, expect } from '@playwright/experimental-ct-react';
import Pager from '../Pager';

test.use({ viewport: { width: 800, height: 500 } });

test('Visual comparisons example test', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={3}
      perPage={10}
      href='https://example.com'
      asCallback={page => `https://example.com/page/${page}`}
    />
  );
  await expect(component).toHaveScreenshot();
});