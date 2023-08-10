import React from 'react';
import DDHeader from './DDComponents/DDHeader';
import { Outlet } from 'react-router-dom';
import DDNav from './DDComponents/DDNav/DDNav';
import { useTitle } from '../Hooks/useTitle';
import StayTop from '../components/StayTop';

const DashboardMainLayout = () => {
    useTitle('Admin Dashboard');

    return (
        <main className='h-screen overflow-hidden no-scrollbar'>
            <StayTop />
            <div className='grid grid-cols-12'>
                <div className='col-span-full'>
                    <DDHeader />
                </div>
                <div className='col-span-2'>
                    <DDNav />
                </div>
                <div className='col-span-10 h-[calc(100vh-77px)]'>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default DashboardMainLayout;
