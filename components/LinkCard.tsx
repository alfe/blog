import Image from "next/image";
import { OgpData } from "lib/getOgpData";
import { AmznData } from "lib/getAmazonLinkInfos";
import OgpCard from "./OgpCard";
import AmznCard from "./AmznCard";

type LinkCardProps = {
  href: string | null;
  children: string[] | null;
  ogpDatas?: OgpData[];
  amznData?: AmznData[];
};
const LinkCard = (props: LinkCardProps) => {

  // 独立行のURL
  if (props.href === props.children[0]) {
    const ogp = props.ogpDatas.find((ogpData) => props.href === ogpData.requestUrl)
    if (!!ogp) {
      return (
        <OgpCard href={props.href} ogp={ogp}>{props.children?.[0]}</OgpCard>
      );
    }

    const amzn = (props.amznData || []).find((amznData) => props.href === amznData.url)
    if (!!amzn) {
      return (
        <AmznCard href={props.href} amzn={amzn}>{props.children?.[0]}</AmznCard>
      );
    }

    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children[0]}
      </a>
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
