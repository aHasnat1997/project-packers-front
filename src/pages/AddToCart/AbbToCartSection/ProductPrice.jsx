import React from 'react';
import { Link } from 'react-router-dom';

const ProductPrice = ({ productArray = Array }) => {
    const priceReduce = (field = String) => {
        const total = productArray.reduce((total, price) => {
            return parseFloat((total + price[field]).toFixed(2));
        }, 0);
        return total;
    };

    const listItem = (title = String, price = Number) => <li className='py-4 flex justify-between items-center'>
        <p>{title}</p>
        <p className='font-semibold'>$ {price}</p>
    </li>;

    return (
        <section className='w-full border px-5 rounded-xl col-span-2 lg:col-span-1'>
            <div className='border-b py-4 text-lg'>
                <h4>Price Details</h4>
            </div>
            <ul className='border-b'>
                {listItem('Seller takes', priceReduce('price'))}
                {listItem('Seller takes', priceReduce('usPrice'))}
                {listItem('Seller takes', priceReduce('shipping'))}
            </ul>
            <div className='py-4 text-lg flex justify-between items-center'>
                <p>Estimated total</p>
                <p className='font-semibold'>
                    $ {
                        parseFloat((priceReduce('price') + priceReduce('usPrice') + priceReduce('shipping')).toFixed(2))
                    }
                </p>
            </div>
            <Link to='/checkout'>
                <button className='btn-primary w-full py-3 mb-6'>Checkout</button>
            </Link>
        </section>
    );
};

export default ProductPrice;
