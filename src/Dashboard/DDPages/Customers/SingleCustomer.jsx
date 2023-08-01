import React, { useContext } from 'react';
import { AllUserContext } from '../../../context/AllUserProvider';
import { Link, useLocation, useParams } from 'react-router-dom';
import arrow from '../../../assets/icon/cd-arrow-left-01.svg';
import cd_delete from '../../../assets/icon/cd-delete-01.svg';
import arrow_left from '../../../assets/icon/cd-arrow-left-2.svg';
import arrow_right from '../../../assets/icon/cd-arrow-right-2.svg';
import assets from '../../../assets/icon/Assets-caret-down_minor.svg';
import search from '../../../assets/icon/cd-search-01.svg';
import filter_minor from '../../../assets/icon/filter_minor.svg';
import sort_minor from '../../../assets/icon/sort_minor.svg';
import cancel from '../../../assets/icon/cd-cancel-01.svg';
import CopyButton from '../../../components/CopyButton';

const SingleCustomer = () => {
    const { customersData } = useContext(AllUserContext);
    const { id } = useParams();
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const id = queryParams.get('id');

    const customer = customersData.find(data => data.id === parseInt(id));
    console.log(customer);

    const total = customer.orders.reduce((total, price) => {
        return parseFloat((total + price.price).toFixed(2));
    }, 0);

    return (
        <>
            <div className='pb-4 border-b flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <Link to='/admin/customers'>
                        <img
                            src={arrow}
                            alt="arrow_left"
                            className='btn border p-2 w-16'
                        />
                    </Link>
                    <div>
                        <p className='text-gray-400'>Back to customers</p>
                        <h2 className='text-3xl font-semibold'>{customer.name}</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='btn flex items-center gap-2'>
                        <img src={cd_delete} alt="delete" />
                        Delete
                    </button>
                    <button
                        className='btn bg-secondary px-4 py-2'
                    >
                        Create Order
                    </button>
                    <div>
                        <button className='btn border'>
                            <img
                                src={arrow_left}
                                alt="arrow_left"
                                className='p-2 w-10'
                            />
                        </button>
                        <button className='btn border'>
                            <img
                                src={arrow_right}
                                alt="arrow_right"
                                className='p-2 w-10'
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-8 flex items-start gap-4'>
                <div className='w-full flex-1'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-8'>
                            <p
                                className='flex items-center bg-accent/40 py-3 px-2 rounded-md'
                            >
                                All
                                <img src={assets} alt="assets" />
                            </p>
                            <p>New</p>
                            <p>Draft</p>
                            <p>Abandoned Checkouts</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='p-3 border-2 rounded-md flex items-center'>
                                <img
                                    src={search}
                                    alt="search"
                                />
                                <img
                                    src={filter_minor}
                                    alt="filter_minor"
                                />
                            </div>
                            <img
                                src={sort_minor}
                                alt="sort_minor"
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
                                <td className='py-2 px-6'>Product</td>
                                <td className='py-2 px-6'>Status</td>
                                <td className='py-2 px-6'>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customer.orders.map(data => <tr key={data.id} className='border-y'>
                                    <td className='py-4 px-6'><input type='checkbox' /></td>
                                    <td className='py-4 px-6 flex items-center gap-2'>
                                        <img
                                            src={data.productImg}
                                            alt="product image"
                                            className='w-10'
                                        />
                                        {data.productName}
                                    </td>
                                    <td className='py-4 px-6 p-2'>
                                        {data.status}
                                    </td>
                                    <td className='py-4 px-6'>$ {data.price}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className='w-1/4 border rounded-lg'>
                    <div className='p-5 flex flex-col gap-5 border-b'>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold'>Customer</h4>
                            <img src={cancel} alt="cancel" />
                        </div>
                        <div className='flex items-center justify-between'>
                            <h5 className='text-accent'>{customer.email}</h5>
                            <CopyButton textToCopy={customer.email} />
                        </div>
                        <h5>{customer.phone}</h5>
                    </div>
                    <div className='p-5 flex flex-col gap-5 border-b'>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold'>Address</h4>
                            <p className='text-accent'>Edit</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <h5>{customer.location}</h5>
                            <CopyButton textToCopy={customer.location} />
                        </div>
                    </div>
                    <div className='p-5 flex flex-col gap-5'>
                        <h4 className='font-semibold'>Amount spent</h4>
                        <h5>$ {total}</h5>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleCustomer;
