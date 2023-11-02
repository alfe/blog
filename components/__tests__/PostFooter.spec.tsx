import { test, expect } from '@playwright/experimental-ct-react';
import PostFooter from '../PostFooter';

test.use({ viewport: { width: 500, height: 500 } });

test('should work with next', async ({ mount }) => {
  const component = await mount(
    <PostFooter
      nextPage={{
        title: 'Next Page',
        slug: '/next-page',
        dirname: '/dirname'
      }}
    />
  );
  await expect(component).toContainText('Next Page');
  await expect(component.getByRole('link')).toHaveAttribute('href', '/entry/dirname/next-page');
});

test('should work with previous', async ({ mount }) => {
  const component = await mount(
    <PostFooter
      prevPage={{
        title: 'Previous Page',
        slug: '/previous-page',
        dirname: '/dirname'
      }}
    />
  );
  await expect(component).toContainText('Previous Page');
  await expect(component.getByRole('link')).toHaveAttribute('href', '/entry/dirname/previous-page');
});

test('should work with next and previous', async ({ mount }) => {
  const component = await mount(
    <PostFooter
      prevPage={{
        title: 'Previous Page',
        slug: '/previous-page',
        dirname: '/dirname'
      }}
      nextPage={{
        title: 'Next Page',
        slug: '/next-page',
        dirname: '/dirname'
      }}
    />
  );
  await expect(component).toContainText('Next Page');
  await expect(component).toContainText('Previous Page');
});
