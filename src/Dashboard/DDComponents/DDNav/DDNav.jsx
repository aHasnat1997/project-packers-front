import React, { useState } from 'react';
import dashboard from '../../../assets/icon/cd-dashboard.svg';
import order from '../../../assets/icon/cd-order.svg';
import products from '../../../assets/icon/cd-products.svg';
import userList from '../../../assets/icon/cd-user-list-01.svg';
import chat from '../../../assets/icon/cd-chat.svg';
import NavDropdown from './NavDropdown';
import NavNoDropdown from './NavNoDropdown';

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
            end: true,
            isDropdown: null
        },
        {
            id: 2,
            title: 'Order',
            icon: order,
            isDropdown: [
                {
                    id: 1,
                    title: 'Item request',
                    to: '/admin/request',
                    end: false,
                },
                {
                    id: 2,
                    title: 'All Orders',
                    to: '/admin/orders',
                    end: false,
                }
            ]
        },
        {
            id: 3,
            title: 'Products',
            icon: products,
            isDropdown: [
                {
                    id: 1,
                    title: 'All Products',
                    to: '/admin/products',
                    end: true,
                },
                {
                    id: 2,
                    title: 'Discount',
                    to: '/admin',
                    end: true,
                },
                {
                    id: 3,
                    title: 'Category',
                    to: '/admin',
                    end: true,
                }
            ]
        },
        {
            id: 4,
            title: 'Customers',
            icon: userList,
            to: '/admin/customers',
            end: false,
            isDropdown: null
        },
        {
            id: 5,
            title: 'Support',
            icon: chat,
            to: '/admin/support',
            end: false,
            isDropdown: null
        },
        {
            id: 6,
            title: 'Staff',
            icon: order,
            to: '/admin/staff',
            end: false,
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
                            >
                                {
                                    list.isDropdown ? <NavDropdown list={list} /> : <NavNoDropdown list={list} />
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default DDNav;
