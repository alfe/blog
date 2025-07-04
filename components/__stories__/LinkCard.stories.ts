import type { Meta, StoryObj } from '@storybook/react';
import LinkCard from '../LinkCard';

const meta = {
  title: 'component/LinkCard',
  component: LinkCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LinkCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    href: 'https://example.com',
    children: 'https://example.com',
    ogpDatas: [{
      requestUrl: 'https://example.com',
      twitterSite: '',
      twitterCard: '',
      twitterTitle: '',
      twitterDescription: '',
      ogSiteName: '',
      ogType: '',
      ogTitle: 'Example Website Title',
      ogUrl: 'https://example.com',
      ogDescription: 'This is an example description for testing the LinkCard component. It should display properly in the card layout.',
      ogImage: 'https://via.placeholder.com/400x200',
      twitterImage: '',
      success: true
    }]
  },
  play: async ({ canvasElement }) => {
    // Test that the OGP card is rendered
    const ogpCard = canvasElement.querySelector('.ogp-card');
    if (!ogpCard) throw new Error('OGP card not found');
    
    // Test that the correct href is set
    const linkElement = canvasElement.querySelector('a');
    if (!linkElement) throw new Error('Link element not found');
    
    const href = linkElement.getAttribute('href');
    if (href !== 'https://example.com') {
      throw new Error(`Expected href 'https://example.com', got '${href}'`);
    }
    
    // Test that link opens in new tab
    if (linkElement.getAttribute('target') !== '_blank') {
      throw new Error('Link should open in new tab');
    }
    
    console.log('✅ Default LinkCard story tests passed');
  }
};

export const AmazonLink: StoryObj<typeof meta> = {
  args: {
    href: 'https://www.amazon.co.jp/dp/462209049X',
    children: 'https://www.amazon.co.jp/dp/462209049X',
    amznData: [{
      url: 'https://www.amazon.co.jp/dp/462209049X',
      title: '猫に学ぶ――いかに良く生きるか | ジョン・グレイ, 鈴木晶 |本 | 通販 | Amazon',
      bylineInfo: 'ジョン・グレイ(著),鈴木晶(翻訳)',
      imgUrl: 'https://m.media-amazon.com/images/I/510hrSwBc+L._SY445_SX342_.jpg'
    }]
  },
  play: async ({ canvasElement }) => {
    // Test that the Amazon card is rendered
    const amznLink = canvasElement.querySelector('.amzn-link');
    if (!amznLink) throw new Error('Amazon card not found');
    
    // Test that the title is displayed
    const title = amznLink.querySelector('cite');
    if (!title) throw new Error('Amazon card title not found');
    if (!title.textContent?.includes('猫に学ぶ')) {
      throw new Error('Amazon card title text not found');
    }
    
    // Test that the link has correct href attribute with affiliate tag
    const href = amznLink.getAttribute('href');
    if (!href?.includes('tag=ab1025-22')) {
      throw new Error('Affiliate tag not found in link');
    }
    
    console.log('✅ AmazonLink LinkCard story tests passed');
  }
};

export const PlainLink: StoryObj<typeof meta> = {
  args: {
    href: 'https://github.com',
    children: 'GitHub',
    ogpDatas: [], // Empty OGP data
    amznData: []  // Empty Amazon data
  },
  play: async ({ canvasElement }) => {
    // Test that a plain link is rendered when no OGP/Amazon data
    const linkElement = canvasElement.querySelector('a');
    if (!linkElement) throw new Error('Link element not found');
    
    // Test that the correct href is set
    const href = linkElement.getAttribute('href');
    if (href !== 'https://github.com') {
      throw new Error(`Expected href 'https://github.com', got '${href}'`);
    }
    
    // Test that the children content is displayed
    if (!linkElement.textContent?.includes('GitHub')) {
      throw new Error('Link text not found');
    }
    
    // Test that link opens in new tab
    if (linkElement.getAttribute('target') !== '_blank') {
      throw new Error('Link should open in new tab');
    }
    
    // Test that rel attribute is set for external links
    const rel = linkElement.getAttribute('rel');
    if (!rel?.includes('noopener') || !rel?.includes('noreferrer')) {
      throw new Error('External link should have rel="noopener noreferrer"');
    }
    
    console.log('✅ PlainLink LinkCard story tests passed');
  }
};

export const InternalLink: StoryObj<typeof meta> = {
  args: {
    href: '/blog/example-post',
    children: 'Example Blog Post',
    ogpDatas: [],
    amznData: []
  },
  play: async ({ canvasElement }) => {
    // Test that internal link is rendered
    const linkElement = canvasElement.querySelector('a');
    if (!linkElement) throw new Error('Link element not found');
    
    // Test that the correct href is set
    const href = linkElement.getAttribute('href');
    if (href !== '/blog/example-post') {
      throw new Error(`Expected href '/blog/example-post', got '${href}'`);
    }
    
    // Test that the children content is displayed
    if (!linkElement.textContent?.includes('Example Blog Post')) {
      throw new Error('Link text not found');
    }
    
    // Test that internal link also opens in new tab (based on component logic)
    if (linkElement.getAttribute('target') !== '_blank') {
      throw new Error('Internal link should also open in new tab');
    }
    
    console.log('✅ InternalLink LinkCard story tests passed');
  }
};

export const InlineLink: StoryObj<typeof meta> = {
  args: {
    href: 'https://storybook.js.org',
    children: 'Storybook documentation',
    ogpDatas: [],
    amznData: []
  },
  play: async ({ canvasElement }) => {
    // Test that inline link is rendered (href !== children)
    const linkElement = canvasElement.querySelector('a');
    if (!linkElement) throw new Error('Link element not found');
    
    // Test that the correct href is set
    const href = linkElement.getAttribute('href');
    if (href !== 'https://storybook.js.org') {
      throw new Error(`Expected href 'https://storybook.js.org', got '${href}'`);
    }
    
    // Test that the children content is displayed (different from href)
    if (!linkElement.textContent?.includes('Storybook documentation')) {
      throw new Error('Link text not found');
    }
    
    // Test that link opens in new tab
    if (linkElement.getAttribute('target') !== '_blank') {
      throw new Error('Link should open in new tab');
    }
    
    console.log('✅ InlineLink LinkCard story tests passed');
  }
};
