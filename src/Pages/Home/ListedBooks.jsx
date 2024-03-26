const ListedBooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-slate-300 p-4">Book</h1>
      <div className="text-center mt-6 text-lime-400">
        <details className="dropdown">
          <summary className="m-1 btn  bg-lime-400">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default ListedBooks;
