import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';
import ProductList from './AbbToCartSection/ProductList';
import ProductPrice from './AbbToCartSection/ProductPrice';
import imgOne from '../../assets/Rectangle 1.png';
import imgTwo from '../../assets/product-2.png';
import imgThree from '../../assets/product-3.png';

const AddToCartLayoutPage = () => {
    useTitle('Cart');
    const array = [
        {
            img: imgOne,
            title: 'iConnect by Timex Active Smartwatch',
            price: 89.34,
            usPrice: 24.00,
            shipping: 8.00
        },
        {
            img: imgTwo,
            title: 'iPad Air 64Gb Wi-Fi Space Gray',
            price: 275.50,
            usPrice: 23.00,
            shipping: 8.00
        },
        {
            img: imgThree,
            title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
            price: 89.34,
            usPrice: 20.00,
            shipping: 8.00
        },
    ];

    return (
        <>
            <Breadcrumb />
            <section className='section-div w-full grid lg:grid-cols-3 items-center gap-8'>
                <ProductList productArray={array} />
                <ProductPrice productArray={array} />
            </section>
        </>
    );
};

export default AddToCartLayoutPage;
