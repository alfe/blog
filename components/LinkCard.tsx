type LinkCardProps = {
  href: string | null;
  text: string | null;
  title: string | null;
};
export default function LinkCard(props: LinkCardProps) {
  if (props.text !== props.href) {
    return `
      <a href=${props.href} target="_brank">
        ${props.text}
      </a>`;
  }
  <a>{props.text}</a>
};

