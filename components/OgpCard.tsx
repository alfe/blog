import Image from "next/image";
import { OgpData } from "lib/getOgpData";

type OgpCardProps = {
  href: string | null;
  ogp?: OgpData;
};

// Validate image URL to prevent loading malicious content
const isValidImageUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    // Only allow HTTPS URLs from trusted domains
    return parsedUrl.protocol === 'https:' && 
           parsedUrl.hostname !== 'localhost' &&
           !parsedUrl.hostname.startsWith('127.') &&
           !parsedUrl.hostname.startsWith('192.168.') &&
           !parsedUrl.hostname.startsWith('10.');
  } catch {
    return false;
  }
};

const OgpCard = (props: OgpCardProps) => {
  const { ogp } = props;
  
  // Validate and sanitize image URL
  const imageUrl = ogp?.ogImage?.[0]?.url;
  const hasValidImage = imageUrl && isValidImageUrl(imageUrl);
  
  return (
    <span>
      <a className="ogp-link" href={props.href} target="_blank" rel="noopener noreferrer">
      {hasValidImage && (
        <Image 
          alt={ogp.ogTitle || "ogp-link"}
          src={imageUrl}
          width={Math.max(200, Math.min(720, Number(ogp.ogImage[0].width ?? 1200) * 3 / 5))}
          height={Math.max(100, Math.min(400, Number(ogp.ogImage[0].height ?? 630) * 3 / 5))}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjg0PjU1ODU4QkFBNz5GRl5eXl5eXl5eXl5eXl7/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="ogp-image"
          onError={(e) => {
            // Hide image if it fails to load
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
      <cite>{ogp?.ogTitle || 'No title available'}</cite>
      <br />
      <small>{ogp?.ogDescription || 'No description available'}</small>
      <br />
      <small className="ogp-url">{props.href}</small>
      </a>
      <style jsx>{`
        .ogp-link {
          max-width: 720px;
          display: block;
          overflow: hidden;
          border: 1px solid #CCC;
          border-radius: 8px;
          padding: 0;
          margin: auto;
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }
        .ogp-link:hover {
          box-shadow: 4px 4px 8px rgb(0 0 0 / 10%);
          transform: translate(-1px, -1px);
        }
        .ogp-link:active {
          box-shadow: none;
          transform: translate(1px, 1px);
          backdrop-filter: brightness(0.95);
          filter: brightness(0.95);
        }
        .ogp-link cite {
          margin: 0 1rem;
          color: #333;
          font-weight: 600;
          font-style: inherit;
        }
        .ogp-link small {
          margin: 0 1rem;
          color: #666;
        }
        .ogp-link .ogp-url {
          margin: 1rem 1rem 0.5rem;
          float: right;
        }
        .ogp-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      `}</style>
    </span>
  );
};

export default OgpCard;
