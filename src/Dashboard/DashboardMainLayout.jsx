import React from 'react';
import DDHeader from './DDComponents/DDHeader';
import { Outlet } from 'react-router-dom';
import DDNav from './DDComponents/DDNav';
import { useTitle } from '../Hooks/useTitle';

const DashboardMainLayout = () => {
    useTitle('Admin Dashboard');

    return (
        <main>
            <DDHeader />
            <div className='flex'>
                <DDNav />
                <Outlet />
            </div>
        </main>
    );
};

export default DashboardMainLayout;
