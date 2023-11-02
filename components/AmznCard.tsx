import Image from "next/image";
import { AmznData } from "lib/getAmazonLinkInfos";

type AmznCardProps = {
  href: string | null;
  children: string | null;
  amzn?: AmznData;
};
const AmznCard = (props: AmznCardProps) => {
  const { amzn } = props;
  const href = `${props.href}?tag=ab1025-22&amp;linkCode=osi&amp;th=1&amp;psc=1`;
  return (
    <span>
      <a className="amzn-link" href={href} target="_blank" rel="noopener noreferrer">
        <span className="amzn-img">
          <Image alt="thumb" src={amzn.imgUrl} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        </span>
        <span className="amzn-info">
          <cite>{amzn.title}</cite>
          <small>{amzn.bylineInfo}</small>
        </span>
        <small className="amzn-url">{props.children}</small>
      </a>
      <style jsx>{`
        .amzn-link {
          max-width: 720px;
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: 1fr 64px;
          overflow: hidden;
          border: 1px solid #CCC;
          border-radius: 8px;
          padding: 0.5rem;
          margin: auto;
          text-decoration: none;
        }
        .amzn-link:hover {
          box-shadow: 4px 4px 8px rgb(0 0 0 / 10%);
          transform: translate(-1px, -1px);
        }
        .amzn-link:active {
          box-shadow: none;
          transform: translate(1px, 1px);
          backdrop-filter: brightness(0.95);
          filter: brightness(0.95);
        }
        .amzn-img {
          grid-row: 1/3;
        }
        .amzn-img img {
          width: 100%;
          height: auto;
        }
        .amzn-info {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
        }
        .amzn-link cite {
          grid-row: 1/2;
          display: block;
          margin: 0 1rem;
          color: #333;
          font-weight: 600;
          font-style: inherit;
          text-align: left;
        }
        .amzn-link small {
          display: block;
          margin: 0.5rem 1rem;
          color: #666;
          text-align: left;
        }
        .amzn-link .amzn-url {
          display: block;
          margin: 1rem 1rem 0.5rem;
          text-align: right;
        }
      `}</style>
    </span>
  );
};
export default AmznCard
