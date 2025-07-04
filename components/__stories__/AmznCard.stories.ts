import type { Meta, StoryObj } from '@storybook/react';
import AmznCard from '../AmznCard';

const meta = {
  title: 'component/AmznCard',
  component: AmznCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AmznCard>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    href: 'https://www.amazon.co.jp/dp/462209049X',
    amzn: {
      title: '猫に学ぶ――いかに良く生きるか | ジョン・グレイ, 鈴木晶 |本 | 通販 | Amazon',
      bylineInfo: 'ジョン・グレイ(著),鈴木晶(翻訳)',
      imgUrl: 'https://m.media-amazon.com/images/I/510hrSwBc+L._SY445_SX342_.jpg',
      url: 'https://www.amazon.co.jp/dp/462209049X'
    }
  },
  play: async ({ canvasElement }) => {
    // Test that the Amazon card is rendered
    const amznLink = canvasElement.querySelector('.amzn-link');
    if (!amznLink) throw new Error('Amazon card link not found');
    
    // Test that the title is displayed
    const title = amznLink.querySelector('cite');
    if (!title) throw new Error('Amazon card title not found');
    if (!title.textContent?.includes('猫に学ぶ')) {
      throw new Error('Amazon card title text not found');
    }
    
    // Test that the author info is displayed
    const author = amznLink.querySelector('small');
    if (!author) throw new Error('Amazon card author info not found');
    if (!author.textContent?.includes('ジョン・グレイ')) {
      throw new Error('Amazon card author text not found');
    }
    
    // Test that the image is present
    const image = amznLink.querySelector('img');
    if (!image) throw new Error('Amazon card image not found');
    if (!image.getAttribute('src')?.includes('media-amazon')) {
      throw new Error('Amazon card image source not correct');
    }
    
    // Test that the link has correct href attribute with affiliate tag
    const href = amznLink.getAttribute('href');
    if (!href?.includes('tag=ab1025-22')) {
      throw new Error('Affiliate tag not found in link');
    }
    
    // Test that link opens in new tab
    if (amznLink.getAttribute('target') !== '_blank') {
      throw new Error('Link should open in new tab');
    }
    
    console.log('✅ Default AmznCard story tests passed');
  }
};

export const WithoutImage: StoryObj<typeof meta> = {
  args: {
    href: 'https://www.amazon.co.jp/dp/462209049X',
    amzn: {
      title: '猫に学ぶ――いかに良く生きるか | ジョン・グレイ, 鈴木晶 |本 | 通販 | Amazon',
      bylineInfo: 'ジョン・グレイ(著),鈴木晶(翻訳)',
      imgUrl: '', // Empty image URL
      url: 'https://www.amazon.co.jp/dp/462209049X'
    }
  },
  play: async ({ canvasElement }) => {
    const amznLink = canvasElement.querySelector('.amzn-link');
    if (!amznLink) throw new Error('Amazon card link not found');
    
    // Test that title and author are still present
    const title = amznLink.querySelector('cite');
    const author = amznLink.querySelector('small');
    
    if (!title || !author) {
      throw new Error('Title or author missing in card without image');
    }
    
    // Test that no image is rendered when imgUrl is empty
    const image = amznLink.querySelector('img');
    if (image && image.getAttribute('src')) {
      throw new Error('Image should not be rendered when imgUrl is empty');
    }
    
    console.log('✅ WithoutImage AmznCard story tests passed');
  }
};

export const LongTitle: StoryObj<typeof meta> = {
  args: {
    href: 'https://www.amazon.co.jp/dp/462209049X',
    amzn: {
      title: 'この本のタイトルは非常に長くて、レイアウトをテストするために作られた例です。実際の本のタイトルとして使用されることはありませんが、UIコンポーネントのテストには有用です。',
      bylineInfo: 'とても長い名前の著者(著),とても長い名前の翻訳者(翻訳)',
      imgUrl: 'https://m.media-amazon.com/images/I/510hrSwBc+L._SY445_SX342_.jpg',
      url: 'https://www.amazon.co.jp/dp/462209049X'
    }
  },
  play: async ({ canvasElement }) => {
    const amznLink = canvasElement.querySelector('.amzn-link');
    if (!amznLink) throw new Error('Amazon card link not found');
    
    // Test that long title is properly displayed
    const title = amznLink.querySelector('cite');
    if (!title) throw new Error('Title not found');
    
    // Test that the card maintains its structure with long text
    const computedStyle = window.getComputedStyle(amznLink);
    if (computedStyle.display !== 'grid') {
      throw new Error('Card should maintain grid layout');
    }
    
    console.log('✅ LongTitle AmznCard story tests passed');
  }
};
