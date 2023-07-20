import React from 'react';
import imgOne from '../../../assets/Rectangle 1.png';
import imgTwo from '../../../assets/product-2.png';
import imgThree from '../../../assets/product-3.png';

const ProductList = () => {
    const productArray = [
        {
            img: imgOne,
            title: 'iConnect by Timex Active Smartwatch',
            price: 89.34
        },
        {
            img: imgTwo,
            title: 'iPad Air 64Gb Wi-Fi Space Gray',
            price: 275.50
        },
        {
            img: imgThree,
            title: 'OTTERBOX COMMUTER SERIES Case for iPhone 12 & iPhone 12 Pro',
            price: 89.34
        },
    ]

    return (
        <section>
            <table className='w-full'>
                <tr>
                    <th>Product list</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {
                    productArray.map((product, i) => (
                        <tr key={i}>
                            <td className='flex gap-4 items-center'>
                                <img
                                    src={product.img}
                                    alt="product image"
                                    className='w-16'
                                />
                                <h4>{product.title}</h4>
                            </td>
                            <td></td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }
            </table>
        </section>
    );
};

export default ProductList;
