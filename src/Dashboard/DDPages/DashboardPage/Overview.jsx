import React from 'react';

const Overview = () => {
    const orderData = [
        {
            title: 'Total Cost',
            total: 10440.00
        },
        {
            title: 'Total Request',
            total: 294.00
        },
        {
            title: 'Total Order',
            total: 125.00
        },
        {
            title: 'Completed',
            total: 100.00
        },
        {
            title: 'Canceled',
            total: 25.00
        }
    ]

    return (
        <section>
            <h2 className='text-2xl font-semibold pb-4 border-b'>Overview</h2>
            <div className='mt-6 pb-5 flex justify-between items-center border-b divide-x'>
                {
                    orderData.map((data, i) => (
                        <div
                            key={i}
                            className={`${data.title !== 'Total Cost' && 'lg:pl-16'}`}
                        >
                            <h4>{data.title}</h4>
                            {
                                data.title === 'Total Cost' ?
                                    <p className='text-xl font-semibold'>$ {data.total}</p> :
                                    <div className='flex items-center gap-2'>
                                        <p className='text-xl font-semibold'>
                                            {data.total}
                                        </p>
                                        <span
                                            className={`w-3 h-3 rounded-full ${data.title === 'Total Request' && 'bg-[#A2EEE7]'
                                                || data.title === 'Total Order' && 'bg-[#F2C852]'
                                                || data.title === 'Completed' && 'bg-[#16A34A]'
                                                || data.title === 'Canceled' && 'bg-[#EF4444]'
                                                }`}
                                        />
                                    </div>
                            }
                            <p className='text-gray-400'>New cost last 30 days</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Overview;
