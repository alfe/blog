import type { Meta, StoryObj } from '@storybook/react';
import LinkCard from './LinkCard';

const meta = {
  title: 'component/LinkCard',
  component: LinkCard,
} satisfies Meta<typeof LinkCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    href: 'https://example.com',
    children: ['https://example.com'],
    ogpDatas: [],
  }
};
