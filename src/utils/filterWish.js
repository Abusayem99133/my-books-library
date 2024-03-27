export const filterDataBySavedWish = (data) => {

    const savedWish = JSON.parse(localStorage.getItem('savedWish')) || [];
  
  
    const filteredData = data.filter((item) => savedWish.includes(item.id));
  
    return filteredData;
  };