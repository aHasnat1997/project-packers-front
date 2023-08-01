import React from 'react';
import { Outlet } from 'react-router-dom';
import AllUserProvider from '../../../context/AllUserProvider';

const Customers = () => {
    return (
        <section className='dd-section-div'>
            <AllUserProvider>
                <Outlet />
            </AllUserProvider>
        </section>
    );
};

export default Customers;
