import fs from 'fs';
import { Feed } from 'feed';
import { readContentFiles } from "../lib/content-loader"

export const generatedRssFeed = async () => {
  const baseUrl = process.env.PRD_URL || '';
  const date = new Date();
  // author の情報を書き換える
  const author = {
    name: '@alfe_below',
  };

  // デフォルトになる feed の情報
  const feed = new Feed({
    title: 'FUN YOU BLOG',
    description: 'alfe_belowのブログ',
    id: `${baseUrl}/`,
    link: `${baseUrl}/`,
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

  const MAX_COUNT = 10
  const posts = await readContentFiles({ fs })
  // feed で定義した情報から各記事での変更点を宣言
  posts.slice(0, MAX_COUNT).forEach((post) => {
    // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
    const url = `${baseUrl}/entry${post.dirname}${post.slug}`;
    feed.addItem({
      id: encodeURI(url),
      title: post.title,
      description: (post.description || '').replace(/\<.+\>(.*)\<\/.+\>/g, '$1'),
      link: encodeURI(url),
      date: new Date(post.published),
    });
  });

  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.writeFileSync('./public/feed.xml', feed.rss2());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
  fs.writeFileSync('./public/feed.json', feed.json1());
  return feed.rss2();
}

export default generatedRssFeed;
