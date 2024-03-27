import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Book = ({ book }) => {
  const { author, bookName, category, id, image, rating, tags } = book;
  // console.log(book);
  return (
    <Link to={`/details/${id}`}>
      <div className="max-w-xs p-6 rounded-md shadow-md space-y-5">
        <img
          src={image}
          alt=""
          className="object-cover p-12 object-center w-full rounded-md h-72 bg-gray-200"
        />
        <div className="flex justify-between mt-6 mb-2">
          <span
            className="block text-xs font-medium tracking-widest uppercase text-[#23be0a] bg-[#f4fcf3]
           px-4 py-2 rounded-full"
          >
            {tags[0]}
          </span>
          <span className="block text-xs font-medium tracking-widest uppercase text-[#23be0a] bg-[#f4fcf3] px-4 py-2 rounded-full">
            {tags[1]}
          </span>
        </div>
        <h2 className="text-2xl font-bold  mt-4 mb-4 tracking-wide">
          {bookName}
        </h2>
        <span className="text-xs font-medium">By: {author}</span>
        <hr className="border-dashed mt-5" />
        <div className="flex justify-between font-medium mt-5">
          <p>{category}</p>
          <p>{rating}</p>
        </div>
      </div>
    </Link>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
