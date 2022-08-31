import { Feed } from 'feed';

export const generatedRssFeed = (posts: {
  title: any;
  category: any;
  thumbnail: any;
  published: string;
  description: string;
  content: string;
  slug: any;
  dirname: string;
}[]) => {
  const baseUrl = process.env.SITE_URL || '';
  const date = new Date();
  // author の情報を書き換える
  const author = {
    name: '@alfe_below',
  };

  // デフォルトになる feed の情報
  const feed = new Feed({
    title: 'FUN YOU BLOG',
    description: 'alfe_belowのブログ',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    image: `${baseUrl}/favicon.png`,  // image には OGP 画像でなくファビコンを指定
    copyright: `All rights reserved ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author: author,
  });

  // feed で定義した情報から各記事での変更点を宣言
  posts.forEach((post) => {
    // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
    const url = `${baseUrl}/entry${post.slug}`;
    console.log(post.title)
    feed.addItem({
      title: post.title,
      description: (post.description || '').replace(/\<.+\>(.*)\<\/.+\>/g, '$1'),
      link: url,
      date: new Date(post.published),
    });
  });

  return feed.rss2();
}

export default generatedRssFeed;
