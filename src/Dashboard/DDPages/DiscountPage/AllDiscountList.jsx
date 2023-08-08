import React, { useContext } from 'react';
import { AllDiscountContext } from '../../../context/DiscountProvider';
import AdminHeaders from '../../DDComponents/AdminHeaders';
import select from '../../../assets/icon/cd-select_minor-01.svg';
import assets from '../../../assets/icon/Assets-caret-down_minor.svg';
import search from '../../../assets/icon/cd-search-01.svg';
import filter_minor from '../../../assets/icon/filter_minor.svg';
import sort_minor from '../../../assets/icon/sort_minor.svg';
import { Link } from 'react-router-dom';


const AllDiscountList = () => {
  const { discountData } = useContext(AllDiscountContext);
  console.log(discountData);

  return (
    <>
      <AdminHeaders location='discount' />
      <div className='mt-6 flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <p
            className='flex items-center bg-accent/40 py-3 px-2 rounded-md'
          >
            All
            <img src={assets} alt="assets" />
          </p>
          <p>Active</p>
          <p>Draft</p>
          <p>Archived</p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='p-3 border-2 rounded-md flex items-center'>
            <img
              src={search}
              alt="search"
            />
            <img
              src={filter_minor}
              alt="filter_minor"
            />
          </div>
          <img
            src={sort_minor}
            alt="sort_minor"
            className='p-3 border-2 rounded-md'
          />
        </div>
      </div>
      <table className='w-full mt-8'>
        <thead>
          <tr className='bg-slate-200'>
            <td className='py-4 px-6'><input type="checkbox" /></td>
            <td className='py-4 px-6 flex items-center gap-1'>
              Code <img src={select} alt="select" />
            </td>
            <td className='py-4 px-6'>Coupon type</td>
            <td className='py-4 px-6'>Coupon amount</td>
            <td className='py-4 px-6'>Description</td>
            <td className='py-4 px-6'>Usage / Limit</td>
            <td className='py-4 px-6'>Expiry Date</td>
          </tr>
        </thead>
        <tbody>
          {
            discountData?.map(data => <tr key={data?.id} className='border-b'>
              <td className='py-4 px-6'><input type="checkbox" /></td>
              <td className='py-4 px-6'>{data?.discountCode}</td>
              <td className='py-4 px-6'>{data?.couponType} in stock</td>
              <td className='py-4 px-6'>$ {data?.couponAmount}</td>
              <td className='py-4 px-6'>{data?.description}</td>
              <td className='py-4 px-6'>{data?.usage} / {data?.limit}</td>
              <td className='py-4 px-6'>{data?.expiryDate}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
};

export default AllDiscountList;
