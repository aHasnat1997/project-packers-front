import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';
import ProductList from './AbbToCartSection/ProductList';
import ProductPrice from './AbbToCartSection/ProductPrice';

const AddToCartLayoutPage = () => {
    useTitle('Cart');

    return (
        <>
            <Breadcrumb />
            <section className='section-div flex items-center gap-8'>
                <ProductList />
                <ProductPrice />
            </section>
        </>
    );
};

export default AddToCartLayoutPage;
