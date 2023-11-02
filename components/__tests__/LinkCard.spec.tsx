/* eslint-disable react/no-children-prop */
import { test, expect } from '@playwright/experimental-ct-react';
import LinkCard from '../LinkCard';

test.use({ viewport: { width: 800, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(
    <LinkCard
      href='https://example.com'
      children={['https://example.com']}
      ogpDatas={[]}
    />
  );
  await expect(component).toContainText('https://example.com');
});
