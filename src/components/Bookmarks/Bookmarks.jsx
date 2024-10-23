import { PropTypes } from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
   return (
      <div className="md:w-1/3 bg-gray-100 rounded-xl p-8">
         <h1 className="text-2xl font-bold mb-8">Bookmarked Blogs:{bookmarks.length}</h1>
         {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
         }
      </div>
   );
};
Bookmarks.propTypes={
   bookmarks: PropTypes.object,
}

export default Bookmarks;