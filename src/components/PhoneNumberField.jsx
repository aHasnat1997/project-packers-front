import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useForm } from 'react-hook-form';
// import PhoneInput from "react-phone-number-input/react-hook-form-input";

const PhoneNumberField = () => {
    const [value, setValue] = useState();
    const { register } = useForm();
    return (
        <form>
            <PhoneInput
                {...register('phone')}
                international
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
                className='w-[30rem] input-field overflow-hidden bg-white px-5 py-4 focus:border-0'
            />
        </form>
    );
};

export default PhoneNumberField;
