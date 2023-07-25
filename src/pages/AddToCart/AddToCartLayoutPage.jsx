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
            singlePrice: 4.34,
            usPrice: 24.00,
            shipping: 8.00,
            quantity: 2,
            price: () => {
                this.singlePrice * this.quantity
            }
        },
        {
            img: imgTwo,
            title: 'iPad Air 64Gb Wi-Fi Space Gray',
            singlePrice: 2.50,
            usPrice: 23.00,
            shipping: 8.00,
            quantity: 1,
            price: () => {
                this.singlePrice * this.quantity
            }
        },
        {
            img: imgThree,
            title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
            singlePrice: 7.34,
            usPrice: 30.00,
            shipping: 8.00,
            quantity: 1,
            price: () => {
                this.singlePrice * this.quantity
            }
        },
    ];

    return (
        <>
            <Breadcrumb />
            <section className='section-div w-full grid lg:grid-cols-3 items-start gap-8'>
                <ProductList productArray={array} />
                <ProductPrice productArray={array} />
            </section>
        </>
    );
};

export default AddToCartLayoutPage;
