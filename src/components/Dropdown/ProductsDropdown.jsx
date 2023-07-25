import React from 'react';
import arrow from '../../assets/icon/cd-arrow-right-01.svg';
import { Link } from 'react-router-dom';
import imgOne from '../../assets/Rectangle 1.png';
import imgTwo from '../../assets/product-2.png';
import imgThree from '../../assets/product-3.png';

const ProductsDropdown = () => {
    const productData = [
        {
            img: imgOne,
            title: 'iConnect by Timex Active Smartwatch',
            singlePrice: 4.34,
            usPrice: 24.00,
            shipping: 8.00,
            quantity: 2
        },
        {
            img: imgTwo,
            title: 'iPad Air 64Gb Wi-Fi Space Gray',
            singlePrice: 2.50,
            usPrice: 23.00,
            shipping: 8.00,
            quantity: 1
        },
        {
            img: imgThree,
            title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
            singlePrice: 7.34,
            usPrice: 30.00,
            shipping: 8.00,
            quantity: 1
        },
    ]

    return (
        <section className='w-[20rem] bg-white p-5 rounded-xl'>
            <div className='flex justify-between items-center pb-3 border-b'>
                <span>Shopping bag</span>
                <Link
                    to='/cart'
                    className='duration-300 active:scale-90'
                >
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
            <div className='bg-gray-200 flex flex-col gap-[1px]'>
                {
                    productData.map(data => <div
                        key={data.img}
                        className='py-2 bg-white flex items-start gap-2'
                    >
                        <img
                            src={data.img}
                            alt="product image"
                            className='w-16'
                        />
                        <div>
                            <h4 className='text-gray-400'>{data.title}</h4>
                            <p>$ {data.singlePrice}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ProductsDropdown;
