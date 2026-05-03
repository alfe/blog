import { OgpData } from "lib/getOgpData";
import { AmznData } from "lib/getAmazonLinkInfos";
import OgpCard from "./OgpCard";
import AmznCard from "./AmznCard";

type LinkCardProps = {
  href: string | null;
  children: string | null;
  ogpDatas?: OgpData[];
  amznData?: AmznData[];
};
const LinkCard = (props: LinkCardProps) => {
  const href = props.href ?? '';
  const children = props.children ?? undefined;
  // 独立行のURL
  if (props.href === props.children) {
    const ogp = (props.ogpDatas ?? []).find((ogpData) => props.href === ogpData.requestUrl)
    if (!!ogp) {
      return (
        <OgpCard href={href} ogp={ogp} />
      );
    }

    const amzn = (props.amznData || []).find((amznData) => props.href === amznData.url)
    if (!!amzn) {
      return (
        <AmznCard href={href} amzn={amzn} />
      );
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // ブログ内リンク
  if (href.startsWith('/')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // 行内のURL
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
export default LinkCard
