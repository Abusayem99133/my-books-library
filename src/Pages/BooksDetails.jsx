import { useLoaderData, useParams } from "react-router-dom";

const BooksDetails = () => {
  const bookDetails = useLoaderData();
  const { id } = useParams();
  const idInteser = parseInt(id);
  const bDetails = bookDetails.find((bDetails) => bDetails.id === idInteser);
  console.log(bDetails);
  //   console.log(bookDetails);
  return (
    <div>
      <h1>hi im in book details</h1>
    </div>
  );
};

export default BooksDetails;
