import React, { createContext, useEffect, useState } from 'react';

export const AllRequestProductContext = createContext(null);

const AllRequestProductProvider = ({ children }) => {
  const [requestProductData, setRequestProductData] = useState([]);
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('/requestProductInfo.json', options)
      .then(response => response.json())
      .then(response => {
        setRequestProductData(response)
      })
      .catch(err => console.error(err));
  }, [])

  const requestProductInfo = { requestProductData }

  return (
    <AllRequestProductContext.Provider value={requestProductInfo}>
      {children}
    </AllRequestProductContext.Provider>
  );
};

export default AllRequestProductProvider;
