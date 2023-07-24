import React, { useState } from 'react';
import { SearchField } from '../../../components/SearchField';
import internet from '../../../assets/icon/cd-internet-01.svg';
import Counter from '../../../components/Counter';

const HomeModalBodyOne = () => {
    const [active, setActive] = useState('link')
    return (
        <div className='w-full lg:w-[33.5rem] p-8'>
            < div className='flex items-center gap-4 border-b pb-4' >
                <h3 className='mr-8 text-xl font-semibold'>Request Item</h3>
                <button
                    className={`py-1 px-5 border rounded-full duration-200 active:scale-90 
                        ${active === 'link' && 'bg-accent'}`}
                    onClick={() => setActive('link')}
                >
                    Link
                </button>
                <button
                    className={`py-1 px-5 border rounded-full duration-200 active:scale-90 
                        ${active === 'img' && 'bg-accent'}`}
                    onClick={() => setActive('img')}
                >
                    Images
                </button>
            </div>
            <div className='mt-5 flex flex-col gap-5'>
                <div>
                    <h5>Product link</h5>
                    <SearchField
                        placeholder=''
                        icon={internet}
                        fieldStyle={'w-full'}
                    />
                </div>
                <div>
                    <h5>Product Name</h5>
                    <input type="text" className='input-field w-full px-6 py-2' />
                </div>
                <div>
                    <h5>Quantity</h5>
                    <Counter fieldStyle=' py-2' />
                </div>
            </div>
        </div>
    );
};

export default HomeModalBodyOne;
