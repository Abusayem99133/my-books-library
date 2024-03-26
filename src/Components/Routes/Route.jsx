import { createBrowserRouter } from "react-router-dom";
// import Home from "../../Pages/Home/Banner";
import MainLayouts from "../../Layouts/MainLayouts";
import BookCards from "../../Pages/Home/BookCards/BookCards";
import ListedBooks from "../../Pages/Home/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
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
