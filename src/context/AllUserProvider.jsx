import React, { createContext, useEffect, useState } from 'react';

export const AllUserContext = createContext(null);

const AllUserProvider = ({ children }) => {
    const [customersData, setCustomersData] = useState([]);
    useEffect(() => {
        const options = { method: 'GET' };
        fetch('/customersInfo.json', options)
            .then(response => response.json())
            .then(response => {
                setCustomersData(response)
            })
            .catch(err => console.error(err));
    }, [])

    const customersInfo = { customersData }

    return (
        <AllUserContext.Provider value={customersInfo}>
            {children}
        </AllUserContext.Provider>
    );
};

export default AllUserProvider;
