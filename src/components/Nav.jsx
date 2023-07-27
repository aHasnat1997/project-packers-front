import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchField } from "./SearchField";
import avatar from '../assets/icon/avatar.svg';
import notification from '../assets/icon/cd-notification-01.svg';
import support from '../assets/icon/cd-customer-support-01.svg';
import logout from '../assets/icon/logout.svg';
import products from '../assets/icon/cd-products.svg';
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import usePreviousLocation from "../Hooks/usePreviousLocation";
import searchYellow from '../assets/icon/cd-search-yellow.svg';
import Dropdown from "./Dropdown/Dropdown";
import NotificationDropdown from "./Dropdown/NotificationDropdown";
import ProductsDropdown from "./Dropdown/ProductsDropdown";
import { OutSideClick } from "./OutSideClick";

const Nav = ({ isOpen, setOpen }) => {
    const { user } = useContext(AuthContext);
    const { savePreviousLocation } = usePreviousLocation();
    const location = useLocation();

    const lgNav = () => {
        return (
            <div className="max-w hidden lg:flex items-center justify-between gap-4">
                <Link to='/'><Logo isNav={true} /></Link>
                <div className="flex items-center justify-between gap-2 lg:gap-4">
                    <SearchField
                        placeholder='Paste the URL of the product'
                        fieldStyle='w-[40rem] py-[.7rem]'
                        icon={searchYellow}
                    />
                    <button className="text-primary text-base">Support</button>
                </div>
                <div>
                    {
                        user ?
                            <div className='ml-[2.5rem] flex gap-4 items-center'>
                                <Dropdown
                                    ddTitle={<img src={notification} alt='icon' />}
                                    ddIcon={false}
                                    open={false}
                                    btnStyle={`bg-tertiary rounded-full p-[6px] duration-300 active:scale-90`}
                                    ddPosition='absolute top-16 right-[20rem]'
                                    ddBody={<NotificationDropdown />}
                                />
                                <Dropdown
                                    ddTitle={<img src={products} alt='icon' />}
                                    ddIcon={false}
                                    open={false}
                                    btnStyle={`bg-tertiary rounded-full p-[6px] duration-300 active:scale-90`}
                                    ddPosition='absolute top-16 right-[20rem]'
                                    ddBody={<ProductsDropdown />}
                                />
                                <button>
                                    <img src={avatar} alt='icon' />
                                </button>
                                <p>Kodu</p>
                            </div>
                            :
                            <div className='ml-[2.5rem] flex gap-4'>
                                <Link to='/auth/log-in'>
                                    <button
                                        className="btn-outline py-[8px] px-[20px]"
                                        onClick={() => savePreviousLocation(location.pathname)}
                                    >
                                        Log In
                                    </button>
                                </Link>
                                <Link to='/auth/sing-up'>
                                    <button className="btn-secondary py-[8px] px-[20px]">Sign Up</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        );
    }

    const smNav = () => {
        return (
            <div
                className={`lg:hidden min-w-screen px-4 flex items-center gap-2 duration-300 
                ${isOpen ? 'ml-[20rem]' : ''}`}
            >
                <button
                    onClick={() => setOpen(!isOpen)}
                    className="lg:hidden"
                >
                    {
                        !isOpen ?
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 5H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19H20" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 5L5 19" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 5L19 19" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                    }
                </button>
                <Link to='/'><Logo isNav={true} /></Link>
                <SearchField placeholder={'Paste the URL of the product'} icon={searchYellow} fieldStyle='w-full py-3' />
                {
                    user ?
                        <Dropdown
                            ddTitle={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8 8V7.9C22.8 7.8 22.8 7.8 22.8 7.7L21.8 5.4C21 3.5 20.6 2.5 19.6 1.9C18.7 1.3 17.5 1.3 15.5 1.3H8.5C6.5 1.3 5.4 1.3 4.4 1.9C3.5 2.5 3 3.5 2.3 5.4L1.3 7.7C1.3 7.8 1.3 7.8 1.3 7.9V8V13.4C1.3 17.6 1.3 19.8 2.8 21.3C4.3 22.8 6.5 22.8 10.9 22.8H13.1C17.5 22.8 19.7 22.8 21.2 21.3C22.7 19.8 22.7 17.7 22.7 13.4V8C22.8 8 22.8 8 22.8 8ZM18.7 3.1C19.2 3.5 19.6 4.2 20.3 6L20.8 7.3H12.7V2.8H15.5C17.3 2.8 18.2 2.8 18.7 3.1ZM5.3 3.1C5.9 2.7 6.8 2.7 8.5 2.7H11.3V7.2H3.1L3.7 6C4.4 4.2 4.7 3.5 5.3 3.1ZM21.2 13.4C21.2 17.2 21.2 19.1 20.1 20.2C19 21.2 17 21.2 13 21.2H10.8C6.8 21.2 4.8 21.2 3.7 20.2C2.6 19.2 2.6 17.2 2.6 13.4V8.8H21.1V13.4H21.2Z" fill="#141B34" />
                                    <path d="M9.2 12C9.2 12.4 9.5 12.8 10 12.8H14C14.4 12.8 14.8 12.5 14.8 12C14.8 11.5 14.5 11.2 14 11.2H10C9.6 11.2 9.2 11.6 9.2 12Z" fill="#141B34" />
                                </svg>

                            }
                            ddIcon={false}
                            open={false}
                            btnStyle={`rounded-full w-[30px] p-[6px] ml-auto duration-300 active:scale-90`}
                            ddPosition='absolute top-16 right-[18rem]'
                            ddBody={<ProductsDropdown />}
                        />
                        :
                        <Link to='/auth/log-in' className='ml-auto'>
                            <button
                                className="btn-secondary w-24 py-2"
                                onClick={() => savePreviousLocation(location.pathname)}
                            >Log In</button>
                        </Link>
                }
            </div>
        );
    }

    const navSlider = () => {
        const listItems = [
            {
                id: 1,
                src: avatar,
                alt: 'avatar',
                title: 'My Account',
                padding: 0,
                href: '/'
            },
            {
                id: 2,
                src: notification,
                alt: 'notification',
                title: 'Notification',
                padding: 6,
                href: '/notification'
            },
            {
                id: 3,
                src: support,
                alt: 'support',
                title: 'Support',
                padding: 6,
                href: '/'
            },
            {
                id: 4,
                src: logout,
                alt: 'logout',
                title: 'Log Out',
                padding: 6,
                href: '/'
            },
        ];


        return (
            <OutSideClick
                show={isOpen}
                onClickOutside={() => setOpen(false)}
                body={
                    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 drop-shadow-2xl">
                        <div
                            className={`h-screen w-5/6 bg-white py-12 px-4 fixed z-50 top-0 duration-300 
                    ${!isOpen ? 'ml-[-100rem]' : ''}`}
                        >
                            <div className="flex items-center gap-2 mb-8">
                                <Link to='/'><Logo isNav={true} /></Link>
                                <button className="btn-secondary py-[11px] px-[20px]">Log In or Sign Up</button>
                            </div>
                            <hr />
                            <ul className="mt-8 flex flex-col gap-4">
                                {
                                    listItems.map(item => (
                                        <li key={item.id}>
                                            <Link
                                                to={item.href}
                                                className="flex gap-2 items-center"
                                            >
                                                <span
                                                    className={`bg-tertiary rounded-full p-[${item.padding}px]`}
                                                >
                                                    <img src={item.src} alt={item.alt} />
                                                </span>
                                                <p className="text-lg">{item.title}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                }
            />
        );
    }


    return <nav className={`lg:bg-white w-full py-4 bg-tertiary`}>
        {
            // large nav part
            lgNav()
        }
        {
            // responsive nav part
            smNav()
        }
        {
            // responsive nav sidebar part
            navSlider()
        }
    </nav >;
}

export default Nav;
