import { Outlet } from "react-router-dom";

import Navbar from "../Components/Routes/Navbar";

const MainLayouts = () => {
  return (
    <div className="md:ml-24 mr-24">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
