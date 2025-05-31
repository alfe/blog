import fs from "fs"
import PostLinkItem from "components/PostLinkItem"
import Layout from "components/Layout"
import OgpHeader from "components/OgpHeader"
import { readContentFiles } from "lib/content-loader"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

type categoryProps = {
  posts: {
    title: string;
    dirname: string;
    slug: string;
    published: string;
    thumbnail?: string;
  }[];
}

const POSTS_PER_PAGE = 20

const Category = (props: categoryProps) => {
  const { posts } = props
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [displayedPosts, setDisplayedPosts] = useState([])

  useEffect(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    setDisplayedPosts(posts.slice(startIndex, endIndex))
  }, [currentPage, posts])

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  return (
    <Layout title="">
      <OgpHeader />
      {displayedPosts.map((post, index) => (
        <PostLinkItem
          key={`${index}-${post.slug}`}
          to={`/entry${post.dirname}${post.slug}`}
          thumbnail={post.thumbnail}
          title={post.title}
          published={post.published}
        />
      ))}
      
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="page-button"
          aria-label="前のページへ"
        >
          <svg 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 -4 32 32"
            width="24"
            height="32"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          前のページ
        </button>

        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium text-gray-900">{currentPage}</span>
          <span className="mx-1.5">/</span>
          <span>{totalPages}</span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="page-button"
          aria-label="次のページへ"
        >
          次のページ
          <svg 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 -4 32 32"
            width="24"
            height="32"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        img[alt="thumb"] {
          object-fit: cover;
        }
      `}</style>
      
      <style jsx>{`
        .pagination {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          gap: 8px;
          margin: 16px 0;
        }
        .page-button {
          background: #3D501A;
          color: #EEEEEE;
          padding: 0 1rem;
          width: 10rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 3px;
        }
        .page-button:focus {
          outline: none;
          background: #616850;
        }
        .page-button:disabled {
          background: #616850;
          opacity: 0.5;
        }
      `}</style>
    </Layout>
  )
}

export default Category;

export const getStaticProps = async ({ params }) => {
  const posts = await readContentFiles({ fs })
  return {
    props: {
      posts: posts.filter(
        (post) => post.category?.find(category => category === params.category)
      ),
    }
  }
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { category: '本' } },
    { params: { category: 'プログラム' } },
    { params: { category: 'LifeHack' } },
    { params: { category: 'レビュー' } },
    { params: { category: '雑記' } },
  ];
  return { paths: paths, fallback: false }
}
