import { toast } from "react-toastify";

export  const saveBookToLocalStorage = (bookId) => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  
    if (!savedBooks.includes(bookId)) {
      savedBooks.push(bookId);
  
      localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
      toast.success('Added to Read')
    }else{
      toast.warning('Allready added to read book')
    }
  };