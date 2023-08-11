import React, { useEffect, useState } from 'react';
import Cart from '../../components/Cart';

const AllProducts = () => {
    const [productArray, setPresentArray] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            withCredentials: true
        };
        fetch(`${import.meta.env.VITE_BASE_URL}/products?page=1&limit=30`, options)
            .then(response => response.json())
            .then(response => {
                setPresentArray(response)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='bg-slate-200 py-[1px] grid lg:grid-cols-3 gap-[1px]'>
            {
                productArray?.docs?.map(product => (
                    <Cart
                        key={product.id}
                        img={product.productImg}
                        title={product.productName}
                        price={product.price}
                    />
                ))
            }
        </div>
    );
};

export default AllProducts;
