import React from 'react';
import { AllOrdersProductContext } from '../../../../context/AllOrdersProductProvider';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../../../assets/icon/cd-arrow-left-01.svg';
import cd_delete from '../../../../assets/icon/cd-delete-01.svg';

const SingleOrder = () => {
  const { ordersProductData } = useContext(AllOrdersProductContext);
  const { id } = useParams();
  const ordersData = ordersProductData?.find(data => data.id === id);

  return (
    <>
      <div className='pb-4 border-b flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link to='/admin/orders'>
            <img
              src={arrow}
              alt="arrow_left"
              className='btn border p-2 w-16'
            />
          </Link>
          <div>
            <p className='text-gray-400'>Back to item orders</p>
            <h2 className='text-3xl font-semibold'>#{ordersData?.id}</h2>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <button className='btn'>Download Invoice</button>
          <button className='btn flex items-center gap-2'>
            <img src={cd_delete} alt="delete" />
            Delete
          </button>
          <button
            className='btn bg-secondary px-4 py-2'
          >
            Update
          </button>
        </div>
      </div>
      
    </>
  );
};

export default SingleOrder;
