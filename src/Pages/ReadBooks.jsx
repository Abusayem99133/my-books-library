import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookDetails } from "../utils/localStorage";
import ReadBook from "./ReadBook";
const ReadBooks = () => {
  const [bookDetails, setBookDetails] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBookDetails(data));
  }, []);
  // const [bookD, setBookD] = useState();
  // const [displayBook, setDisplayBook] = useState([]);

  // useEffect(() => {
  //   const storedBookId = getStoredBookDetails();
  //   if (bookDetails.length > 0) {
  //     const bookDetailsAdd = [];
  //     for (const id of storedBookId) {
  //       const bookDetail = bookDetails.find(
  //         (bookDetail) => bookDetail.id === id
  //       );
  //       if (bookDetail) {
  //         bookDetailsAdd.push(bookDetail);
  //       }
  //     }
  //     setBookD(bookDetailsAdd);
  //     setDisplayBook(bookDetailsAdd);
  //   }
  // }, [bookDetails]);
  console.log(bookDetails);
  return (
    <div className="">
      {bookDetails.map((book) => (
        <ReadBook key={book.id} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
