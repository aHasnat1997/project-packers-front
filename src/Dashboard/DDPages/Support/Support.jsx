import React, { useState } from 'react';
import SupportLeft from './SupportLeft';
import SupportRight from './SupportRight';

const Support = () => {
    const [soon, setSoon] = useState(false)

    return (
        soon ? <>
            <section className='dd-section-div min-h-screen flex items-center justify-center'>
                <h1 className='text-9xl font-bold text-gray-200 cursor-default prevent-select'>Coming Soon...</h1>
            </section>
        </> : <>
            <section className='w-full flex bg-[#E2E8F0]'>
                <aside className='border-r bg-white'><SupportLeft /></aside>
                <aside className='w-[75%]'><SupportRight /></aside>
            </section>
        </>
    );
};

export default Support;
