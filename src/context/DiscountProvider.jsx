import React, { createContext, useEffect, useState } from 'react';

export const AllDiscountContext = createContext(null);

const DiscountProvider = ({ children }) => {
  const [discountData, setDiscountData] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('/discountsList.json', options)
      .then(response => response.json())
      .then(response => {
        setDiscountData(response)
      })
      .catch(err => console.error(err));
  }, [])

  const discountInfo = { discountData }

  return (
    <AllDiscountContext.Provider value={discountInfo}>
      {children}
    </AllDiscountContext.Provider>
  );
};

export default DiscountProvider;
