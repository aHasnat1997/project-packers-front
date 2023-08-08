import React from 'react';
import AllProductsProvider from '../../../context/AllProductsProvider';
import { Outlet } from 'react-router-dom';

const AdminProductsLayout = () => {
    return (
        <section className='dd-section-div'>
            <AllProductsProvider>
                <Outlet />
            </AllProductsProvider>
        </section>
    );
};

export default AdminProductsLayout;
