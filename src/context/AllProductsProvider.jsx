import React, { createContext, useEffect, useState } from 'react';

export const AllProductsContext = createContext(null);

const AllProductsProvider = ({ children }) => {
  const [productData, setProductsData] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      withCredentials: true
    };
    fetch(`${import.meta.env.VITE_BASE_URL}/products?page=1&limit=30`, options)
      .then(response => response.json())
      .then(response => {
        setProductsData(response)
      })
      .catch(err => console.error(err));
  }, [])

  const productInfo = { productData }

  return (
    <AllProductsContext.Provider value={productInfo}>
      {children}
    </AllProductsContext.Provider>
  );
};

export default AllProductsProvider;
