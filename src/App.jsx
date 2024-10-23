import './App.css'
import Blogs from './components/Blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/header'
import {useState} from "react"

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex gap-4 container mx-auto">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>    
      </div>
    </>
  )
}

export default App
