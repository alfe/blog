import Image from "next/image";
import { OgpData } from "lib/getOgpData";

type OgpCardProps = {
  href: string | null;
  ogp?: OgpData;
};
const OgpCard = (props: OgpCardProps) => {
  const { ogp } = props;
  return (
    <span>
      <a className="ogp-link" href={props.href} target="_blank" rel="noopener noreferrer">
      {!!ogp?.ogImage?.[0] && (
        <Image alt="ogp-link"
          src={ogp.ogImage[0].url}
          width={Number(ogp.ogImage[0].width * 3 / 5)}
          height={Number(ogp.ogImage[0].height * 3 / 5)} />
      )}
      <cite>{ogp.ogTitle}</cite>
      <br />
      <small>{ogp.ogDescription}</small>
      <br />
      <small className="ogp-url">{props.href}</small>
      </a>
      <style jsx>{`
        .ogp-link {
          max-width: 720px;
          display: block;
          overflow: hidden;
          border: 1px solid #CCC;
          border-radius: 8px;
          padding: 0;
          margin: auto;
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
          margin: 1rem 1rem 0.5rem;
          float: right;
        }
      `}</style>
    </span>
  );
};
export default OgpCard
