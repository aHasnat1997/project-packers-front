import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import LeftNav from './LeftNav';
import { Outlet } from 'react-router-dom';

const MyAccountLayout = () => {
    return (
        <>
            <Breadcrumb />
            <section className='section-div w-full flex flex-col lg:flex-row lg:items-start gap-7'>
                <LeftNav />
                <Outlet />
            </section>
        </>
    );
};

export default MyAccountLayout;
