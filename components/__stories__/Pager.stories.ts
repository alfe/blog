import type { Meta, StoryObj } from '@storybook/react';
import Pager from '../Pager';

const meta = {
  title: 'component/Pager',
  component: Pager,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Pager>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 1,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  },
  play: async ({ canvasElement }) => {
    // Simple DOM testing without external testing library imports
    const pager = canvasElement.querySelector('.pager');
    if (!pager) throw new Error('Pager element not found');
    
    // Test that current page is displayed
    const currentPageText = pager.textContent;
    if (!currentPageText?.includes('1')) {
      throw new Error('Current page "1" not found in pager');
    }
    
    // Test that next page link is present
    const nextPageLink = pager.querySelector('a[href*="example.com"]');
    if (!nextPageLink) {
      throw new Error('Next page link not found');
    }
    
    console.log('✅ Default story tests passed');
  }
};

export const Page2nd: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 2,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  },
  play: async ({ canvasElement }) => {
    const pager = canvasElement.querySelector('.pager');
    if (!pager) throw new Error('Pager element not found');
    
    // Test that current page is displayed
    const currentPageText = pager.textContent;
    if (!currentPageText?.includes('2')) {
      throw new Error('Current page "2" not found in pager');
    }
    
    // Test that both previous and next page links are present
    const links = pager.querySelectorAll('a');
    if (links.length !== 2) {
      throw new Error(`Expected 2 links, found ${links.length}`);
    }
    
    console.log('✅ Page2nd story tests passed');
  }
};

export const Page3rd: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 3,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  },
  play: async ({ canvasElement }) => {
    const pager = canvasElement.querySelector('.pager');
    if (!pager) throw new Error('Pager element not found');
    
    // Test that current page is displayed
    const currentPageText = pager.textContent;
    if (!currentPageText?.includes('3')) {
      throw new Error('Current page "3" not found in pager');
    }
    
    // Test that both previous and next page links are present
    const links = pager.querySelectorAll('a');
    if (links.length !== 2) {
      throw new Error(`Expected 2 links, found ${links.length}`);
    }
    
    console.log('✅ Page3rd story tests passed');
  }
};

export const LastPage: StoryObj<typeof meta> = {
  args: {
    total: 100,
    page: 10,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  },
  play: async ({ canvasElement }) => {
    const pager = canvasElement.querySelector('.pager');
    if (!pager) throw new Error('Pager element not found');
    
    // Test that current page is displayed
    const currentPageText = pager.textContent;
    if (!currentPageText?.includes('10')) {
      throw new Error('Current page "10" not found in pager');
    }
    
    // Test that only previous page link is present (no next on last page)
    const links = pager.querySelectorAll('a');
    if (links.length !== 1) {
      throw new Error(`Expected 1 link on last page, found ${links.length}`);
    }
    
    console.log('✅ LastPage story tests passed');
  }
};

export const SinglePage: StoryObj<typeof meta> = {
  args: {
    total: 5,
    page: 1,
    perPage: 10,
    href: 'https://example.com',
    asCallback: page => `https://example.com/page/${page}`,
  },
  play: async ({ canvasElement }) => {
    const pager = canvasElement.querySelector('.pager');
    if (!pager) throw new Error('Pager element not found');
    
    // Test that current page is displayed
    const currentPageText = pager.textContent;
    if (!currentPageText?.includes('1')) {
      throw new Error('Current page "1" not found in pager');
    }
    
    // Test that no navigation links are present when there's only one page
    const links = pager.querySelectorAll('a');
    if (links.length !== 0) {
      throw new Error(`Expected 0 links on single page, found ${links.length}`);
    }
    
    console.log('✅ SinglePage story tests passed');
  }
};
