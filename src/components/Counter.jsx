import React, { useState } from 'react';
import minus from '../assets/icon/cd-minus-sign-01.svg';
import plus from '../assets/icon/cd-plus-sign-01.svg';


/**
 * Counter field
 * @param {String} fieldStyle Counter field style 
 * @returns 
 */
const Counter = ({ fieldStyle = String }) => {
    const [value, setValue] = useState(1);
    
    return (
        <div className={`flex justify-between border relative px-4 ${fieldStyle}`}>
            <span className='absolute'>
                <img
                    src={minus}
                    alt="minus"
                    className={`${value === 1 && 'disabled'} cursor-pointer`}
                    onClick={() => (value !== 1 && setValue(value - 1))}
                />
            </span>
            <input
                type="text"
                value={value}
                className='text-center w-full mx-auto focus:outline-none'
                readOnly
            />
            <span className='absolute right-4'>
                <img
                    src={plus}
                    alt="plus"
                    className={`cursor-pointer`}
                    onClick={() => setValue(value + 1)}
                />
            </span>
        </div>
    );
};

export default Counter;
