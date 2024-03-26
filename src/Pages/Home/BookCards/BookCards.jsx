import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const BookCards = () => {
  const books = useLoaderData();

  // console.log(books);
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold text-[#131313] text-center">
        Book: {books.length}
      </h1>
      <div className="grid grid-cols-3 mt-6">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default BookCards;
