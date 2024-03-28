import { useLoaderData } from "react-router-dom";
import Book from "./Book";
import Banner from "../../../Components/Banner";

const BookCards = () => {
  const books = useLoaderData();

  // console.log(books);
  return (
    <div>
      <Banner></Banner>
      <div className="mt-20  items-center">
        <h1 className="text-5xl font-bold text-[#131313] text-center">Book</h1>

        <div className="grid md:grid-cols-3 mt-6 gap-8 md:ml-36">
          {books.map((book) => (
            <Book key={book.id} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCards;
