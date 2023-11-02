import { test, expect } from '@playwright/experimental-ct-react';
import Pager from '../Pager';

test.use({ viewport: { width: 800, height: 500 } });

test('should work in the first page', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={1}
      perPage={10}
      href='https://example.com'
      asCallback={page => `https://example.com/page/${page}`}
    />
  );
  await expect(component).toContainText('1');
  await expect(component).toContainText('2');
  await expect(component.getByRole('link')).toHaveAttribute('href', 'https://example.com');
});

test('should work in the 2nd page', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={2}
      perPage={10}
      href='https://example.com'
      asCallback={page => `https://example.com/page/${page}`}
    />
  );
  await expect(component).toContainText('1');
  await expect(component).toContainText('2');
  await expect(component).toContainText('3');
  await expect(component.getByRole('link').first()).toHaveAttribute('href', 'https://example.com');
  await expect(component.getByRole('link').last()).toHaveAttribute('href', 'https://example.com');
});

test('should work in the 3rd page', async ({ mount }) => {
  const component = await mount(
    <Pager
      total={100}
      page={3}
      perPage={10}
      href='https://example.com'
      asCallback={page => `https://example.com/page/${page}`}
    />
  );
  await expect(component).toContainText('2');
  await expect(component).toContainText('3');
  await expect(component).toContainText('4');
  await expect(component.getByRole('link').first()).toHaveAttribute('href', 'https://example.com');
  await expect(component.getByRole('link').last()).toHaveAttribute('href', 'https://example.com');
});
