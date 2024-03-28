import { Outlet } from "react-router-dom";

import Navbar from "../Components/Routes/Navbar";
import Footer from "../Components/Footer";
// import ListedBooks from "../Pages/Home/ListedBooks";

const MainLayouts = () => {
  return (
    <div className="md:ml-24 mr-24">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="mt-44">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
