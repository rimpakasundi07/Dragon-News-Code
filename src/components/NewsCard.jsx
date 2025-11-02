import { FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl ">
      {/* Author Info */}
      <div className="flex bg-base-200 items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="badge badge-secondary capitalize">{rating.badge}</div>
      </div>

      {/* News Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title leading-snug">{title}</h2>
        <div className="px-4 text-accent">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </div>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="badge badge-outline">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
