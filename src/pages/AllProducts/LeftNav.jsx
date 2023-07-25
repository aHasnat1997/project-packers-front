import React from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import icon from '../../assets/icon/cd-filter.svg';

const LeftNav = () => {
    const menuList = <ul className='mt-4 bg-white px-8 py-4 lg:py-0 text-[#475569] flex flex-col gap-4'>
        <li>
            <Dropdown
                ddTitle='Electronics'
                ddIcon={true}
                open={true}
                ddBody={<ul className='w-full ml-8 list-disc mt-4 flex flex-col gap-4'>
                    <li>Computer Accessories</li>
                    <li>Mobile Accessories</li>
                </ul>}
            />
        </li>
        <li>Shoe</li>
        <li>Watch</li>
        <li>Beauty</li>
        <li>Accessories</li>
        <li>Budget Shopping</li>
    </ul>;

    return (
        <>
            {/* for large device */}
            <div className='hidden lg:block'>
                <h3 className='text-2xl font-semibold mb-7'>Trending items</h3>
                <h5 className='text-xl text-[#3E949A]'>All Category</h5>
                {
                    menuList
                }
            </div>
            {/* for small device */}
            <div className='lg:hidden flex items-center border rounded-full px-5 py-3'>
                <img className='w-5 mr-2' src={icon} alt='icon' />
                <Dropdown
                    ddTitle='Sort and Filter'
                    ddIcon={true}
                    open={false}
                    ddBody={menuList}
                    ddPosition='absolute top-10 w-full text-left'
                />
            </div>
        </>
    );
};

export default LeftNav;
