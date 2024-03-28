import PropTypes from "prop-types";

const Collection = ({ collection }) => {
  //   console.log(collection);
  const { image, book_name, author, library_name, price, rating } = collection;
  return (
    <div>
      <div className="ml-24 p-4 md:p-0 md:ml-0 md:card bg-base-100 shadow-xl hover:bg-lime-200 md:hover:bg-purple-500 hover:scale-105 rounded-2xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl bg:shadow- dark:bg-gray-400 h-48 "
          />
        </figure>
        <div className="md:card-body items-center space-y-4 md:text-center">
          <h2 className="card-title text-3xl mt-4">{book_name}</h2>
          <p>By: {author}</p>
          <p>Library Name: {library_name}</p>
          <span className="space-x-5 md:space-x-0">Price: $ {price}</span>
          <span>Rating: {rating}</span>
          <div className="card-actions">
            <button className="btn bg-lime-300">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
Collection.propTypes = {
  collection: PropTypes.object,
};
export default Collection;
