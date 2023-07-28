import React from 'react';
import { useTitle } from '../../../Hooks/useTitle';
import assets from '../../../assets/icon/Assets-Assets-Cell-eye.svg';

const OrdersTable = () => {
    useTitle('Order');
    const tableData = [
        {
            id: 107,
            time: 'Mar 20, 2019 23:14',
            items: 2,
            total: 396.84,
            status: 'completed'
        },
        {
            id: 106,
            time: 'Dec 7, 2019 23:26',
            items: 2,
            total: 396.84,
            status: 'completed'
        },
        {
            id: 105,
            time: 'Dec 30, 2019 05:18',
            items: 2,
            total: 396.84,
            status: 'processing'
        },
        {
            id: 104,
            time: 'Feb 2, 2019 19:28',
            items: 2,
            total: 396.84,
            status: 'processing'
        },
        {
            id: 103,
            time: 'Dec 30, 2019 05:18',
            items: 2,
            total: 396.84,
            status: 'processing'
        },
        {
            id: 102,
            time: 'Today at 6:55am',
            items: 2,
            total: 396.84,
            status: 'paid'
        },
        {
            id: 101,
            time: 'Today at 6:55am',
            items: 2,
            total: 396.84,
            status: 'paid'
        },
    ];

    const tableDataReverse = tableData.reverse();

    return (
        <table className='w-full table-fixed text-xs md:text-base'>
            <thead className='bg-[#E1E3E5] text-left'>
                <tr>
                    <th className='py-3 px-4'>Order ID</th>
                    <th className='py-3 px-4'>Date</th>
                    <th className='py-3 px-4'>Items</th>
                    <th className='py-3 px-4'>Total</th>
                    <th className='py-3 px-4'>Status</th>
                    <th className='py-3 px-4'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableDataReverse.map(data => <tr
                        key={data.id}
                        className='border-b py-6'
                    >
                        <td className='py-6 px-4'>#{data.id}</td>
                        <td className='py-6 px-4'>{data.time}</td>
                        <td className='py-6 px-4'>{data.items}</td>
                        <td className='py-6 px-4'>$ {data.total}</td>
                        <td
                            className='py-6 px-4'
                        >
                            <span
                                className={`p-2 rounded-full flex gap-2 items-center
                                ${data.status === 'completed' && 'bg-[#86EFAC]' || data.status === 'processing' && 'bg-[#F7DA7C]' || data.status === 'paid' && 'bg-[#E1E3E5]'}
                                `}
                            >
                               <span className='w-2 h-2 rounded-full bg-slate-400' />{data.status}
                            </span>
                        </td>
                        <td className='py-6 px-4 '>
                            <img src={assets} alt="icon" />
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default OrdersTable;
