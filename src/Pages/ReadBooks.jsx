import { useEffect, useState } from "react";

import ReadBook from "./ReadBook";
import { filterDataBySavedBooks } from "../utils/filterBook";

const ReadBooks = () => {
  const [bookDetails, setBookDetails] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBookDetails(data));
  }, []);

  return (
    <div className="">
      {filterDataBySavedBooks(bookDetails)?.map((book) => (
        <ReadBook key={book.id} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
