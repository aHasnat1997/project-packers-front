import React from 'react';
import { useTitle } from '../../../Hooks/useTitle';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import Modal from '../../../components/Modal';
import box from '../../../assets/icon/delivery-box.svg';
import check from '../../../assets/icon/checkmark-badge.svg';
import { Link } from 'react-router-dom';

const AccountDetails = () => {
    useTitle('Account Details');
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-[45rem]'>
            <div className='grid grid-cols-2 gap-4 w-full'>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        {...register('firstName')}
                        type='text'
                        placeholder='Enter Your First Name'
                        className='input-field w-full py-2 px-4 mt-3'
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        {...register('lastName')}
                        type='text'
                        placeholder='Enter Your Last Name'
                        className='input-field w-full py-2 px-4 mt-3'
                    />
                </div>
            </div>
            <div className='mt-4'>
                <label>Email Address</label>
                <input
                    {...register('email')}
                    type='email'
                    placeholder='Enter Your Email'
                    className='input-field w-full py-2 px-4 mt-3'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor='email'>Phone number<span className='text-red-700'>*</span></label>
                <PhoneInput
                    {...register('phone')}
                    defaultCountry='BD'
                    international
                    placeholder='Enter phone number'
                    className='w-full input-field overflow-hidden bg-white py-2 px-4 mt-3 focus:border-0'
                />
            </div>
            <h4 className='mt-4'>Password Change</h4>
            <div className='mt-4'>
                <label>Current Password</label>
                <input
                    {...register('currentPassword')}
                    type='password'
                    placeholder='Enter Current Password'
                    className='input-field w-full py-2 px-4 mt-3'
                />
            </div>
            <div className='mt-4'>
                <label>New Password</label>
                <input
                    {...register('newPassword')}
                    type='password'
                    placeholder='Enter New Password'
                    className='input-field w-full py-2 px-4 mt-3'
                />
            </div>
            <div className='mt-4'>
                <label>Confirm New Password</label>
                <input
                    {...register('confirmNewPassword')}
                    type='password'
                    placeholder='Enter Confirm New Password'
                    className='input-field w-full py-2 px-4 mt-3'
                />
            </div>

            <Modal
                btnName={<input
                    type='submit'
                    value='Save Change'
                />}
                btnType='btn-primary py-3 px-8 mt-7'
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
        </form>
    );
};

export default AccountDetails;
