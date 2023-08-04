import React from 'react';
import { Link } from 'react-router-dom';
import cd_delete from '../../assets/icon/cd-delete-01.svg';


/**
 * Admin Page Headers
 * @param {String} location Which page to use 
 * @returns Header
 */
const AdminHeaders = ({ location = String }) => {
  if (location === 'overview') {
    return <h2 className='text-2xl font-semibold pb-4 border-b'>Overview</h2>
  }

  else if (location === 'item-request') {
    return <>
      <div className='pb-4 border-b flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Item Request</h2>
        <button className='btn flex items-center gap-2'>
          <img src={cd_delete} alt="delete" />
          Delete
        </button>
      </div>
    </>
  }
  
  else if (location === 'all-orders') {
    return <>
      <div className='pb-4 border-b flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>All Orders</h2>
        <div>

        </div>
      </div>
    </>
  }

  else if (location === 'customers') {
    return <>
      <div className='pb-4 border-b flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Customers</h2>
        <div className='flex items-center gap-4'>
          <button className='btn'>
            Export
          </button>
          <Link
            to='add-customer'
            className='btn bg-secondary px-4 py-2'
          >
            Add Customer
          </Link>
        </div>
      </div>
    </>
  }

  else if (location === 'staff') {
    return <>
      <div className='pb-6 border-b flex items-center justify-between'>
        <h2 className='text-2xl font-semibold'>Staff</h2>
        <button className='btn bg-secondary px-4 py-2'>Update</button>
      </div>
    </>
  }
};

export default AdminHeaders;
