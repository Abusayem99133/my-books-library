import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";
const ReadBook = ({ book }) => {
  const {
    image,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    bookName,
    id,
    rating,
  } = book;
  // console.log(book);
  return (
    <div className="">
      <div className="card md:card-side  -mr-24 md:-mr-0 mt-4  border-2 border-gray-300 md:w-[80%] bg-base-50 shadow-xl">
        <figure>
          <img className="w-52 p-4" src={image} alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{bookName}</h2>
          <span>By: {author}</span>
          <div className="md:flex space-x-5">
            <span className="font-extrabold">Tag:</span>
            <div className="space-y-6 text-center md:space-y-0 md:flex space-x-4">
              <p className="text-lime-500 bg-slate-100 py-1  px-2 rounded-full font-extrabold">
                <span className="text-lime-500 font-bold text-2xl"> #</span>
                {tags[0]}
              </p>
              <p className="text-lime-500 bg-slate-100 py-1 px-2 rounded-full font-extrabold">
                <span className="text-lime-500  text-2xl"> #</span>
                {tags[1]}
              </p>
            </div>
            <div>
              <h1 className="flex items-center ">
                <CiLocationOn></CiLocationOn> Year of Publishing:{" "}
                {yearOfPublishing}
              </h1>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <p className="flex items-center">
                <IoMdContacts /> publisher:{publisher}
              </p>
            </div>
            <div>
              <p>
                <MdOutlineContactPage></MdOutlineContactPage> page 192{" "}
              </p>
            </div>
          </div>
          <hr />
          <div className="flex -ml-5 md:-ml-0 items-center">
            <div className="bg-sky-200 py-1 px-5 text-cyan-600 rounded-full">
              <p>category: {category}</p>
            </div>
            <div className="text-orange-400 bg-orange-100 py-1 px-6 rounded-full">
              <p>Rating: {rating}</p>
            </div>
            <div>
              <Link to={`/details/${id}`}>
                <button className=" px-12 py-2 text-white rounded-full bg-lime-500">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
