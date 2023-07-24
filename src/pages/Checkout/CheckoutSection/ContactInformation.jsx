import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactInformation = ({ register }) => {

    return (
        <aside className='col-span-2'>
            <h3 className='text-xl text-primary'>Contact information</h3>
            <div className='mt-6'>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        placeholder='Your Email'
                        className='input-field w-full py-2 px-4 mt-3'
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="email">Phone number <span className='text-red-700'>*</span></label>
                    <PhoneInput
                        {...register('phone')}
                        defaultCountry="BD"
                        international
                        placeholder="Enter phone number"
                        className='w-full input-field overflow-hidden bg-white py-2 px-4 mt-3 focus:border-0'
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="email">Alternative phone number (Optional)</label>
                    <PhoneInput
                        {...register('altPhone')}
                        defaultCountry="BD"
                        international
                        placeholder="Enter phone number"
                        className='w-full input-field overflow-hidden bg-white py-2 px-4 mt-3 focus:border-0'
                    />
                </div>
            </div>
            <h3 className='text-xl text-primary mt-12'>Shipping address</h3>
            <div className='mt-6'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='w-full'>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            {...register("firstName")}
                            type="text"
                            id="firstName"
                            placeholder='Enter your first name'
                            className='input-field w-full py-2 px-4 mt-3'
                        />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            {...register("lastName")}
                            type="text"
                            id="lastName"
                            placeholder='Enter your last name'
                            className='input-field w-full py-2 px-4 mt-3'
                        />
                    </div>
                </div>
                <div className='mt-4'>
                    <label htmlFor="address">Address</label>
                    <input
                        {...register("address")}
                        type="text"
                        id="address"
                        placeholder='Enter your address'
                        className='input-field w-full py-2 px-4 mt-3'
                    />
                </div>
                <div className='mt-4 flex items-center justify-between gap-4'>
                    <div className='mt-4 w-full'>
                        <label htmlFor="city">City</label>
                        <input
                            {...register("city")}
                            type="text"
                            id="city"
                            placeholder='Enter your city'
                            className='input-field w-full py-2 px-4 mt-3'
                        />
                    </div>
                    <div className='mt-4 w-full'>
                        <label htmlFor="area">Area</label>
                        <input
                            {...register("area")}
                            type="text"
                            id="area"
                            placeholder='Enter your area'
                            className='input-field w-full py-2 px-4 mt-3'
                        />
                    </div>
                    <div className='mt-4 w-full'>
                        <label htmlFor="zipCode">Zip code</label>
                        <input
                            {...register("zipCode")}
                            type="text"
                            id="zipCode"
                            placeholder='Enter your zip code'
                            className='input-field w-full py-2 px-4 mt-3'
                        />
                    </div>
                </div>
                <div className='mt-4 w-full flex flex-col gap-3'>
                    <label htmlFor="deliveryInstructions">Delivery Instructions (Optional)</label>
                    <textarea
                        {...register("zipCode")}
                        name="deliveryInstructions"
                        id="deliveryInstructions"
                        cols="30"
                        rows="5"
                        placeholder='Delivery Instructions'
                        className='border-2 rounded-lg text-[14px] p-4'
                    />
                </div>
            </div>
        </aside>
    );
};

export default ContactInformation;
