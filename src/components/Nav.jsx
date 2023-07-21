import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchField } from "./SearchField";
import avatar from '../assets/icon/avatar.svg';
import notification from '../assets/icon/cd-notification-01.svg';
import support from '../assets/icon/cd-customer-support-01.svg';
import logout from '../assets/icon/logout.svg';
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import usePreviousLocation from "../Hooks/usePreviousLocation";

const Nav = ({ isOpen, setOpen }) => {
    const { user } = useContext(AuthContext);
    const { savePreviousLocation } = usePreviousLocation();
    const location = useLocation();

    const lgNav = () => {
        return (
            <div className="max-w hidden lg:flex items-center justify-between gap-4">
                <Link to='/'><Logo isNav={true} /></Link>
                <div className="flex items-center justify-between gap-2 lg:gap-4">
                    <SearchField placeholder='Paste the URL of the product' iconColor='#F2C852' fieldStyle='w-[40rem] py-[.7rem]' />
                    <button className="text-primary text-base">Support</button>
                </div>
                <div>
                    {
                        user ?
                            ''
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
                    onBlur={() => setOpen(false)}
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
                <SearchField placeholder={'Paste the URL of the product'} iconColor={'#F2C852'} fieldStyle='w-full py-3' />
                {/* to-do: Modal */}
                <Link to='/auth/log-in' className='flex-1'>
                    <button className="btn-secondary w-24 py-2">Log In</button>
                </Link>
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
                href: '/'
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
        ]

        return (
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 drop-shadow-2xl">
                <div
                    className={`h-screen w-5/6 bg-white py-12 px-4 fixed z-50 top-0 duration-300 
                    ${!isOpen ? '-ml-96' : ''}`}
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
