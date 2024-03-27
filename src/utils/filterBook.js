export const filterDataBySavedBooks = (data) => {

    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
  
  
    const filteredData = data.filter((item) => savedBooks.includes(item.id));
  
    return filteredData;
  };