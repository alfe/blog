import Link from "next/link";
import Image from "next/image";

const CATEGORY = [
  '本',
  'プログラム',
  'LifeHack',
  'レビュー',
  '雑記',
];
const BY_YEAR = [
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
  '2019',
  '2018',
  '2017',
  '2016',
  '2015',
  '2014',
  '2013',
  '2012',
]

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>カテゴリー</h2>
        <ul>
          {CATEGORY.map((category, index) => (
            <li key={`${index}-${category}`}>
              <Link href="/category/[category]" as={`/category/${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>年別アーカイブ</h2>
        <ul>
          {BY_YEAR.map((byYear, index) => (
            <li key={`${index}-${byYear}`}>
              <Link href="/byYear/[byYear]" as={`/byYear/${byYear}`}>
                {byYear}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>プロフィール</h2>
        <div className="flex">
          <div className="face">
            <Image src="/img/face.png" alt="alfe" width={80} height={80} />
          </div>
          <div>
            <p>アルフ</p>
            <p>書籍沼なIT屋さん</p>
          </div>
        </div>
        <ul className="profile-links">
          <li>
            <a href="https://alfebelow.com/" target="_blank" rel="noopener noreferrer">
              alfebelow.com
            </a>
          </li>
          <li>
            <a href="https://github.com/alfe" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://mastodon-japan.net/@alfe" target="_blank" rel="me noopener noreferrer">
              Mastodon
            </a>
          </li>
          <li>
            <a href="https://twitter.com/alfe_below" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://qiita.com/alfe_below" target="_blank" rel="noopener noreferrer">
              Qiita
            </a>
          </li>
        </ul>
      </div>
      <style jsx global>{`
        footer {
          background: linear-gradient(180deg, #3D501A 0%, #616850 100%);
          margin-top: 4em;
          padding-top: 1em;
          padding-bottom: 4em;
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          color: rgb(255 255 255 / 80%);
        }
        footer h2 {
          text-shadow: 1px 1px 4px #131809;
        }
        footer ul {
          list-style-type: circle;
        }
        footer a {
          color: rgb(255 255 255 / 80%);
        }
        footer a:hover {
          color: rgb(255 255 255 / 100%);
        }
        footer a:active {
          color: rgb(255 255 255 / 70%);
        }
        footer .profile-links {
          margin-left: 80px;
        }
        .flex {
          display: flex;
          align-items: center;
          column-gap: 1.5rem;
        }
        .face {
          border-radius: 50%;
          overflow: hidden;
          width: 80px;
          height: 80px;
        }
        
        @media screen and (max-width: 767px) {
          footer {
            flex-direction: column-reverse;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
