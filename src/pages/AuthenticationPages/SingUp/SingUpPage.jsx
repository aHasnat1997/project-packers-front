import React from 'react';
import google from '../../../assets/icon/google-icon.svg';
import facebook from '../../../assets/icon/facebook-icon.svg';
import apple from '../../../assets/icon/apple-icon.svg';
import { Controller, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useTitle } from '../../../Hooks/useTitle';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import PasswordSymbol from '../../../components/PasswordSymbol';

const SingUpPage = () => {
    useTitle('Sing up');
    const navigate = useNavigate();
    const { register, handleSubmit, control } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate('/authentication/log-in');
    }

    return (
        <section className='max-w pt-16 flex items-center justify-between'>
            <div className='lg:w-1/2 pr-28'>
                <p className='text-2xl text-white'>User original product shopping experience  made easy and fun</p>
                <p className='mt-5 text-white'>
                    Already have an account yet?
                    <Link to='/authentication/log-in' className='text-secondary underline ml-2'>Login</Link>
                </p>
            </div>
            <div className='lg:w-1/2 pl-28 border-l border-gray-500'>
                <h1 className='text-5xl font-bold font-Sora text-white'>Sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-8'>
                        <label className='text-white mb-2'>Full Name</label>
                        <br />
                        <input
                            {...register("name")}
                            type='text'
                            className='w-[30rem] input-field px-5 py-4 text-sm'
                            placeholder='Enter Your Full Name'
                        />
                    </div>
                    <div className='mt-8'>
                        <label className='text-white mb-2'>Email Address/ Phone number</label>
                        <br />
                        <input
                            {...register("email")}
                            type='text'
                            className='w-[30rem] input-field px-5 py-4 text-sm'
                            placeholder='Enter Your Email Address'
                        />
                    </div>
                    <div className='mt-8'>
                        <label className='text-white mb-2'>Phone number</label>
                        <br />
                        <PhoneInput
                            {...register('phone')}
                            defaultCountry="BD"
                            international
                            placeholder="Enter phone number"
                            className='w-[30rem] input-field overflow-hidden bg-white py-4 px-5 mt-3'
                        />
                    </div>
                    <div className='mt-8'>
                        <label className='text-white mb-2'>Password</label>
                        <br />
                        {/* <input
                            {...register('password')}
                            type='text'
                            className='w-[30rem] input-field input-pass-icon px-5 py-4'
                            placeholder='Enter Your Password'
                        /> */}
                        <Controller
                            name="password"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <PasswordSymbol width='[30rem]' py='4' placeholder='Enter Your Password' {...field} />}
                        />
                    </div>
                    <div className='w-[30rem] mt-5 flex items-center justify-between'>
                        <span className='text-white'>
                            <input type="checkbox" className='mr-2' />
                            <label>I agree to Project Packers <span className='text-secondary'>Terms of Service</span> and <span className='text-secondary'>Privacy notice</span></label>
                        </span>
                    </div>
                    <div className='mt-12 flex items-center gap-2'>
                        <div className='flex items-center gap-2'>
                            <img
                                className='bg-white p-3 rounded-full'
                                src={google}
                                alt="google icon" />
                            <img
                                className='bg-white p-3 rounded-full'
                                src={facebook}
                                alt="facebook icon" />
                            <img
                                className='bg-white p-3 rounded-full'
                                src={apple}
                                alt="apple icon" />
                        </div>
                        <input
                            type='submit'
                            value='Login'
                            className='w-72 btn-primary py-4 px-5'
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SingUpPage;
