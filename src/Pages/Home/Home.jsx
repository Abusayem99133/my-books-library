const Home = () => {
  return (
    <div className="hero  w-[90%] ml-16 rounded-2xl bg-slate-200">
      <div className="flex  py-20 px-28 items-center flex-col lg:flex-row-reverse gap-20">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
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

export default Home;
