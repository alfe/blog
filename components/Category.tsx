const Category = (props: { category: string[] }) => {
  return (
    <div>
      {(props.category || []).map(category => (
        <span key={category} className="category">{category}</span>
      ))}
      <style jsx>{`
        .category {
          padding: 0 0.5rem;
          background: midnightblue;
          border-radius: 3px;
          color: #EEE;
          font-size: .9rem;
        }
      `}</style>
    </div>
  )
}
export default Category;
