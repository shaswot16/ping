// src/state/reducers/productReducer.js

const initialState = [
    {
      id: 1,
      title: "Red T-shirt",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      offer: false,
      category: "clothing"
    },
    {
      id: 2,
      title: "Blue Jeans",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      offer: true,
      category: "clothing"
    }
  ];
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default productReducer;
  