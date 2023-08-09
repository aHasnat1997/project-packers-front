import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { SearchField } from '../../components/SearchField';
import search from '../../assets/icon/cd-search-01.svg';
import notification from '../../assets/icon/cd-notification-01.svg';
import Dropdown from '../../components/Dropdown/Dropdown';
import ProductsDropdown from '../../components/Dropdown/ProductsDropdown';
import UserIcon from '../../components/UserIcon';

const DDHeader = () => {
    return (
        <div className='border-b py-4 px-8 bg-white shadow-lg'>
            <div className='flex items-center justify-between'>
                <Link
                    to='/'
                    className='pr-32'
                ><Logo isNav={true} /></Link>
                <SearchField
                    icon={search}
                    placeholder='Search'
                    fieldStyle='input-field-dd w-[35rem]'
                    searchValue=''
                />
                <div className='flex items-center gap-4'>
                    <Dropdown
                        ddTitle={
                            <img
                                src={notification}
                                alt="notification"
                                className='p-1 bg-accent rounded-full'
                            />
                        }
                        ddIcon={false}
                        open={false}
                        btnStyle={`rounded-full w-full p-[6px] ml-auto duration-300 active:scale-90`}
                        ddPosition='absolute top-16 right-[18rem]'
                        ddBody={<ProductsDropdown />}
                    />
                    <div className='flex items-center gap-2'>
                        {/* <img src={avatar} alt="avatar" /> */}
                        <UserIcon firstName='Kodu' lastName='' />
                        <span>Kodu</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DDHeader;
