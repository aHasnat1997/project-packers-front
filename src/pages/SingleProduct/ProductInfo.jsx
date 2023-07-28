import React from 'react';
import icon from '../../assets/money-back.svg';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
    return (
        <div className='w-full h-full border rounded-xl px-5'>
            <div className='w-full py-4 border-b flex justify-between items-center'>
                <h4 className='md:text-lg'>Product Price</h4>
                <h4 className='text-2xl font-semibold'>$450.00</h4>
            </div>
            <div className='py-4 text-lg w-full'>
                <p className='text-[#475569]'>Product Form</p>
                <p>United States of America</p>
            </div>
            <div className='pb-4 text-lg w-full'>
                <p className='text-[#475569]'>Where to buy</p>
                <p className='text-[#3E949A]'>apple.com</p>
            </div>
            <div className='pb-4 text-lg flex justify-between items-center w-full'>
                <p className='text-[#475569]'>Approx delivery</p>
                <p>1-2 weeks </p>
            </div>
            <Link to='/cart'>
                <button className='w-full btn-primary py-3 mt-5'>
                    Request This Item
                </button>
            </Link>
            <div className='mt-12 py-4 w-full'>
                <p className='flex items-center gap-2 font-semibold py-4 text-lg'>
                    <img src={icon} alt="icon" />
                    100% Money Back Guarantee
                </p>
                <p className='text-[#475569]'>
                    Project Packers protects your payment until <br /> you confirm you received your order.
                </p>
            </div>
        </div>
    );
};

export default ProductInfo;
