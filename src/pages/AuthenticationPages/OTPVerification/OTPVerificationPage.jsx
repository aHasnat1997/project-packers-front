import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import star from '../../../assets/icon/star.svg';

const OTPVerificationPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate('/auth/new-password');
    }

    return (
        <section className='section-div flex items-center'>
            <div className='w-1/2 pr-28 border-r border-gray-400'>
                <h1 className='text-5xl font-bold font-Sora text-white'>
                    Enter your OTP verification code
                </h1>
                <p className='text-gray-400 mt-4'>
                    To get a verification code, first confirm the phone number you added to your account r••••••••@coredevs.ltd. Standard rates apply.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
                    <div className='flex items-center gap-4'>
                        <input
                            {...register('number')}
                            type='number'
                            className='w-full input-field px-5 py-4 text-center'
                        />
                        <input
                            {...register('number')}
                            type='number'
                            className='w-full input-field px-5 py-4 text-center'
                        />
                        <input
                            {...register('number')}
                            type='number'
                            className='w-full input-field px-5 py-4 text-center'
                        />
                        <input
                            {...register('number')}
                            type='number'
                            className='w-full input-field px-5 py-4 text-center'
                        />
                    </div>
                    <input
                        type='submit'
                        value='Verify Account'
                        className='w-full btn-primary py-4 px-5 mt-5'
                    />
                </form>
            </div>
            <div className='lg:w-1/2 ml-28 flex flex-col gap-6'>
                <div className='w-[30rem] h-4 bg-[#124E58] rounded-full'></div>
                <div className='w-[30rem] h-4 bg-[#124E58] rounded-full'></div>
                <div className='w-[20rem] h-4 bg-[#124E58] rounded-full'></div>
                <div className='w-[20rem] p-5 bg-[#124E58] rounded-full flex items-center justify-between'>
                    <img src={star} alt="icon" />
                    <img src={star} alt="icon" />
                    <img src={star} alt="icon" />
                    <img src={star} alt="icon" />
                </div>
            </div>
        </section>
    );
};

export default OTPVerificationPage;
