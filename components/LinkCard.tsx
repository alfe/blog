import Image from "next/image";

type LinkCardProps = {
  href: string | null;
  children: string[] | null;
  ogpDatas?: {
    twitterSite: string;
    twitterCard: string;
    twitterTitle: string;
    twitterDescription: string;
    ogSiteName: string;
    ogType: string;
    ogTitle: string;
    ogUrl: string;
    ogDescription: string;
    ogImage: {
      url: string;
      width: string;
      height: string;
      type: null;
    };
    twitterImage: any;
    requestUrl: string;
    success: boolean;
  }[];
};
const LinkCard = (props: LinkCardProps) => {

  // 独立行のURL
  if (props.href === props.children[0]) {
    const ogp = props.ogpDatas.find((ogpData) => props.href === ogpData.requestUrl)
    if (!ogp) {
      return (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {props.children[0]}
        </a>
      );
    }
    return (
      <span>
        <a className="ogp-link" href={props.href} target="_blank" rel="noopener noreferrer">
        {!!ogp?.ogImage && (
          <Image alt="ogp-link"
            src={ogp.ogImage.url}
            width={Number(ogp.ogImage.width)}
            height={Number(ogp.ogImage.height)} />
        )}
        <cite>{ogp.ogTitle}</cite>
        <br />
        <small>{ogp.ogDescription}</small>
        <br />
        <small className="ogp-url">{props.children[0]}</small>
        </a>
        <style jsx>{`
          .ogp-link {
            display: block;
            overflow: hidden;
            border: 1px solid #CCC;
            border-radius: 8px;
            padding: 0;
            margin: 2rem;
            text-decoration: none;
          }
          .ogp-link:hover {
            box-shadow: 4px 4px 8px rgb(0 0 0 / 10%);
            transform: translate(-1px, -1px);
          }
          .ogp-link:active {
            box-shadow: none;
            transform: translate(1px, 1px);
            backdrop-filter: brightness(0.95);
            filter: brightness(0.95);
          }
          .ogp-link cite {
            margin: 0 1rem;
            color: #333;
            font-weight: 600;
            font-style: inherit;
          }
          .ogp-link small {
            margin: 0 1rem;
            color: #666;
          }
          .ogp-link .ogp-url {
            margin: 0 1rem 0.5rem;
            float: right;
          }
        `}</style>
      </span>
    );
  }

  // ブログ内リンク
  if (props.href.startsWith('/')) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children[0]}
      </a>
    );
  }

  // 行内のURL
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children[0]}
    </a>
  );
};
export default LinkCard
