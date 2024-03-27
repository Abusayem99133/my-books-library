const getStoredBookDetails = () =>{
    const storedBook = localStorage.getItem('read-books');
    if(storedBook){
    return JSON.parse(storedBook);
    }
    return [];
}


const saveBookReadDetails = id=>{
const storedBooks = getStoredBookDetails();
const exists = storedBooks.find(bookId => bookId === id)
if(!exists){
    storedBooks.push(id);
    localStorage.setItem('read-books', JSON.stringify(storedBooks))
}
}

export {getStoredBookDetails,saveBookReadDetails} 