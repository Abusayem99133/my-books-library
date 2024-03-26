import { createBrowserRouter } from "react-router-dom";
// import Home from "../../Pages/Home/Banner";
import MainLayouts from "../../Layouts/MainLayouts";
import BookCards from "../../Pages/Home/BookCards/BookCards";
import ListedBooks from "../../Pages/Home/ListedBooks";
import ErrorPage from "./ErrorPage/ErrorPage";

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
        path: "/Listed",
        element: <ListedBooks></ListedBooks>,
      },
    ],
  },
]);
