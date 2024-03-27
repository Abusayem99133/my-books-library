import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero  md:w-[90%] ,md:ml-16 rounded-2xl bg-slate-200">
      <div className="flex sm:py-5 sm:px-5 md:py-20 md:px-28 items-center flex-col justify-start lg:flex-row-reverse gap-20">
        <img
          src="./src/assets/img/thedatingplaybook-608x1024-removebg-preview.png"
          className=" p-12 md:p-0 md:rounded-lg shadow-2xl"
        />
        <div className="p-5 md:p-0">
          <h1 className="md:text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <Link to="/listed" className="btn bg-lime-500 mt-4 text-white">
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
