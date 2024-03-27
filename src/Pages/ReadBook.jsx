const ReadBook = ({ book }) => {
  const {
    image,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  // console.log(book);
  return (
    <div>
      <div className="card card-side mt-4  border-2 border-gray-300 w-[80%] bg-base-50 shadow-xl">
        <figure>
          <img className="w-52 p-4" src={image} alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">New movie is released!</h2>
          <span>By: Awlad Hossain</span>
          <div className="flex space-x-5">
            <span>Tag:</span>
            <div className="flex space-x-4">
              <p className="text-lime-500 bg-slate-100 py-1 px-2 rounded-full">
                young adult
              </p>
              <p className="text-lime-500 bg-slate-100 py-1 px-2 rounded-full">
                identity
              </p>
            </div>
            <div>
              <h1>Year of Publishing: 1924</h1>
            </div>
          </div>
          <div className="flex space-x-4">
            <div>
              <p>icon publisher:scribner</p>
            </div>
            <div>
              <p>icon page 192 </p>
            </div>
          </div>
          <hr />
          <div className="flex space-x-4 items-center">
            <div>
              <p>category: classic</p>
            </div>
            <div>
              <p>rating</p>
            </div>
            <div>
              <button className=" px-12 py-2 text-white rounded-full bg-lime-500">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
