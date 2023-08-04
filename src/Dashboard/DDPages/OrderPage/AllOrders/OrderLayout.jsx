import React from 'react';
import AllOrdersProductProvider from '../../../../context/AllOrdersProductProvider';
import { Outlet } from 'react-router-dom';

const OrderLayout = () => {
    return (
        <section className='dd-section-div'>
            <AllOrdersProductProvider>
                <Outlet />
            </AllOrdersProductProvider>
        </section>
    );
};

export default OrderLayout;
