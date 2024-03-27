import { Link } from "react-router-dom";
import Image from "../assets/img/thedatingplaybook-608x1024-removebg-preview.png";
const Banner = () => {
  return (
    <div className="ml-12 md:ml-0 w-72 md:hero space-x-12 rounded-3xl bg-base-200">
      <div className="md:hero-content flex-col md:flex-row-reverse ">
        <img src={Image} className="md:max-w-sm rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="mt-6 p-4 md:p-0 text-3xl md:text-5xl space-x-6 font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <div className="p-4 md:p-0">
            <Link
              to="/listed"
              className=" btn  md:btn bg-lime-500 md:bg-lime-500 mt-4 text-white"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
