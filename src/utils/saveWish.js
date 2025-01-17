import { toast } from "react-toastify";

export  const saveWishToLocalStorage = (bookId) => {
    const savedWish = JSON.parse(localStorage.getItem('savedWish')) || [];
  
    if (!savedWish.includes(bookId)) {
      savedWish.push(bookId);
  
      localStorage.setItem('savedWish', JSON.stringify(savedWish));
      toast.success('Add to WishList...!')
    }else{
      toast.warning('Already add to WishList ')
    }
  };