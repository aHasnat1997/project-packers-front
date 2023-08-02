import React from 'react';
import arrow from '../../../assets/icon/cd-arrow-left-01.svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddNewCustomer = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    }

    /**
     * @param {String} label Form field label 
     * @param {String} type Form field type 
     * @param {String} id Form field id and label htmlFor
     * @returns Form field
     */
    const FormField = ({ label = String, type = String, id = String }) => {
        return <div className='w-full'>
            <label htmlFor={`${id}`}>{label}</label>
            <input
                {...register(`${id}`)}
                type={`${type}`}
                id={`${id}`}
                className='w-full input-field-dd px-3 py-2'
            />
        </div>
    };

    return (
        <>
            <div className='pb-4 border-b flex items-center gap-2'>
                <Link to='/admin/customers'>
                    <img
                        src={arrow}
                        alt="arrow_left"
                        className='btn border p-2 w-16'
                    />
                </Link>
                <div>
                    <p className='text-gray-400'>Back to customers</p>
                    <h2 className='text-3xl font-semibold'>New Customer</h2>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full mt-8'
            >
                <div className='flex items-start justify-between'>
                    <div>
                        <h4 className='font-semibold text-xl'>Customer Overview</h4>
                        <p className='text-gray-400'>We can help with that Replace your next meeting with a <br /> short video and get feedback faster .</p>
                    </div>
                    <div className='w-1/2 border rounded-lg p-3 flex flex-col gap-3'>
                        <div className='w-full flex items-center gap-3'>
                            <FormField label='First Name' type='text' id='firstName' />
                            <FormField label='Last Name' type='text' id='lastName' />
                        </div>
                        <FormField label='Email' type='email' id='userEmail' />
                        <FormField label='Phone Number' type='text' id='userPhone' />
                    </div>
                </div>
                <div className='w-full mt-5 flex items-start justify-between'>
                    <div>
                        <h4 className='font-semibold text-xl'>Address</h4>
                        <p className='text-gray-400'>We can help with that Replace your next meeting with a <br /> short video and get feedback faster .</p>
                    </div>
                    <div className='w-1/2 border rounded-lg p-3 flex flex-col gap-3'>
                        <FormField label='Address' type='text' id='userAddress' />
                        <div className='w-full flex items-center gap-3'>
                            <FormField label='City' type='text' id='userCity' />
                            <FormField label='Zip/Postal Code' type='text' id='userZipCode' />
                        </div>
                        <FormField label='Phone Number' type='text' id='userPhone' />
                    </div>
                </div>
                <div className='w-1/2 mt-7 flex justify-between items-center ml-auto'>
                    <input
                        type='reset'
                        value='Discard'
                        className='btn py-2 px-4 border'
                    />
                    <div className='flex items-center gap-2'>
                        <button className='btn py-2 px-4 border'>Draft</button>
                        <input
                            type='submit'
                            value='Publish'
                            className='btn py-2 px-4 bg-secondary'
                        />
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddNewCustomer;
