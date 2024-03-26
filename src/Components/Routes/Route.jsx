import { createBrowserRouter } from "react-router-dom";
// import Home from "../../Pages/Home/Banner";
import MainLayouts from "../../Layouts/MainLayouts";
import BookCards from "../../Pages/Home/BookCards/BookCards";
import ListedBooks from "../../Pages/Home/ListedBooks";
import ErrorPage from "./ErrorPage/ErrorPage";
import BooksDetails from "../../Pages/BooksDetails";

import ReadBooks from "../../Pages/ReadBooks";
import Wishlist from "../../Pages/Home/Wishlist";

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
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("books.json"),
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/details/:id",
        element: <BooksDetails></BooksDetails>,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);
