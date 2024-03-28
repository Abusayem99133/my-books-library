import { useEffect, useState } from "react";
import Collection from "./Collection";

const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);
  //   console.log(newCollection);
  return (
    <div className="items-center">
      <h1 className="text-4xl font-bold text-lime-300 bg-purple-400 p-4 text-center">
        New Collection in Here
      </h1>
      <div className="grid md:grid-cols-3 space-y-5 mt-8 gap-8">
        {newCollection?.map((collection) => (
          <Collection key={collection.id} collection={collection}></Collection>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
