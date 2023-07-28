import React, { useContext } from 'react';
import products from '../../assets/icon/cd-products.svg';
import user from '../../assets/icon/cd-user-list-01.svg';
import logout from '../../assets/icon/logout.svg';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const LeftNav = () => {
    const { setUser } = useContext(AuthContext);

    return (
        <nav className='min-w-full lg:min-w-[20%] lg:border rounded-lg lg:p-5 flex lg:flex-col gap-5'>
            <NavLink
                to='/account/order'
                className={({ isActive }) => isActive ? 'btn-primary border-2' : 'btn-outline'}
            >
                <span className='flex py-3 px-8 w-full'>
                    <img src={products} alt="products" />
                    <span className='hidden lg:block'>Order</span>
                </span>
            </NavLink>
            <NavLink
                to='/account/details'
                className={({ isActive }) => isActive ? 'btn-primary border-2' : 'btn-outline'}
            >
                <span className='flex py-3 px-8 w-full'>
                    <img src={user} alt="user" />
                    <span className='hidden lg:block'>Account details</span>
                </span>
            </NavLink>
            <button
                onClick={() => setUser(false)}
            >
                <span className='btn-outline flex py-3 px-8 w-full'>
                    <img src={logout} alt="logout" />
                    <span className='hidden lg:block'>Logout</span>
                </span>
            </button>
        </nav>
    );
};

export default LeftNav;
