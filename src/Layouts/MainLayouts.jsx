import { Outlet } from "react-router-dom";

import Navbar from "../Components/Routes/Navbar";
// import ListedBooks from "../Pages/Home/ListedBooks";

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
