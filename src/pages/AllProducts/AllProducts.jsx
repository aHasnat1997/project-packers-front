import React from 'react';
import Cart from '../../components/Cart';
import image from '../../assets/Rectangle 1.png';

const AllProducts = () => {
    const productArray = [
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },
        {
            img: image,
            title: 'iConnect by Timex Active Smartwatch',
            price: 28.95
        },

    ];

    return (
        <div className='bg-slate-200 py-[1px] grid lg:grid-cols-3 gap-[1px]'>
            {
                productArray.map((product, i) => (
                    <Cart
                        key={i}
                        img={product.img}
                        title={product.title}
                        price={product.price}
                    />
                ))
            }
        </div>
    );
};

export default AllProducts;
