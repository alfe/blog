import type { Meta, StoryObj } from '@storybook/react';
import PostFooter from '../PostFooter';

const meta = {
  title: 'component/PostFooter',
  component: PostFooter,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostFooter>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    nextPage: {
      title: 'Next Post: Advanced Storybook Techniques',
      slug: '/advanced-storybook-techniques',
      dirname: '/posts/2024/01'
    },
    prevPage: {
      title: 'Previous Post: Getting Started with Testing',
      slug: '/getting-started-testing',
      dirname: '/posts/2023/12'
    }
  },
  play: async ({ canvasElement }) => {
    // Test that the post footer is rendered
    const postFooter = canvasElement.querySelector('.post-footer');
    if (!postFooter) throw new Error('Post footer not found');
    
    // Test that both navigation links are present
    const links = postFooter.querySelectorAll('a');
    if (links.length !== 2) {
      throw new Error(`Expected 2 navigation links, found ${links.length}`);
    }
    
    // Test previous page link
    const prevLink = postFooter.querySelector('a:first-child');
    if (!prevLink) throw new Error('Previous page link not found');
    if (!prevLink.textContent?.includes('Previous Post: Getting Started with Testing')) {
      throw new Error('Previous page title not found');
    }
    if (!prevLink.textContent?.includes('<')) {
      throw new Error('Previous page indicator not found');
    }
    
    // Test next page link
    const nextLink = postFooter.querySelector('a:last-child, .right');
    if (!nextLink) throw new Error('Next page link not found');
    if (!nextLink.textContent?.includes('Next Post: Advanced Storybook Techniques')) {
      throw new Error('Next page title not found');
    }
    if (!nextLink.textContent?.includes('>')) {
      throw new Error('Next page indicator not found');
    }
    
    // Test that links have correct href attributes
    const expectedPrevHref = '/entry/posts/2023/12/getting-started-testing';
    const expectedNextHref = '/entry/posts/2024/01/advanced-storybook-techniques';
    
    const prevHref = prevLink.getAttribute('href');
    const nextHref = nextLink.getAttribute('href');
    
    if (prevHref !== expectedPrevHref) {
      throw new Error(`Expected prev href '${expectedPrevHref}', got '${prevHref}'`);
    }
    
    if (nextHref !== expectedNextHref) {
      throw new Error(`Expected next href '${expectedNextHref}', got '${nextHref}'`);
    }
    
    console.log('✅ Default PostFooter story tests passed');
  }
};

export const NextPageOnly: StoryObj<typeof meta> = {
  args: {
    nextPage: {
      title: 'Next Article in Series',
      slug: '/next-article',
      dirname: '/series'
    }
  },
  play: async ({ canvasElement }) => {
    const postFooter = canvasElement.querySelector('.post-footer');
    if (!postFooter) throw new Error('Post footer not found');
    
    // Test that only one navigation link is present
    const links = postFooter.querySelectorAll('a');
    if (links.length !== 1) {
      throw new Error(`Expected 1 navigation link, found ${links.length}`);
    }
    
    // Test next page link
    const nextLink = postFooter.querySelector('a');
    if (!nextLink) throw new Error('Next page link not found');
    if (!nextLink.textContent?.includes('Next Article in Series')) {
      throw new Error('Next page title not found');
    }
    
    // Test that there's a placeholder div for the missing previous page
    const divs = postFooter.querySelectorAll('div');
    if (divs.length < 1) {
      throw new Error('Expected placeholder div for missing previous page');
    }
    
    console.log('✅ NextPageOnly PostFooter story tests passed');
  }
};

export const PrevPageOnly: StoryObj<typeof meta> = {
  args: {
    prevPage: {
      title: 'Previous Chapter: Foundations',
      slug: '/foundations',
      dirname: '/book/chapter1'
    }
  },
  play: async ({ canvasElement }) => {
    const postFooter = canvasElement.querySelector('.post-footer');
    if (!postFooter) throw new Error('Post footer not found');
    
    // Test that only one navigation link is present
    const links = postFooter.querySelectorAll('a');
    if (links.length !== 1) {
      throw new Error(`Expected 1 navigation link, found ${links.length}`);
    }
    
    // Test previous page link
    const prevLink = postFooter.querySelector('a');
    if (!prevLink) throw new Error('Previous page link not found');
    if (!prevLink.textContent?.includes('Previous Chapter: Foundations')) {
      throw new Error('Previous page title not found');
    }
    
    // Test that there's a placeholder div for the missing next page
    const divs = postFooter.querySelectorAll('div');
    if (divs.length < 1) {
      throw new Error('Expected placeholder div for missing next page');
    }
    
    console.log('✅ PrevPageOnly PostFooter story tests passed');
  }
};

export const NoNavigation: StoryObj<typeof meta> = {
  args: {
    // Both prevPage and nextPage are undefined
  },
  play: async ({ canvasElement }) => {
    const postFooter = canvasElement.querySelector('.post-footer');
    if (!postFooter) throw new Error('Post footer not found');
    
    // Test that no navigation links are present
    const links = postFooter.querySelectorAll('a');
    if (links.length !== 0) {
      throw new Error(`Expected 0 navigation links, found ${links.length}`);
    }
    
    // Test that placeholder divs are present
    const divs = postFooter.querySelectorAll('div');
    if (divs.length < 2) {
      throw new Error('Expected placeholder divs for missing navigation');
    }
    
    // Test that the footer maintains its flex layout
    const computedStyle = window.getComputedStyle(postFooter);
    if (computedStyle.display !== 'flex') {
      throw new Error('Post footer should maintain flex display');
    }
    
    console.log('✅ NoNavigation PostFooter story tests passed');
  }
};

export const RootDirectoryPages: StoryObj<typeof meta> = {
  args: {
    nextPage: {
      title: 'Home Page Article',
      slug: '/home-article',
      dirname: '//' // Root directory case
    },
    prevPage: {
      title: 'Another Root Article',
      slug: '/root-article', 
      dirname: '//' // Root directory case
    }
  },
  play: async ({ canvasElement }) => {
    const postFooter = canvasElement.querySelector('.post-footer');
    if (!postFooter) throw new Error('Post footer not found');
    
    // Test that links handle root directory correctly
    const links = postFooter.querySelectorAll('a');
    if (links.length !== 2) {
      throw new Error(`Expected 2 navigation links, found ${links.length}`);
    }
    
    // Test that root directory URLs are formatted correctly (/entry/ instead of /entry//)
    const prevLink = links[0];
    const nextLink = links[1];
    
    const prevHref = prevLink.getAttribute('href');
    const nextHref = nextLink.getAttribute('href');
    
    if (!prevHref?.startsWith('/entry/') || prevHref.includes('//')) {
      throw new Error(`Previous link href should start with '/entry/' and not contain '//', got '${prevHref}'`);
    }
    
    if (!nextHref?.startsWith('/entry/') || nextHref.includes('//')) {
      throw new Error(`Next link href should start with '/entry/' and not contain '//', got '${nextHref}'`);
    }
    
    console.log('✅ RootDirectoryPages PostFooter story tests passed');
  }
};
