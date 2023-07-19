import React from 'react';
import Nav from '../../components/Nav';
import { Outlet } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter';

const AuthenticationLayout = () => {
    return (
        // to-do: responsive modal
        <section className='min-h-screen bg-primary flex flex-col'>
            <Nav />
            <Outlet />
            <AuthFooter />
        </section>
    );
};

export default AuthenticationLayout;
