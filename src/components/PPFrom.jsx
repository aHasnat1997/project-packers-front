import React from 'react';
import { useForm } from 'react-hook-form';

const PPFrom = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <from
            onSubmit={handleSubmit(onSubmit)}
        >
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
        </from>
    );
};

export default PPFrom;
