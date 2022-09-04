import Link from "next/link";
import Image from "next/image";

const PostLinkItem = (props) => {
  return (
    <>
      <Link href={props.to} as={props.to}>
        <a className="post-teaser">
          <div className="post-info">
            <h2>{props.title}</h2>
            <div><span>{new Date(props.published).toLocaleDateString()}</span></div>
          </div>
          <div className="post-thumbnail">
            <Image src={props.thumbnail || '/img/noImage.png'} alt="thumb" width={240} height={120} />
          </div>
        </a>
      </Link>

      <style jsx>{`
          .post-teaser {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 2em;
            color: #333;
            text-decoration: none;
            padding: 16px 32px;
            border-radius: 3px;
          }
          .post-teaser:hover {
            filter: opacity(0.7);
          }
          @media screen and (max-width: 767px) {
            .post-teaser {
              flex-direction: column-reverse;
              align-items: center;
            }
          }
          .post-info {
            flex: 1;
          }
          .post-teaser h2 {
            margin-top: 0;
          }
          .post-thumbnail {
            float: right;
            border-radius: 3px;
            overflow: hidden;
            width: 240px;
            height: 120px;
            background: lightgray;
          }
          .post-thumbnail img {
          }
        `}</style>
    </>
  );
};
export default PostLinkItem;
