import React, { useState } from 'react';
import Cart from '../../components/Cart';
import image from '../../assets/Rectangle 1.png';

const AllProducts = () => {
    // const [productArray, setPresentArray] = useState([]);
    const productArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const cardFn = (imgSrc = String, titleText = String, price = Number) => {
        return (
            productArray.map((i) => {
                return <Cart key={i} img={imgSrc} title={titleText} price={price} />
            })
        );
    };

    return (
        <>
            <div className='grid lg:grid-cols-3'>
                {
                    cardFn(image, 'iConnect by Timex Active Smartwatch', 28.95)
                }
            </div>
            <div>

            </div>
        </>
    );
};

export default AllProducts;
