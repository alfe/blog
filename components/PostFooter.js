import Link from "next/link"

const PostFooter = (props) => {
  const { prevPage, nextPage } = props
  return (
    <div className="post-footer">
      {prevPage ? (
        <Link
          href={`/entry${prevPage?.dirname === '//' ? '/' : prevPage?.dirname}${prevPage?.slug}`}
          as={`/entry${prevPage?.dirname === '//' ? '/' : prevPage?.dirname}${prevPage?.slug}`}>
          <a className="post-teaser">
            <span>&lt; {prevPage?.title}</span>
          </a>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link
          href={`/entry${nextPage?.dirname === '//' ? '/' : nextPage?.dirname}${nextPage?.slug}`}
          as={`/entry${nextPage?.dirname === '//' ? '/' : nextPage?.dirname}${nextPage?.slug}`}>
          <a className="post-teaser right">
            <span>{nextPage?.title} &gt;</span>
          </a>
        </Link>
      ) : (
        <div />
      )}
      <style jsx>{`
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
  )
}
export default PostFooter
