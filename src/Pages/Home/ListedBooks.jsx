import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
// import ReadAndWishList from "./ReadAndWishList";

// import ReadBooks from "../ReadBooks";

const ListedBooks = () => {
  const [tadIndex, setTabIndex] = useState(0);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-slate-300 p-4">Book</h1>
      <div className="text-center mt-6 text-lime-400">
        <details className="dropdown">
          <summary className="m-1 btn  bg-lime-400">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="p-4">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-100">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tadIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg border-gray-400 text-black`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read</span>
          </Link>
          <Link
            to="wishlist"
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tadIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg border-gray-400 text-black`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist</span>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
