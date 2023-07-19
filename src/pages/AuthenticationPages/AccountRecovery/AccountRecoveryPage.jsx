import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const AccountRecoveryPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate('/auth/otp-verification');
    }

    return (
        <section className='section-div flex items-center'>
            <div className='pr-28 border-r border-gray-400'>
                <h1 className='text-5xl font-bold font-Sora text-white'>
                    Account recovery
                </h1>
                <p className='text-gray-400 mt-4'>
                    Enter the email address or phone number associated with your account, and we will email you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
                    <label className='text-white mb-2 text-lg'>Email or Phone Number</label>
                    <br />
                    <input
                        {...register('phone')}
                        type='text'
                        className='w-full input-field px-5 py-4'
                        placeholder='Enter Your Email or Phone Number'
                    />
                    <input
                        type='submit'
                        value='Login'
                        className='w-full btn-primary py-4 px-5 mt-5'
                    />
                </form>
            </div>
            <div className='ml-28'>
                <p className='text-2xl text-white'>Log in to access your Project Packers Platform for order your products from any USA website.</p>
                <p className='mt-5 text-white'>
                    Don't have an account yet?
                    <Link to='/auth/sing-up' className='text-secondary underline ml-2'>Sign up</Link>
                </p>
            </div>
        </section>
    );
};

export default AccountRecoveryPage;
