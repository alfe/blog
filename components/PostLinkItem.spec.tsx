import { test, expect } from '@playwright/experimental-ct-react';
import PostLinkItem from './PostLinkItem';

test.use({ viewport: { width: 800, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(
    <PostLinkItem
      to='https://example.com'
      title='Example Post'
      published="2022-01-01T00:00:00.000Z"
    />
  );
  await expect(component).toContainText('Example Post');
  await expect(component.getByRole('link')).toHaveAttribute('href', 'https://example.com');
});
