import { createBrowserRouter } from "react-router-dom";
// import Home from "../../Pages/Home/Banner";
import MainLayouts from "../../Layouts/MainLayouts";
import BookCards from "../../Pages/Home/BookCards/BookCards";
// import Banner from "../../Pages/Home/Banner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      //   {
      //     path: "/",
      //     element: <Banner></Banner>,
      //   },
      {
        path: "/",
        element: <BookCards></BookCards>,
      },
    ],
  },
]);
