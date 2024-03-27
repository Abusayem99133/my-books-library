import { createBrowserRouter } from "react-router-dom";

import MainLayouts from "../../Layouts/MainLayouts";
import BookCards from "../../Pages/Home/BookCards/BookCards";
import ListedBooks from "../../Pages/Home/ListedBooks";
import ErrorPage from "./ErrorPage/ErrorPage";
import BooksDetails from "../../Pages/BooksDetails";

import ReadBooks from "../../Pages/ReadBooks";
import Wishlist from "../../Pages/Home/Wishlist";
import BarChart from "./BarChart";

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
            path: "",
            element: <ReadBooks></ReadBooks>,
            // element: <BookCards></BookCards>,
            // loader: () => fetch("books.json"),
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
      {
        path: "/pages",
        element: <BarChart></BarChart>,
      },
    ],
  },
]);
