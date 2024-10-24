import "./App.css";
import Blogs from "./components/Blogs/blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/header/header";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time, id) => {
    const newTime = markAsRead + time;
    setMarkAsRead(newTime);
    const remainingBookmarks = bookmarks.filter(
      (bookmarks) => bookmarks.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-4 container mx-auto">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </div>
    </>
  );
}

export default App;
