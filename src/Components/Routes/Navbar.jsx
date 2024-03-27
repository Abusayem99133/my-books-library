import { NavLink } from "react-router-dom";

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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listed">Listed Books</NavLink>
            </li>
            <li>
              <NavLink to="/pages">Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold text-lime-600">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listed"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-600 border-2 border-lime-500 hover:bg-lime-400 font-bold"
                  : "font-bold"
              }
            >
              Pages to Read
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-20 -ml-5 md:ml-0 md:mt-0 navbar-end space-x-4">
        <a className="btn bg-lime-500">Sign In</a>
        <a className="btn bg-teal-400">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
