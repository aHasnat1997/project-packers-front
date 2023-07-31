import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { SearchField } from '../../components/SearchField';
import search from '../../assets/icon/cd-search-01.svg';
import notification from '../../assets/icon/cd-notification-01.svg';
import avatar from '../../assets/icon/avatar.svg';

const DDHeader = () => {
    return (
        <div className='border-b fixed z-10 top-0 right-0 left-0 py-4 px-24 bg-white shadow-lg'>
            <div className='flex items-center justify-between'>
                <Link to='/'><Logo isNav={true} /></Link>
                <SearchField
                    icon={search}
                    placeholder='Search'
                    fieldStyle='input-field-dd w-[35rem]'
                />
                <div className='flex items-center gap-4'>
                    <img
                        src={notification}
                        alt="notification"
                        className='p-1 bg-accent rounded-full'
                    />
                    <div className='flex items-center gap-2'>
                        <img src={avatar} alt="avatar" />
                        <span>kodu</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DDHeader;
