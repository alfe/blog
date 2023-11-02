import { ReactNode } from "react";

const ArticleContentStyles = (props: { children: ReactNode; }) => {
  return (<>
    <article className="post-body">
      {props.children}
    </article>
    <style jsx>{`
        .post-body {
          font-size: 18px;
        }
      `}</style>
    <style jsx global>{`
        .external-link-detail {
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 2rem;
          border: none;
          border-radius: 4px;
          box-sizing: border-box;
          line-height: 1.25;
          overflow: hidden;
          margin: 1rem 0;
          padding: 1rem;
        }
        .external-link-detail-image-link {
          flex-basis: 200px;
          height: 200px;
        }
        .external-link-detail>a .external-link-detail-image {
          max-width: 200px;
          border: none;
          display: block;
          float: none;
          height: 100%;
          margin: auto;
          object-fit: contain;
          width: 100%;
        }
        .external-link-detail-info {
          width: 25rem;
        }
        .external-link-detail-meta {
          list-style: none;
          font-size: .9rem;
          padding-inline-start: 1rem;
        }
        .external-link-detail .external-link-detail-info .asin-detail-buy {
          border: 1px solid #666;
          color: #666;
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: .025em;
          line-height: 1.25;
          margin-top: 16px;
          overflow: hidden;
          padding: 10px 12px;
          text-align: center;
          text-decoration: none;
          width: 100%;
        }

        .picture-caption {
          font-size: .8em;
          text-align: center;
          color: #666;
        }

        h3 {
          margin-top: 5rem;
          border-bottom: 1px solid #666;
          font-size: 1.7rem;
          margin-left: -1rem;
          padding-left: 1rem;
        }
        h4 {
          margin-top: 3rem;
          padding-left: 0.5em;
          margin-left: -0.5rem;
          border-bottom: 1px dotted;
          font-size: 1.2rem;
        }
        h5 {
          margin-top: 1rem;
          padding-left: 0.25em;
          margin-left: -0.25rem;
          border-bottom: 1px dashed;
          font-size: 1rem;
        }
        pre {
          background: #333;
          padding: 1rem;
          color: #FFF;
          overflow-x: scroll;
        }
        code {
          background: #ecffc8;
          padding: 0.25rem 0.5rem;
        }
        pre > code {
          background: transparent;
          padding: 0.25rem 0.5rem;
        }
        a[href^="https://www.amazon.co.jp/"]:has(img){
          display: block;
          text-align: center;
        }
      `}</style>
  </>);
};
export default ArticleContentStyles;
