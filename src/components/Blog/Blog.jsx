import { PropTypes } from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
  const {
    title,
    id,
    cover,
    hashtags,
    reading_time,
    posted_date,
    author,
    author_img,
  } = blog;
  return (
    <div className="mb-10 border-b-2 pb-10" id={id}>
      <img src={cover} alt="" className="w-full rounded-xl mb-6" />
      <div className="flex justify-between mb-4">
        <div className="flex gap-4 items-center">
          <img src={author_img} alt="" className="w-14" />
          <div className="">
            <h3 className="font-bold text-xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-lg">{reading_time} min read</p>
          <button className="btn" onClick={() => handleBookmarks(blog)}>
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="font-bold text-3xl mb-4">{title}</h2>
      <p className="text-gray-500 mb-4">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="" className="mr-2">
              #{hash}{" "}
            </a>
          </span>
        ))}
      </p>
      <button
        className="btn font-semibold text-purple-700 underline"
        onClick={() => handleReadingTime(reading_time, id)}
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmarks: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blog;
