import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookToLocalStorage } from "../utils/saveBook/saveBook";
import { saveWishToLocalStorage } from "../utils/saveWish";
// import { ToastContainer } from "react-toastify";

const BooksDetails = () => {
  const bookDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const bDetails = bookDetails.find((bDetails) => bDetails.id === idInt);
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,

    totalPages,
    yearOfPublishing,
  } = bDetails;
  // console.log(bDetails);

  const handleReadBook = () => {
    saveBookToLocalStorage(idInt);
    toast.success("Already Read this Book.....!");
  };
  const handleWishlistBook = () => {
    saveWishToLocalStorage(idInt);
    toast.warning("Already read this Book ");
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content space-x-6 flex-col lg:flex-row">
          <img src={image} className="md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl mb-4 font-bold">{bookName}</h1>
            <span> By: {author}</span>
            <hr className="mt-4 mb-4" />
            <span className="">{category}</span>
            <hr className="mt-4" />
            <p className="py-6">
              <span className="font-black">review</span> {review}
            </p>

            <div className="flex space-x-8 mt-6 mb-2">
              <p className="font-black">Tag:</p>
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
            <hr />
            <div className="space-y-5 mt-4">
              <p>Number of Pages: {totalPages}</p>
              <p>Publisher: {publisher}</p>
              <p>Year of Publishing: {yearOfPublishing}</p>
              <p>Rating: {rating}</p>
            </div>
            <div className="space-x-4 mt-4">
              <Link>
                <button
                  onClick={handleReadBook}
                  className="btn bg-lime-400 py-4 px-8"
                >
                  Read
                </button>
              </Link>
              <Link>
                <button
                  onClick={handleWishlistBook}
                  className="btn bg-lime-400 py-4 px-8"
                >
                  Wishlist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
      {/* {bDetails.map((read) => (
        <ReadBooks key={read.id} read={read}></ReadBooks>
      ))} */}
    </div>
  );
};

export default BooksDetails;
