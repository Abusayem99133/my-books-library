import { createBrowserRouter } from "react-router-dom";
// import Home from "../../Pages/Home/Banner";
import MainLayouts from "../../Layouts/MainLayouts";
import BookCards from "../../Pages/Home/BookCards/BookCards";
import ListedBooks from "../../Pages/Home/ListedBooks";
import ErrorPage from "./ErrorPage/ErrorPage";
import BooksDetails from "../../Pages/BooksDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <BookCards></BookCards>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/details/:id",
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);
