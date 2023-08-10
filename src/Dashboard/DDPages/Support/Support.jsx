import React, { useState } from 'react';
import SupportLeft from './SupportLeft';
import { Outlet } from 'react-router-dom';
import ChatProvider from '../../../context/ChatProvider';

const Support = () => {
    const [soon, setSoon] = useState(false);


    return (
        soon ? <>
            <section className='dd-section-div min-h-screen flex items-center justify-center'>
                <h1 className='text-9xl font-bold text-gray-200 cursor-default prevent-select'>Coming Soon...</h1>
            </section>
        </> : <>
            <ChatProvider>
                <section className='w-full h-screen flex-1 flex bg-[#E2E8F0]'>
                    <aside className='shrink-0 border-r bg-white'><SupportLeft /></aside>
                    <aside className='w-full'><Outlet /></aside>
                </section>
            </ChatProvider>
        </>
    );
};

export default Support;
