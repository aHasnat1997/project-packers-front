import React, { useState } from 'react';
import minus from '../assets/icon/cd-minus-sign-01.svg';
import plus from '../assets/icon/cd-plus-sign-01.svg';

const Counter = ({ fieldStyle = String }) => {
    const [value, setValue] = useState(1);
    const minusBtn = () => {
        if (value !== 1) {
            setValue(value - 1)
        }
    }
    return (
        <div className={`flex justify-between border rounded-full ${fieldStyle}`}>
            <span>
                <img
                    src={minus}
                    alt="minus"
                    className={`${value === 1 && 'disabled'} cursor-pointer`}
                    onClick={minusBtn}
                />
            </span>
            <input
                type="text"
                value={value}
                className='text-center focus:outline-none'
                readOnly
            />
            <span>
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
