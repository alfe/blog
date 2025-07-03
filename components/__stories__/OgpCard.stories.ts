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

export const WithoutImage = {
  args: {
    href: 'https://example.com/article',
    ogp: {
      twitterSite: '@example',
      twitterCard: 'summary',
      twitterTitle: 'Example Article Title',
      twitterDescription: 'This is an example article without an image.',
      ogSiteName: 'Example Site',
      ogType: 'article',
      ogTitle: 'Example Article Title',
      ogUrl: 'https://example.com/article',
      ogDescription: 'This is an example article without an image.',
      ogImage: [],
      twitterImage: [],
      requestUrl: 'https://example.com/article',
      success: true
    }
  }
};

export const LongTitle = {
  args: {
    href: 'https://example.com/long-title-article',
    ogp: {
      twitterSite: '@example',
      twitterCard: 'summary_large_image',
      twitterTitle: 'This is a very long article title that should demonstrate how the component handles long titles that might overflow or wrap in different ways',
      twitterDescription: 'A description for the long title article.',
      ogSiteName: 'Example Site',
      ogType: 'article',
      ogTitle: 'This is a very long article title that should demonstrate how the component handles long titles that might overflow or wrap in different ways',
      ogUrl: 'https://example.com/long-title-article',
      ogDescription: 'A description for the long title article.',
      ogImage: [
        {
          height: '400',
          url: 'https://via.placeholder.com/800x400/0066cc/ffffff?text=Long+Title+Image',
          width: '800'
        }
      ],
      twitterImage: [
        {
          url: 'https://via.placeholder.com/800x400/0066cc/ffffff?text=Long+Title+Image'
        }
      ],
      requestUrl: 'https://example.com/long-title-article',
      success: true
    }
  }
};

export const LongDescription = {
  args: {
    href: 'https://example.com/long-description-article',
    ogp: {
      twitterSite: '@example',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Article with Long Description',
      twitterDescription: 'This is a very long description that contains a lot of text to test how the component handles long descriptions. It should demonstrate text wrapping and overflow behavior. The description might contain multiple sentences and paragraphs worth of content to really push the limits of the layout.',
      ogSiteName: 'Example Site',
      ogType: 'article',
      ogTitle: 'Article with Long Description',
      ogUrl: 'https://example.com/long-description-article',
      ogDescription: 'This is a very long description that contains a lot of text to test how the component handles long descriptions. It should demonstrate text wrapping and overflow behavior. The description might contain multiple sentences and paragraphs worth of content to really push the limits of the layout.',
      ogImage: [
        {
          height: '300',
          url: 'https://via.placeholder.com/600x300/ff6600/ffffff?text=Long+Description',
          width: '600'
        }
      ],
      twitterImage: [
        {
          url: 'https://via.placeholder.com/600x300/ff6600/ffffff?text=Long+Description'
        }
      ],
      requestUrl: 'https://example.com/long-description-article',
      success: true
    }
  }
};

export const NoOgpData = {
  args: {
    href: 'https://example.com/no-ogp',
    ogp: undefined
  }
};

export const NullHref = {
  args: {
    href: null,
    ogp: {
      twitterSite: '@example',
      twitterCard: 'summary',
      twitterTitle: 'Article with Null Href',
      twitterDescription: 'This article has a null href value.',
      ogSiteName: 'Example Site',
      ogType: 'article',
      ogTitle: 'Article with Null Href',
      ogUrl: 'https://example.com/null-href',
      ogDescription: 'This article has a null href value.',
      ogImage: [
        {
          height: '400',
          url: 'https://via.placeholder.com/800x400/cc0066/ffffff?text=Null+Href',
          width: '800'
        }
      ],
      twitterImage: [
        {
          url: 'https://via.placeholder.com/800x400/cc0066/ffffff?text=Null+Href'
        }
      ],
      requestUrl: 'https://example.com/null-href',
      success: true
    }
  }
};

export const InvalidImageUrl = {
  args: {
    href: 'https://example.com/invalid-image',
    ogp: {
      twitterSite: '@example',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Article with Invalid Image URL',
      twitterDescription: 'This article has an invalid image URL that should not be displayed.',
      ogSiteName: 'Example Site',
      ogType: 'article',
      ogTitle: 'Article with Invalid Image URL',
      ogUrl: 'https://example.com/invalid-image',
      ogDescription: 'This article has an invalid image URL that should not be displayed.',
      ogImage: [
        {
          height: '400',
          url: 'http://localhost:3000/invalid-image.jpg',
          width: '800'
        }
      ],
      twitterImage: [
        {
          url: 'http://localhost:3000/invalid-image.jpg'
        }
      ],
      requestUrl: 'https://example.com/invalid-image',
      success: true
    }
  }
};

export const YouTubeVideo = {
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    ogp: {
      twitterSite: '@youtube',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      twitterDescription: 'The official music video for "Never Gonna Give You Up" by Rick Astley',
      ogSiteName: 'YouTube',
      ogType: 'video.other',
      ogTitle: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      ogUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      ogDescription: 'The official music video for "Never Gonna Give You Up" by Rick Astley',
      ogImage: [
        {
          height: '720',
          url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          width: '1280'
        }
      ],
      twitterImage: [
        {
          url: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
        }
      ],
      requestUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      success: true
    }
  }
};

export const TwitterPost = {
  args: {
    href: 'https://twitter.com/example/status/123456789',
    ogp: {
      twitterSite: '@example',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Example Tweet',
      twitterDescription: 'This is an example tweet with some interesting content.',
      ogSiteName: 'Twitter',
      ogType: 'website',
      ogTitle: 'Example Tweet',
      ogUrl: 'https://twitter.com/example/status/123456789',
      ogDescription: 'This is an example tweet with some interesting content.',
      ogImage: [
        {
          height: '512',
          url: 'https://via.placeholder.com/1024x512/1da1f2/ffffff?text=Twitter+Post',
          width: '1024'
        }
      ],
      twitterImage: [
        {
          url: 'https://via.placeholder.com/1024x512/1da1f2/ffffff?text=Twitter+Post'
        }
      ],
      requestUrl: 'https://twitter.com/example/status/123456789',
      success: true
    }
  }
};

