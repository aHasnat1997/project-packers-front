import React from 'react';
import google from '../../../assets/icon/google-icon.svg';
import facebook from '../../../assets/icon/facebook-icon.svg';
import apple from '../../../assets/icon/apple-icon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTitle } from '../../../Hooks/useTitle';

const LoginPage = () => {
    // to-do: navigate to previous page
    useTitle('Log in');
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname;
    console.log(from);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        navigate(from, { replace: true });

    }

    return (
        <section className='max-w pt-28 flex items-center justify-between'>
            <div className='lg:w-1/2 border-r border-gray-500'>
                <h1 className='text-5xl font-bold font-Sora text-white'>Welcome back</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <label className='text-white mb-2'>Password</label>
                        <br />
                        {/* to-do: password symbol change */}
                        <input
                            {...register('password')}
                            type='text'
                            className='w-[30rem] input-field input-pass-icon px-5 py-4'
                            placeholder='Enter Your Password'
                        />
                    </div>
                    <div className='w-[30rem] mt-5 flex items-center justify-between'>
                        <span className='text-white'>
                            <input type="checkbox" className='mr-2' />
                            <label>Remember Me</label>
                        </span>
                        <Link
                            to='/auth/account-recovery'
                            className='text-secondary'
                        >
                            Forgot your password?
                        </Link>
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
            <div className='lg:w-1/2 ml-28'>
                <p className='text-2xl text-white'>Log in to access your Project Packers Platform for order your products from any USA website.</p>
                <p className='mt-5 text-white'>
                    Don't have an account yet?
                    <Link to='/auth/sing-up' className='text-secondary underline ml-2'>Sign up</Link>
                </p>
            </div>
        </section>
    );
};

export default LoginPage;
