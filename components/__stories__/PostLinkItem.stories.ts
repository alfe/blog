import type { Meta, StoryObj } from '@storybook/react';
import PostLinkItem from '../PostLinkItem';

const meta = {
  title: 'component/PostLinkItem',
  component: PostLinkItem,
} satisfies Meta<typeof PostLinkItem>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    to: 'https://example.com',
    title: 'Example Post',
    published: "2022-01-01T00:00:00.000Z",
  }
};
