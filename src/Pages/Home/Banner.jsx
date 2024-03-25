const Banner = () => {
  return (
    <div className="hero  w-[90%] ml-16 rounded-2xl bg-slate-200">
      <div className="flex  py-20 px-28 items-center flex-col lg:flex-row-reverse gap-20">
        <img
          src="./src/assets/img/thedatingplaybook-608x1024-removebg-preview.png"
          className=" rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn bg-lime-500 mt-4 text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
