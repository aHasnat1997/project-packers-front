import { SearchField } from '../../../components/SearchField';
import assets from '../../../assets/icon/Assets-caret-down_minor.svg';
import search from '../../../assets/icon/cd-search-01.svg';
import filter from '../../../assets/icon/cd-filter.svg';
import cd_arrow from '../../../assets/icon/cd-arrow-data-transfer-vertical-round 1-01.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AllUserContext } from '../../../context/AllUserProvider';

const AllCustomers = () => {
    const { customersData } = useContext(AllUserContext);

    return (
        <>
            <div className='pb-4 border-b flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Customers</h2>
                <div className='flex items-center gap-4'>
                    <button className='btn'>
                        Export
                    </button>
                    <button
                        className='btn bg-secondary px-4 py-2'
                    >
                        Add Customer
                    </button>
                </div>
            </div>
            <div className='mt-8 flex items-center justify-between'>
                <div className='flex items-center gap-8'>
                    <p
                        className='flex items-center bg-accent/40 py-3 px-2 rounded-md'
                    >
                        All
                        <img src={assets} alt="assets" />
                    </p>
                    <p>New</p>
                    <p>Returning</p>
                    <p>Abandoned Checkouts</p>
                </div>
                <div className='flex items-center gap-2'>
                    <SearchField
                        placeholder={'Search'}
                        icon={search}
                        fieldStyle='input-field-dd w-96 py-3'
                    />
                    <img
                        src={filter}
                        alt="filter"
                        className='p-3 border-2 rounded-md'
                    />
                    <img
                        src={cd_arrow}
                        alt="cd_arrow"
                        className='p-3 border-2 rounded-md'
                    />
                </div>
            </div>
            <table className='mt-2 w-full'>
                <thead className='bg-slate-100'>
                    <tr className='border-y font-semibold'>
                        <td className='py-2 px-6'>
                            <input type='checkbox' />
                        </td>
                        <td className='py-2 px-6'>Customer name</td>
                        <td className='py-2 px-6'>Phone Number</td>
                        <td className='py-2 px-6'>Location</td>
                        <td className='py-2 px-6'>Orders</td>
                        <td className='py-2 px-6'>Amount spent</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        customersData.map(data => <tr key={data.id} className='border-y'>
                            <td className='py-4 px-6'><input type='checkbox' /></td>
                            <td className='py-4 px-6'>
                                <Link
                                    to={`${data.id}`}
                                >
                                    {data.name}
                                </Link>
                            </td>
                            <td className='py-4 px-6'>{data.phone}</td>
                            <td className='py-4 px-6'>{data.location}</td>
                            <td className='py-4 px-6'>{data.orders.length} items</td>
                            <td className='py-4 px-6'>$ {data.amountSpent}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default AllCustomers;
