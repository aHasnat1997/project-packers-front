import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SearchField } from "./SearchField";
// import XIcon from '../assets/icon/cd-cancel.svg';
// import xIcon from '../components/Icons';

const Nav = ({ isOpen, setOpen }) => {

    return <nav className={`lg:bg-white w-full py-4 bg-tertiary`}>
        <div className='max-w flex lg:justify-between items-center gap-1 lg:gap-8'>
            <div className="hidden lg:flex items-center justify-between gap-4">
                <Link to='/'><Logo isNav={true} /></Link>
                <SearchField placeholder='Paste the URL of the product' iconColor='#F2C852' width='43' />
                <div className="flex items-center justify-between gap-2 lg:gap-4">
                    <button className="text-primary text-base">Support</button>
                    <div className='ml-[2.5rem]'>
                        <button className="btn-outline py-[11px] px-[20px]">Login</button>
                        <button className="btn-secondary py-[11px] px-[20px] ml-2">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className={`lg:hidden flex items-center gap-2 duration-300 ${isOpen ? 'ml-[20rem]' : ''}`}>
                <button onBlur={() => setOpen(false)} onClick={() => setOpen(!isOpen)} className="lg:hidden">
                    {
                        !isOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 5H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 19H20" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 5L5 19" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 5L19 19" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        // <img src={XIcon} alt="icon" />
                    }
                </button>
                <Link to='/'><Logo isNav={true} /></Link>
                <SearchField placeholder={'Paste the URL of the product'} iconColor={'#F2C852'} width={'43'} />
                <button className="btn-outline py-[11px] px-[20px]">Login</button>
            </div>
        </div>
        {/* responsive nav part */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 drop-shadow-2xl">
            <div className={`h-screen w-5/6 bg-white py-12 px-4 fixed z-50 top-0 duration-300 
            ${!isOpen ? '-ml-96' : ''}`}>
                <div className="flex items-center gap-2 mb-8">
                    <Link to='/'><Logo isNav={true} /></Link>
                    <button className="btn-secondary py-[11px] px-[20px]">Log in or Sign up</button>
                </div>
                <hr />
                <ul className="mt-8 flex flex-col gap-4">
                    <li className="flex gap-2 items-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#FBE697" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 16.1234C18.6507 16.1234 20.7998 13.9744 20.7998 11.3234C20.7998 8.67247 18.6507 6.52344 15.9998 6.52344C13.3488 6.52344 11.1998 8.67247 11.1998 11.3234C11.1998 13.9744 13.3488 16.1234 15.9998 16.1234ZM15.9998 28.9234C20.033 28.9234 23.6367 27.0481 25.9847 24.1236C23.6367 21.1989 20.0329 19.3234 15.9996 19.3234C11.9663 19.3234 8.36258 21.1988 6.01465 24.1233C8.36257 27.048 11.9664 28.9234 15.9998 28.9234Z" fill="#AE8429" />
                        </svg>
                        <p className="text-lg">My Account</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span className="bg-tertiary rounded-full p-[6px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.10843 11.9953C1.93122 13.1229 2.7235 13.9055 3.69354 14.2955C7.41251 15.7908 12.5878 15.7908 16.3067 14.2955C17.2768 13.9055 18.0691 13.1229 17.8919 11.9953C17.783 11.3024 17.2445 10.7254 16.8455 10.162C16.3229 9.41491 16.271 8.60008 16.2709 7.73317C16.2709 4.38291 13.4634 1.66699 10.0002 1.66699C6.53694 1.66699 3.72944 4.38291 3.72944 7.73317C3.72936 8.60008 3.67743 9.41491 3.15484 10.162C2.75586 10.7254 2.21734 11.3024 2.10843 11.9953Z" stroke="#124E58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.5 17.5C8.16344 18.0183 9.03958 18.3333 10 18.3333C10.9604 18.3333 11.8366 18.0183 12.5 17.5" stroke="#124E58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <p className="text-lg">Notification</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span className="bg-tertiary rounded-full p-[6px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1665 9.00375C14.1665 8.71567 14.1665 8.57167 14.2098 8.44333C14.3358 8.07037 14.668 7.92563 15.0008 7.77407C15.3748 7.60368 15.5618 7.51849 15.7472 7.5035C15.9576 7.48648 16.1683 7.53182 16.3482 7.63274C16.5866 7.76653 16.7528 8.02078 16.9231 8.22752C17.7093 9.18233 18.1023 9.65983 18.2461 10.1863C18.3622 10.6112 18.3622 11.0555 18.2461 11.4803C18.0363 12.2483 17.3736 12.892 16.883 13.4878C16.6321 13.7926 16.5066 13.945 16.3482 14.0339C16.1683 14.1348 15.9576 14.1802 15.7472 14.1632C15.5618 14.1482 15.3748 14.063 15.0008 13.8926C14.668 13.741 14.3358 13.5963 14.2098 13.2233C14.1665 13.095 14.1665 12.951 14.1665 12.6629V9.00375Z" stroke="#124E58" stroke-width="1.5" />
                                <path d="M5.83317 9.00384C5.83317 8.64117 5.82299 8.31518 5.52976 8.06017C5.42311 7.96742 5.28171 7.90301 4.99893 7.77421C4.62485 7.60382 4.4378 7.51863 4.25247 7.50364C3.69643 7.45867 3.39727 7.83818 3.07661 8.22765C2.29046 9.1825 1.89739 9.65992 1.75355 10.1864C1.63749 10.6113 1.63749 11.0557 1.75355 11.4805C1.96334 12.2484 2.6261 12.8921 3.11668 13.488C3.42591 13.8636 3.72131 14.2063 4.25247 14.1633C4.4378 14.1483 4.62485 14.0631 4.99893 13.8928C5.28171 13.7639 5.42311 13.6995 5.52976 13.6068C5.82299 13.3518 5.83317 13.0258 5.83317 12.6631V9.00384Z" stroke="#124E58" stroke-width="1.5" />
                                <path d="M4.1665 7.5C4.1665 4.73857 6.77818 2.5 9.99984 2.5C13.2215 2.5 15.8332 4.73857 15.8332 7.5" stroke="#124E58" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />
                                <path d="M15.8335 14.167V14.8337C15.8335 16.3064 14.3411 17.5003 12.5002 17.5003H10.8335" stroke="#124E58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <p className="text-lg">Support</p>
                    </li>
                    <li className="flex gap-2 items-center">
                        <span className="bg-tertiary rounded-full p-[6px]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6667 2.57918C11.2858 2.52701 10.8963 2.5 10.5 2.5C6.08173 2.5 2.5 5.85787 2.5 10C2.5 14.1422 6.08173 17.5 10.5 17.5C10.8963 17.5 11.2858 17.473 11.6667 17.4208" stroke="#124E58" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M17.4998 10.0003H9.1665M17.4998 10.0003C17.4998 9.41683 15.8379 8.3266 15.4165 7.91699M17.4998 10.0003C17.4998 10.5838 15.8379 11.6741 15.4165 12.0837" stroke="#124E58" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <p className="text-lg">Log out</p>
                    </li>
                </ul>
            </div>
        </div>
    </nav >;
}

export default Nav;
