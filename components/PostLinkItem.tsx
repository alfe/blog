import Link from "next/link";
import Image from "next/image";

const PostLinkItem = (props: { to: string; title: string; published: string | Date; thumbnail?: string; }) => {
  return <>
    <Link className="post-teaser" href={props.to} as={props.to} prefetch={false}>
      <div className="post-info">
        <h2>{props.title}</h2>
        <div><span>{new Date(props.published).toLocaleDateString()}</span></div>
      </div>
      <div className="post-thumbnail">
        <Image 
          src={props.thumbnail || '/img/noImage.jpg'} 
          alt={props.title}
          width={240} 
          height={135}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU4QkFBNz5GRl5eXl5eXl5eXl5eXl7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="(max-width: 768px) 100vw, 240px"
          className="post-thumbnail-image"
        />
      </div>
    </Link>

    <style jsx global>{`
      .post-teaser {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 2em;
        color: #333;
        text-decoration: none;
        padding: 16px 32px;
        border-radius: 3px;
        transition: all 0.2s ease-in-out;
      }
      .post-teaser:hover {
        filter: opacity(0.7);
        transform: translateY(-2px);
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
        height: 135px;
        background: lightgray;
      }
      .post-thumbnail-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </>;
};

export default PostLinkItem;
