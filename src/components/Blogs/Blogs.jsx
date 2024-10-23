import { useState } from "react";
import { useEffect } from "react";
import Blog from "../Blog/blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmarks}) => {
const [blogs, setBlogs] = useState([]);

useEffect(() => {
   fetch("https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/refs/heads/main/public/blogs.json")
   .then((res) => res.json())
   .then((data) => setBlogs(data));
}, []);

return (
   <div className="md:w-2/3">
      {
         blogs.map(blog => <Blog 
            key={blog.id}
            blog={blog}
            handleBookmarks={handleBookmarks}
            >
            </Blog>)
      }
   </div>
)

};

Blogs.propTypes= {
   handleBookmarks: PropTypes.func
}
export default Blogs;
