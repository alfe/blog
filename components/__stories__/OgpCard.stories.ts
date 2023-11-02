import OgpCard from '../OgpCard';

export default {
  title: 'component/OgpCard',
  component: OgpCard,
};

export const Default = {
  args: {
    href: 'https://github.com/alfe/blog',
    ogp: {
      twitterSite: '@github',
      twitterCard: 'summary_large_image',
      twitterTitle: 'GitHub - alfe/blog: blog',
      twitterDescription: 'blog. Contribute to alfe/blog development by creating an account on GitHub.',   
      ogSiteName: 'GitHub',
      ogType: 'object',
      ogTitle: 'GitHub - alfe/blog: blog',
      ogUrl: 'https://github.com/alfe/blog',
      ogDescription: 'blog. Contribute to alfe/blog development by creating an account on GitHub.',        
      ogImage: [
        {
          height: '600',
          url: 'https://opengraph.githubassets.com/c5e1f6aaa27e81a06188e2c437fd3ad786736166e0e0656ab0dfe291d031289e/alfe/blog',
          width: '1200'
        }
      ],
      twitterImage: [
        {
          url: 'https://opengraph.githubassets.com/c5e1f6aaa27e81a06188e2c437fd3ad786736166e0e0656ab0dfe291d031289e/alfe/blog'
        }
      ],
      requestUrl: 'https://github.com/alfe/blog',
      success: true
    }
  }
};
