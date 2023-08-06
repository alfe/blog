import type { Meta, StoryObj } from '@storybook/react';
import Pager from './Pager';

const meta = {
  title: 'component/Pager',
  component: Pager,
} satisfies Meta<typeof Pager>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 1,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  }
};

export const page2nd: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 2,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  }
};

export const page3rd: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 3,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  }
};
