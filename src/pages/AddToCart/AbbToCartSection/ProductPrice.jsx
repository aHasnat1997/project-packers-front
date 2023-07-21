import React from 'react';

const ProductPrice = ({ productArray = Array }) => {
    const totalPrice = productArray.reduce((total, price) => {
        return total + price.price;
    }, 0);
    const totalUSPrice = productArray.reduce((total, price) => {
        return total + price.usPrice;
    }, 0);
    
    console.log(parseFloat(totalPrice.toFixed(2)));

    const price = (title = String, price = Number ) => {
        return <div className='py-4 flex justify-between items-center'>
            <h6>{title}</h6>
            <p>$ {parseFloat(totalPrice.toFixed(2))}</p>
        </div>
    }

    return (
        <section className='w-full border px-5'>
            <div className='border-b py-4 text-lg'>
                <h4>Price Details</h4>
            </div>
            
        </section>
    );
};

export default ProductPrice;
