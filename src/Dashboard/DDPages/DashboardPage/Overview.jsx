import React from 'react';

const Overview = () => {
    const orderData = {
        totalCost: 10440.00,
        totalRequest: 294,
        totalOrder: 125,
        completed: 100,
        canceled: 25
    };

    return (
        <section>
            <h2 className='text-2xl font-semibold pb-4 border-b'>Overview</h2>
            <div className='mt-6 pb-5 flex justify-between items-center border-b divide-x'>
                <div>
                    <h4>Total Cost</h4>
                    <p className='text-xl font-semibold'>$ {orderData.totalCost}</p>
                    <p className='text-gray-400'>New cost last 30 days</p>
                </div>
                <div className='pl-16'>
                    <h4>Total Request</h4>
                    <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>{orderData.totalRequest}</p>
                        <span className='w-3 h-3 rounded-full bg-[#A2EEE7]' />
                    </div>
                    <p className='text-gray-400'>New cost last 30 days</p>
                </div>
                <div className='pl-16'>
                    <h4>Total Order</h4>
                    <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>{orderData.totalOrder}</p>
                        <span className='w-3 h-3 rounded-full bg-[#F2C852]' />
                    </div>
                    <p className='text-gray-400'>New cost last 30 days</p>
                </div>
                <div className='pl-16'>
                    <h4>Completed</h4>
                    <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>{orderData.completed}</p>
                        <span className='w-3 h-3 rounded-full bg-[#16A34A]' />
                    </div>
                    <p className='text-gray-400'>New cost last 30 days</p>
                </div>
                <div className='pl-16'>
                    <h4>Canceled</h4>
                    <div className='flex items-center gap-2'>
                        <p className='text-xl font-semibold'>{orderData.canceled}</p>
                        <span className='w-3 h-3 rounded-full bg-[#EF4444]' />
                    </div>
                    <p className='text-gray-400'>New cost last 30 days</p>
                </div>
            </div>
        </section>
    );
};

export default Overview;
