import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookDetials } from "../utils/localStorage";
import ReadBook from "./ReadBook";

const ReadBooks = () => {
  const bookDetails = useLoaderData();
  const [bookD, setBookD] = useState([]);
  const [displayBook, setDisplayBook] = useState([]);

  useEffect(() => {
    const storedBookId = getStoredBookDetials();
    if (bookDetails.length > 0) {
      const bookDetailsAdd = [];
      for (const id of storedBookId) {
        const bookDetail = bookDetails.find(
          (bookDetail) => bookDetail.id === id
        );
        if (bookDetail) {
          bookDetailsAdd.push(bookDetail);
        }
      }
      setBookD(bookDetailsAdd);
    }
  }, [bookDetails]);
  // console.log(bookDetails);
  return (
    <div className="">
      {bookD.map((book) => (
        <ReadBook key={book.id} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
