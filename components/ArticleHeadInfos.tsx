import Category from "./Category";

type ArticleHeadInfosProps = {
  published: string;
  category: string[];
};
const ArticleHeadInfos = (props: ArticleHeadInfosProps) => {
  return (<>
    <div className="post-meta">
      <time dateTime={props.published}>
        {new Date(props.published).toLocaleDateString()}
      </time>
      <Category category={props.category} />
    </div>
    <style jsx>{`
      .post-meta {
        text-align: right;
        color: #666;
      }
    `}</style>
  </>);
};
export default ArticleHeadInfos;
