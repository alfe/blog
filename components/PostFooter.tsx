import Link from "next/link"

type Post = {
  dirname: string;
  slug: string;
  title: string;
}
const PostFooter = (props: { prevPage?: Post; nextPage?: Post }) => {
  const { prevPage, nextPage } = props
  return (
    <div className="post-footer">
      {prevPage ? (
        <Link
          className="post-teaser"
          href={`/entry${prevPage?.dirname === '//' ? '/' : prevPage?.dirname}${prevPage?.slug}`}
          as={`/entry${prevPage?.dirname === '//' ? '/' : prevPage?.dirname}${prevPage?.slug}`}>
          <span>&lt; {prevPage?.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link
          className="post-teaser right"
          href={`/entry${nextPage?.dirname === '//' ? '/' : nextPage?.dirname}${nextPage?.slug}`}
          as={`/entry${nextPage?.dirname === '//' ? '/' : nextPage?.dirname}${nextPage?.slug}`}>
          <span>{nextPage?.title} &gt;</span>
        </Link>
      ) : (
        <div />
      )}
      <style jsx global>{`
        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .post-footer a {
          color: #666;
          padding: 2rem 1rem;
          text-decoration: none;
          border-radius: 3px;
        }
        .post-footer a:hover {
          background: rgba(0,0,0,0.05)
        }
      `}</style>
    </div>
  );
}
export default PostFooter
