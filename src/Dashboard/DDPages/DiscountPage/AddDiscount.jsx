import React, { useState } from 'react';
import arrow from '../../../assets/icon/cd-arrow-left-01.svg';
import { Link } from 'react-router-dom';

const AddDiscount = () => {
  const [couponCode, setCouponCode] = useState('');
  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 8;
    let code = '#';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }

    setCouponCode(code);
  };


  return (
    <>
      <div className='pb-4 border-b flex items-center gap-2'>
        <Link to='/admin/discount'>
          <img
            src={arrow}
            alt='arrow_left'
            className='btn border p-2 w-16'
          />
        </Link>
        <div>
          <p className='text-gray-400'>Back to discount</p>
          <h2 className='text-3xl font-semibold'>Add new Discount</h2>
        </div>
      </div>
      <div className='w-1/2 mt-5'>
        <h5 className='font-semibold text-xl'>Coupon details</h5>
        <div className='mt-5 border rounded-lg p-3'>
          <div>
            <label>Coupon code</label>
            <div className='flex items-center gap-2'>
              <input
                type='text'
                className='input-field-dd w-full p-3'
                placeholder='Coupon Code'
                defaultValue={couponCode && couponCode}
              />
              <button
                className='shrink-0 btn border p-3'
                onClick={generateCouponCode}
              >
                Generate coupon code
              </button>
            </div>
          </div>
          <div className='mt-5'>
            <label>Description (optional)</label>
            <textarea
              type='text'
              className='input-field-dd w-full p-3'
              placeholder='Coupon Description'
              rows='5'
            />
          </div>
        </div>
      </div>
      <div className='w-1/2 mt-5'>
        <h5 className='font-semibold text-xl'>General</h5>
        <div className='mt-5 border rounded-lg p-3'>
          <div>
            <label>Product Category</label>
            <input
              type='text'
              className='input-field-dd w-full p-3'
              placeholder='Product Category'
            />
          </div>
          <div className='my-5'>
            <label>Sub Category</label>
            <input
              type='text'
              className='input-field-dd w-full p-3'
              placeholder='Sub Category'
            />
          </div>
          <div>
            <label>Tags</label>
            <input
              type='text'
              className='input-field-dd w-full p-3'
              placeholder='Tags'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDiscount;
