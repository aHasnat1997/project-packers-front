import React, { useState } from 'react';
import Modal from '../../../components/Modal';
import box from '../../../assets/icon/delivery-box.svg';
import check from '../../../assets/icon/checkmark-badge.svg';
import { Link } from 'react-router-dom';

const OrderSection = () => {
    const [shipping, setShipping] = useState(59);
    const productList = [
        {
            id: 1,
            name: 'External SSD USB 3.1 750 GB * 1',
            price: 79.50
        },
        {
            id: 2,
            name: 'External SSD USB 3.1 750 GB * 1',
            price: 45.5
        }
    ]

    const subTotal = productList.reduce((total, price) => {
        return parseFloat((total + price.price).toFixed(2));
    }, 0);

    const total = shipping + subTotal;
    console.log(total);

    return (
        <aside className='col-span-2 lg:col-span-1 w-full border p-5 rounded-xl'>
            <h3 className='text-xl text-primary border-b pb-4'>Your order</h3>

            <div className='flex items-center justify-between py-4 border-b font-semibold'>
                <h4>Product</h4>
                <p>Subtotal</p>
            </div>

            {
                productList.map(product => (
                    <div key={product.id} className='flex items-center justify-between py-4 border-b'>
                        <h4>{product.name}</h4>
                        <p>$ {product.price}</p>
                    </div>
                ))
            }

            <div className='flex items-center justify-between py-4 border-b'>
                <h4>Subtotal</h4>
                <p className='font-semibold'>$ {subTotal}</p>
            </div>

            <div className='flex items-center justify-between py-4 border-b'>
                <from className='w-full flex flex-col gap-2'>
                    <div className='flex items-center w-full'>
                        <input
                            type="radio"
                            name="shipping"
                            id="insideDhaka"
                            defaultChecked
                            onClick={() => setShipping(59)}
                        />
                        <label
                            htmlFor="insideDhaka"
                            className='flex items-center justify-between w-full ml-2'
                        >
                            <span>Inside Dhaka</span>
                            <span>$ 59</span>
                        </label>
                    </div>
                    <div className='flex items-center w-full'>
                        <input
                            type="radio"
                            name="shipping"
                            id="outsideDhaka"
                            onClick={() => setShipping(89)}
                        />
                        <label
                            htmlFor="outsideDhaka"
                            className='flex items-center justify-between w-full ml-2'
                        >
                            <span>Outside Dhaka</span>
                            <span>$ 89</span>
                        </label>
                    </div>
                </from>
            </div>

            <div className='flex items-center justify-between py-4 border-b'>
                <h4>Estimated total</h4>
                <p className='font-semibold'>$ {total}</p>
            </div>

            <Modal
                btnName={<input type="submit" value="Submit" />}
                btnType='btn-primary w-full py-3 mt-8'
                body={
                    <>
                        <div className='relative mb-16 w-full lg:w-96'>
                            <img src={box} alt="icon" />
                            <img src={check} alt="icon" className='absolute top-2 left-14' />
                        </div>
                        <div>
                            <h3 className='text-xl mb-2'>Thanks your for your order.</h3>
                            <div>
                                <h5>we sent an order confirmation to:</h5>
                                <p className='font-semibold text-primary'>johnsmith@gmail.com</p>
                            </div>
                            <div className='mt-4'>
                                <h5>Your order number is:</h5>
                                <p className='font-semibold text-primary'>#343895</p>
                            </div>
                            <div className='mt-4'>
                                <h5>Your order will deliver on:</h5>
                                <p className='font-semibold text-primary'>Thursday, Nov 23 - Saturday, Nov 29</p>
                            </div>
                            <div className='mt-4'>
                                <h5>to the address:</h5>
                                <p className='font-semibold text-primary'>3829 Main St. Los Angeles. CA 90210</p>
                            </div>
                            <Link to='/'>
                                <button className='mt-12 btn-primary w-full py-5'>Keep Shopping</button>
                            </Link>
                        </div>
                    </>
                }
            />
        </aside>
    );
};

export default OrderSection;
