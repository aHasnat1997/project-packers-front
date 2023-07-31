import React from 'react';
import arrow from '../../../assets/icon/cd-arrow-right-2.svg';
import select from '../../../assets/icon/cd-select_minor-01.svg';

const DashboardTable = () => {
    const tableData = [
        {
            id: 2001,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-31',
            customer: 'John Doe',
            status: 'Completed',
            statusColor: '#86EFAC',
            items: 2,
            total: 30,
        },
        {
            id: 2002,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-30',
            customer: 'Jane Smith',
            status: 'Delivered',
            statusColor: '#E4E5E7',
            items: 1,
            total: 20,
        },
        {
            id: 2003,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-29',
            customer: 'Bob Johnson',
            status: 'Processing',
            statusColor: '#F7DA7C',
            items: 4,
            total: 50,
        },
        {
            id: 2004,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-28',
            customer: 'Emily Davis',
            status: 'Cancelled',
            statusColor: '#E4E5E7',
            items: 3,
            total: 45,
        },
        {
            id: 2005,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-27',
            customer: 'Michael Brown',
            status: 'Completed',
            statusColor: '#86EFAC',
            items: 2,
            total: 25,
        },
        {
            id: 2006,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-26',
            customer: 'Sophia Wilson',
            status: 'Delivered',
            statusColor: '#E4E5E7',
            items: 1,
            total: 15,
        },
        {
            id: 2007,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-25',
            customer: 'William Lee',
            status: 'Processing',
            statusColor: '#F7DA7C',
            items: 5,
            total: 70,
        },
        {
            id: 2008,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-24',
            customer: 'Olivia Johnson',
            status: 'Completed',
            statusColor: '#86EFAC',
            items: 3,
            total: 40,
        },
        {
            id: 2009,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray',
            date: '2023-07-23',
            customer: 'James Miller',
            status: 'Delivered',
            statusColor: '#E4E5E7',
            items: 2,
            total: 35,
        },
        {
            id: 2010,
            productTitle: 'iPad Air 64Gb Wi-Fi Space Gray0',
            date: '2023-07-22',
            customer: 'Ava Martinez',
            status: 'Paid',
            statusColor: '#E4E5E7',
            items: 6,
            total: 90,
        },
    ];

    return (
        <section className='mt-8'>
            <div className='flex justify-between items-center'>
                <div>
                    <span className='mr-4'>Request</span>
                    <span className='p-2 rounded bg-accent'>Orders</span>
                </div>
                <div className='flex items-center gap-8'>
                    <span>View All</span>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <table className='w-full mt-8'>
                <thead>
                    <tr className='bg-slate-200'>
                        <td className='py-4 px-6 flex items-center gap-1'>
                            Order ID
                            <img src={select} alt="select" />
                        </td>
                        <td className='py-4 px-6'>Title</td>
                        <td className='py-4 px-6'>Date</td>
                        <td className='py-4 px-6'>Customer</td>
                        <td className='py-4 px-6'>Status</td>
                        <td className='py-4 px-6'>Items</td>
                        <td className='py-4 px-6'>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(data=><tr key={data.id}>
                            <td className='py-4 px-6 border-b'># {data.id}</td>
                            <td className='py-4 px-6 border-b'>{data.productTitle}</td>
                            <td className='py-4 px-6 border-b'>{data.date}</td>
                            <td className='py-4 px-6 border-b'>{data.customer}</td>
                            <td className='py-4 px-6 border-b'><span className={`p-2 rounded-full bg-[${data.statusColor}]`}>{data.status}</span></td>
                            <td className='py-4 px-6 border-b'>{data.items}</td>
                            <td className='py-4 px-6 border-b'>$ {data.total}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </section>
    );
};

export default DashboardTable;
