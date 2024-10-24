import { PropTypes } from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, markAsRead}) => {
   return (
      <div className="md:w-1/3 space-y-4">
         <div className="bg-purple-100 pt-6 rounded-xl border-2 border-purple-600 flex justify-center items-center">
            <h1 className="text-2xl font-bold mb-8 text-purple-600">Reading Time: {markAsRead}</h1>
         </div>
         <div className=" bg-gray-100 rounded-xl p-8">
            <h1 className="text-2xl font-bold mb-8">Bookmarked Blogs: {bookmarks.length}</h1>
            {
               bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
         </div>
      </div>
   );
};
Bookmarks.propTypes={
   bookmarks: PropTypes.array,
   markAsRead: PropTypes.number,
}

export default Bookmarks;