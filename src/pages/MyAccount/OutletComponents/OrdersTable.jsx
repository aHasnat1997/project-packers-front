import React from 'react';
import { useTitle } from '../../../Hooks/useTitle';
import assets from '../../../assets/icon/Assets-Assets-Cell-eye.svg';
import StatusBadge from '../../../components/StatusBadge';

const OrdersTable = () => {
    useTitle('Order');
    const tableData = [
        {
            id: 107,
            time: 'Mar 20, 2019 23:14',
            items: 2,
            total: 396.84,
            status: 'Completed'
        },
        {
            id: 106,
            time: 'Dec 7, 2019 23:26',
            items: 2,
            total: 396.84,
            status: 'Completed'
        },
        {
            id: 105,
            time: 'Dec 30, 2019 05:18',
            items: 2,
            total: 396.84,
            status: 'Processing'
        },
        {
            id: 104,
            time: 'Feb 2, 2019 19:28',
            items: 2,
            total: 396.84,
            status: 'Processing'
        },
        {
            id: 103,
            time: 'Dec 30, 2019 05:18',
            items: 2,
            total: 396.84,
            status: 'Processing'
        },
        {
            id: 102,
            time: 'Today at 6:55am',
            items: 2,
            total: 396.84,
            status: 'Paid'
        },
        {
            id: 101,
            time: 'Today at 6:55am',
            items: 2,
            total: 396.84,
            status: 'Paid'
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
                        <td className='py-6 px-4'>
                            <StatusBadge badgeTitle={data.status} />
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
