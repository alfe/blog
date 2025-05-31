import Link from "next/link";

const Category = (props: { category: string[] }) => {
  return (
    <div>
      {(props.category || []).map(category => (
        <Link 
          key={category} 
          href="/category/[category]" 
          as={`/category/${category}`}
          tabIndex={0}
          aria-label={`${category}カテゴリーの記事一覧`}
        >
          <span key={category} className="category">{category}</span>
        </Link>
      ))}
      <style jsx>{`
        .category {
          padding: 0 0.5rem;
          background: midnightblue;
          border-radius: 3px;
          color: #EEE;
          font-size: .9rem;
          text-decoration: none;
          display: inline-block;
          margin: 0 0.25rem;
        }
        .category:hover {
          background: #1a1a4a;
        }
        .category:focus {
          outline: none;
          background: #1a1a4a;
        }
      `}</style>
    </div>
  )
}

export default Category;
