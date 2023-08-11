import React, { useContext, useState } from 'react';
import google from '../../../assets/icon/google-icon.svg';
import facebook from '../../../assets/icon/facebook-icon.svg';
import apple from '../../../assets/icon/apple-icon.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useTitle } from '../../../Hooks/useTitle';
import usePreviousLocation from '../../../Hooks/usePreviousLocation';
import { AuthContext } from '../../../context/AuthProvider';
import PasswordSymbol from '../../../components/PasswordSymbol';
import alert_minor from '../../../assets/icon/alert_minor.svg';

const LoginPage = () => {
    useTitle('Log in');
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const { setUser } = useContext(AuthContext);
    const { previousLocation, savePreviousLocation } = usePreviousLocation();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || previousLocation || '/';
    const { register, handleSubmit, control, reset } = useForm();

    const errorBadge = (massage, badgeStyles) => <div
        className={`duration-300 ${badgeStyles && badgeStyles} ${massage ? 'opacity-100' : 'opacity-0'}`}
    >
        <div className='w-fit flex gap-1 bg-[#DC2626] text-white rounded-full p-1 ml-auto'>
            <img src={alert_minor} alt='alert_minor' />
            <p className='mr-2'>
                {massage && massage}
            </p>
        </div>
    </div>

    const onSubmit = data => {
        const email = import.meta.env.VITE_EMAIL;
        const pass = import.meta.env.VITE_PASS;
        console.log(email, pass);

        if (data.email === '' || data.email !== email) {
            if (data.email === '') {
                setEmailError('Please enter your email address');
                setTimeout(() => setEmailError(false), '4000')
            } else {
                setEmailError('Please enter your valid email');
                setTimeout(() => setEmailError(false), '4000')
            }
        }
        if (data.password === '' || data.password !== pass) {
            if (data.password === '') {
                setPassError('Please enter your password address');
                setTimeout(() => setPassError(false), '4000')
            } else {
                setPassError('Please enter your valid password');
                setTimeout(() => setPassError(false), '4000')
            }
            setPassError(false);
        }
        if (data.password === pass && data.email === email) {
            setUser(true);
            navigate(from, { replace: true });
            savePreviousLocation(null);
        }
        console.log(data);
        savePreviousLocation(previousLocation);
    };

    return (
        <section className='max-w pt-28 flex items-center justify-between'>
            <div className='lg:w-1/2 border-r border-gray-500'>
                <h1 className='text-5xl font-bold font-Sora text-white'>Welcome back</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-8 w-[30rem]'>
                        <label className='text-white mb-2'>Email Address/ Phone number</label>
                        <br />
                        <input
                            {...register("email")}
                            type='text'
                            // required={true}
                            className={`w-full input-field px-5 py-4 text-sm`}
                            placeholder='Enter Your Email Address'
                        />
                        {errorBadge(emailError, 'mt-2')}
                    </div>
                    <div className='mt-4 w-[30rem]'>
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
                            render={({ field }) => <PasswordSymbol width='full' py='4' placeholder='Enter Your Password' {...field} />}
                        />
                        {errorBadge(passError, 'mt-[3.7rem]')}
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
