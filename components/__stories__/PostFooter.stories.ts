import type { Meta, StoryObj } from '@storybook/react';
import PostFooter from '../PostFooter';

const meta = {
  title: 'component/PostFooter',
  component: PostFooter,
} satisfies Meta<typeof PostFooter>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    nextPage: {
      title: 'Next Page',
      slug: '/next-page',
      dirname: '/dirname'
    },
    prevPage: {
      title: 'Previous Page',
      slug: '/previous-page',
      dirname: '/dirname'
    }
  }
};

export const NextPage: StoryObj<typeof meta> = {
  args: {
    nextPage: {
      title: 'Next Page',
      slug: '/next-page',
      dirname: '/dirname'
    }
  }
};

export const PrevPage: StoryObj<typeof meta> = {
  args: {
    prevPage: {
      title: 'Previous Page',
      slug: '/previous-page',
      dirname: '/dirname'
    }
  }
};
