import React, { useState } from 'react';
import dashboard from '../../assets/icon/cd-dashboard.svg';
import order from '../../assets/icon/cd-order.svg';
import products from '../../assets/icon/cd-products.svg';
import userList from '../../assets/icon/cd-user-list-01.svg';
import chat from '../../assets/icon/cd-chat.svg';
import arrow from '../../assets/icon/cd-arrow-right-2.svg';
import { NavLink } from 'react-router-dom';

const DDNav = () => {
    const [active, setActive] = useState();
    const [isOpen, setOpen] = useState(false);
    const dropdown = () => {

    };

    const navList = [
        {
            id: 1,
            title: 'Dashboard',
            icon: dashboard,
            to: '/admin',
            isDropdown: null
        },
        {
            id: 2,
            title: 'Order',
            icon: order,
            to: '/admin/order',
            isDropdown: [
                {
                    id: 1,
                    title: 'Item request',
                    to: '/admin'
                },
                {
                    id: 2,
                    title: 'All Orders',
                    to: '/admin'
                }
            ]
        },
        {
            id: 3,
            title: 'Products',
            icon: products,
            to: '/admin/products',
            isDropdown: [
                {
                    id: 1,
                    title: 'All Products',
                    to: '/admin'
                },
                {
                    id: 2,
                    title: 'Discount',
                    to: '/admin'
                }
            ]
        },
        {
            id: 4,
            title: 'Customers',
            icon: userList,
            to: '/admin/customers',
            isDropdown: null
        },
        {
            id: 5,
            title: 'Support',
            icon: chat,
            to: '/admin/support',
            isDropdown: null
        },
        {
            id: 6,
            title: 'Staff',
            icon: order,
            to: '/admin/staff',
            isDropdown: null
        }
    ]

    return (
        <nav className='w-[15%] bg-[#efefef] fixed top-0 left-0 bottom-0 pt-24 border-r'>
            <div className='w-full pr-3'>
                <ul>
                    {
                        navList.map(list => (
                            <li
                                key={list.id}
                                className='w-full flex items-center gap-2'
                            >
                                <NavLink
                                    to={list.to}
                                    end
                                    className={({ isActive }) => isActive ? 'bg-secondary w-2 h-10 rounded-full' : 'w-2 h-10 rounded-full'}
                                />
                                <NavLink
                                    to={list.to}
                                    end
                                    className={({ isActive }) => isActive ? 'bg-primary text-white w-full rounded-lg px-4' : 'w-full px-4'}
                                >
                                    {
                                        list.isDropdown ?
                                            <div>
                                                <div className='flex items-center justify-between'>
                                                    <div className='flex items-center gap-2 py-2'>
                                                        <img src={list.icon} alt={list.icon} />
                                                        <p>{list.title}</p>
                                                    </div>
                                                    <img src={arrow} alt="arrow" />
                                                </div>
                                                {/* <ul className='flex flex-col gap-4 my-2 ml-8'>
                                                    {
                                                        list.isDropdown.map(drop => <li key={drop.id}>
                                                            <p>{drop.title}</p>
                                                        </li>)
                                                    }
                                                </ul> */}
                                            </div> :
                                            <div className='flex items-center gap-2 py-2'>
                                                <img src={list.icon} alt={list.icon} />
                                                <p>{list.title}</p>
                                            </div>
                                    }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default DDNav;
