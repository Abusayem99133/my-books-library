import { useEffect, useState } from "react";
import { filterDataBySavedWish } from "../../utils/filterWish";
import Wishlist from "./Wishlist";
const WishListDetails = () => {
  const [wishLists, setWishList] = useState([]);
  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setWishList(data));
  }, []);
  // console.log(wishLists);
  return (
    <div>
      {filterDataBySavedWish(wishLists)?.map((bookWish) => (
        <Wishlist key={bookWish.id} bookWish={bookWish}></Wishlist>
      ))}
    </div>
  );
};

export default WishListDetails;
