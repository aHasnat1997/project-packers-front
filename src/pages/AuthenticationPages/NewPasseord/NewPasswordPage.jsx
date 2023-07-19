import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import lock from '../../../assets/icon/circle-lock.svg';

const NewPasswordPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate('/auth/log-in');
    }

    return (
        <section className='section-div flex items-center'>
            <div className='pr-28 border-r border-gray-400'>
                <h1 className='text-5xl font-bold font-Sora text-white'>
                    Keep your  password secret
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-12'>
                    <div className='mt-8'>
                        <label className='text-white mb-2'>New Password</label>
                        <br />
                        {/* to-do: password symbol change */}
                        <input
                            {...register('newPassword')}
                            type='text'
                            className='w-full input-field input-pass-icon px-5 py-4'
                            placeholder='Enter Your Password'
                        />
                    </div>
                    <div className='mt-8'>
                        <label className='text-white mb-2'>Confirm  Password</label>
                        <br />
                        {/* to-do: password symbol change */}
                        <input
                            {...register('confirmPassword')}
                            type='text'
                            className='w-full input-field input-pass-icon px-5 py-4'
                            placeholder='Enter Your Password'
                        />
                    </div>
                    <input
                        type='submit'
                        value='Save Password'
                        className='w-full btn-primary py-4 px-5 mt-5'
                    />
                </form>
            </div>
            <div className='lg:w-1/2 ml-28 flex flex-col items-center gap-6'>
                <div>
                    <img src={lock} alt="icon" />
                </div>
                <div className='w-[30rem] h-4 bg-[#124E58] rounded-full'></div>
                <div className='w-[30rem] h-4 bg-[#124E58] rounded-full'></div>
                <div className='w-[20rem] h-4 bg-[#124E58] rounded-full'></div>
            </div>
        </section>
    );
};

export default NewPasswordPage;
