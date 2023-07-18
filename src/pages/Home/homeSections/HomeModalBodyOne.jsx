import React from 'react';
import { SearchField } from '../../../components/SearchField';

const HomeModalBodyOne = () => {
    return (
        <div className='w-full lg:w-[33.5rem] p-8'>
            < div className='flex items-center gap-4 border-b pb-4' >
                <h3 className='mr-8 text-xl font-semibold'>Request Item</h3>
                <span className='py-1 px-5 border rounded-full'>Link</span>
                <span className='py-1 px-5 border rounded-full'>Images</span>
            </div>
            <div className='mt-5 flex flex-col gap-5'>
                <div>
                    <h5>Product link</h5>
                    <SearchField placeholder='' />
                </div>
                <div>
                    <h5>Product Name</h5>
                    <SearchField placeholder='' />
                </div>
                <div>
                    <h5>Quantity</h5>
                    <SearchField placeholder='' />
                </div>
            </div>
        </div>
    );
};

export default HomeModalBodyOne;
