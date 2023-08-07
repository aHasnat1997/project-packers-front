import React, { createContext, useEffect, useState } from 'react';


export const AllOrdersProductContext = createContext(null);

const AllOrdersProductProvider = ({ children }) => {
  const [ordersProductData, setOrdersProductData] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('/customersInfo.json', options)
      .then(response => response.json())
      .then(response => {
        setOrdersProductData(response)
      })
      .catch(err => console.error(err));
  }, [])

  const ordersProductInfo = { ordersProductData }

  return (
    <AllOrdersProductContext.Provider value={ordersProductInfo}>
      {children}
    </AllOrdersProductContext.Provider>
  );
};

export default AllOrdersProductProvider;
