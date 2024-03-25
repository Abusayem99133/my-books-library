// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";

// import { useEffect, useState } from "react";

const BookCards = () => {
  const books = useLoaderData();
  //   const [book, setBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("books.json")
  //       .then((res) => res.json())
  //       .then((data) => setBooks(data));
  //   }, []);
  console.log(books);
  return (
    <div className="mt-20">
      <h1>Book:</h1>
    </div>
  );
};

export default BookCards;
