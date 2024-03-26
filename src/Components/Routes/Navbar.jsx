import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar p-2 mb-24 bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listed">Listed Books</Link>
            </li>
            <li>
              <Link>Pages to Read</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listed">Listed Books</Link>
          </li>
          <li>
            <Link>Pages to Read</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-20 space-x-4">
        <a className="btn bg-lime-500">Sign In</a>
        <a className="btn bg-teal-400">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
