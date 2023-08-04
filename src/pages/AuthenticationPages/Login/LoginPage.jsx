import React, { useContext } from 'react';
import google from '../../../assets/icon/google-icon.svg';
import facebook from '../../../assets/icon/facebook-icon.svg';
import apple from '../../../assets/icon/apple-icon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTitle } from '../../../Hooks/useTitle';
import usePreviousLocation from '../../../Hooks/usePreviousLocation';
import { AuthContext } from '../../../context/AuthProvider';
import PasswordSymbol from '../../../components/PasswordSymbol';

const LoginPage = () => {
    useTitle('Log in');
    const { setUser } = useContext(AuthContext);
    const { previousLocation, savePreviousLocation } = usePreviousLocation();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || previousLocation || '/';
    const { register, handleSubmit, control } = useForm();

    const onSubmit = data => {
        console.log(data);
        savePreviousLocation(previousLocation);
        setUser(true);
        navigate(from, { replace: true });
        savePreviousLocation(null);
    };

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
                    <div className='mt-4'>
                        <label className='text-white mb-2'>Password</label>
                        <br />
                        {/* <input
                            {...register('password')}
                            type='password'
                            className='w-[30rem] input-field px-5 py-4 custom-password'
                            placeholder='Enter Your Password'
                        /> */}
                        <Controller
                            name="password"
                            defaultValue=""
                            control={control}
                            render={({ field }) => <PasswordSymbol width='[30rem]' py='4' placeholder='Enter Your Password' {...field} />}
                        />
                    </div>
                    <div className='w-[30rem] mt-20 flex items-center justify-between'>
                        <span className='text-white'>
                            <input type="checkbox" className='mr-2' />
                            <label>Remember Me</label>
                        </span>
                        <Link
                            to='/authentication/account-recovery'
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
                    <Link to='/authentication/sing-up' className='text-secondary underline ml-2'>Sign up</Link>
                </p>
            </div>
        </section>
    )
};

export default LoginPage;
