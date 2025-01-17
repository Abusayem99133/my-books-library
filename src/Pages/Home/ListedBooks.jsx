import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import ReadBooks from "../ReadBooks";
// import Wishlist from "./Wishlist";
import WishListDetails from "./WishListDetails";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center bg-slate-300 p-4">Book</h1>
      <div className="text-center mt-6">
        <details className="dropdown">
          <summary className="m-1 btn  bg-lime-400">
            Sort By <IoIosArrowDown />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Sort By</a>
            </li>
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a> Number of Pages</a>
            </li>
            <li>
              <a>Published Year</a>
            </li>
          </ul>
        </details>
      </div>

      <div>
        <div className="flex items-center  -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-100">
          <div
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
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
            <span className="cursor-pointer">Read Book</span>
          </div>
          <div
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
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
            <span className="cursor-pointer">Wishlist</span>
          </div>
        </div>
      </div>
      {tabIndex !== 1 ? <ReadBooks /> : <WishListDetails />}
      {/* {tabIndex !== 1 && <Wishlist />} */}
      {/* <Outlet></Outlet> */}
    </div>
  );
};

export default ListedBooks;
