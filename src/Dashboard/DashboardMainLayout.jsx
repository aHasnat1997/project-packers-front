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
            <DDHeader />
            <div className='flex'>
                <DDNav />
                <Outlet />
            </div>
        </main>
    );
};

export default DashboardMainLayout;
