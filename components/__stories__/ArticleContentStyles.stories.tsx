import React from 'react';
import ArticleContentStyles from '../ArticleContentStyles';

export default {
  title: 'component/ArticleContentStyles',
  component: ArticleContentStyles,
};

export const Default = () => (
  <ArticleContentStyles>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3 猫に学ぶ―いかに良く生きるか</h3>
    <div className="external-link-detail">
      <a href="https://www.amazon.co.jp/dp/462209049X?tag=ab1025-22&amp;linkCode=osi&amp;th=1&amp;psc=1" target="_blank" rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://m.media-amazon.com/images/I/510hrSwBc+L._SL500_.jpg" className="external-link-detail-image" alt="猫に学ぶ――いかに良く生きるか" title="猫に学ぶ――いかに良く生きるか" />
      </a>
    <div className="external-link-detail-info">
      <p className="external-link-detail-title">
        <a href="https://www.amazon.co.jp/dp/462209049X?tag=ab1025-22&amp;linkCode=osi&amp;th=1&amp;psc=1" target="_blank" rel="noopener noreferrer">猫に学ぶ――いかに良く生きるか</a>
      </p>
      <ul className="external-link-detail-meta">
        <li>
          <span className="external-link-detail-label">作者:</span>ジョン・グレイ</li>
        <li>みすず書房</li>
      </ul>
      <a href="https://www.amazon.co.jp/dp/462209049X?tag=ab1025-22&amp;linkCode=osi&amp;th=1&amp;psc=1" target="_blank" rel="noopener noreferrer">Amazon</a>
      </div>
    </div>

    <h4>h4 picture-caption</h4>
    <figure className="figure-image figure-image-fotolife mceNonEditable" title="アクセスログ 5月1日～2022年7月1日">
      {/* eslint-disable-next-line */}
      <img src="https://cdn-ak.f.st-hatena.com/images/fotolife/a/alfe1025/20220702/20220702142454.png" width="773" loading="lazy" title="" className="hatena-fotolife" />
      <figcaption className="picture-caption">アクセスログ 5月4日～7月1日</figcaption>
    </figure>

    <h5>h5 pre</h5>
    <pre><code>
      pre {'>'} code
    </code></pre>
    <p>ユーザのURLが<code>links.href</code>に書いてます。ここを参照して <code>https://ap.alfebelow.com/u/alfe</code> に再びGETリクエストを投げるとユーザのプロフィール情報が返ってきます。</p>

    <a href="https://www.amazon.co.jp/SUPER%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9-%E3%80%8C%E9%9B%BB%E6%B0%97%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E7%89%A9%E7%90%86%E7%8F%BE%E8%B1%A1%E3%81%AE%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AA%E7%A7%91%E5%AD%A6-%E9%BD%8B%E8%97%A4%E5%8B%9D%E8%A3%95-ebook/dp/B0C9ZP5NBY?_encoding=UTF8&qid=1698581725&sr=1-1&linkCode=li3&tag=ab1025-22&linkId=efa4eb799e00a5a0af5f66ecbc91f74f&language=ja_JP&ref_=as_li_ss_il" target="_blank">
      {/* eslint-disable-next-line */}
      <img src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0C9ZP5NBY&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=ab1025-22&language=ja_JP" />
    </a>
  </ArticleContentStyles>
);

