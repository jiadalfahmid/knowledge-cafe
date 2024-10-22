import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {
const [blogs, setBlogs] = useState([]);

useEffect(() => {
   fetch("https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/refs/heads/main/public/blogs.json")
   .then((res) => res.json())
   .then((data) => setBlogs(data));
}, []);

};

export default Blogs;
