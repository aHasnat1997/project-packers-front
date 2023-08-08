import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/icon/cd-arrow-left-01.svg';
import cd_delete from '../../../assets/icon/cd-delete-01.svg';
import sort_minor from '../../../assets/icon/sort_minor.svg';

const AllCategory = () => {
  const [category, setCategory] = useState();
  useEffect(() => {
    const options = { method: 'GET' };
    fetch('/category.json', options)
      .then(response => response.json())
      .then(response => {
        setCategory(response)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <div className='pb-4 border-b flex items-center gap-2'>
        <Link to='/admin'>
          <img
            src={arrow}
            alt='arrow_left'
            className='btn border p-2 w-16'
          />
        </Link>
        <div>
          <p className='text-gray-400'>Back to Category</p>
          <h2 className='text-3xl font-semibold'>Add new Category</h2>
        </div>
      </div>

      <div className='mt-5 flex gap-8'>
        <div className='w-[30%] flex flex-col gap-5'>
          <h5 className='font-semibold text-xl'>Add New Category</h5>
          <div className='border rounded-lg p-3'>
            <div>
              <label>Name</label>
              <input
                type='text'
                className='input-field-dd w-full p-3'
                placeholder='Product Category'
              />
            </div>
            <div className='my-5'>
              <label>Slug</label>
              <input
                type='text'
                className='input-field-dd w-full p-3'
                placeholder='Sub Category'
              />
            </div>
          </div>
          <button className='w-1/2 ml-auto btn bg-secondary px-4 py-2'>Add New Category</button>
        </div>

        <div className='w-[70%] px-8'>
          <div className='flex items-center justify-between'>
            <button className='btn flex gap-1'>
              <img src={cd_delete} alt="delete" />Delete
            </button>
            <button className='btn p-2 border'>
              <img src={sort_minor} alt="sort minor" />
            </button>
          </div>

          <table className='mt-5 w-full'>
            <thead>
              <tr className='bg-slate-200'>
                <td className='py-2 px-6'><input type="checkbox" /></td>
                <td className='py-2 px-6'>Name</td>
                <td className='py-2 px-6'>Slug</td>
                <td className='py-2 px-6'>Post</td>
              </tr>
            </thead>
            <tbody>
              {
                category?.map(data => <tr key={data?.id} className='border-b'>
                  <td className='py-4 px-6'><input type="checkbox" /></td>
                  <td className='py-4 px-6'>{data?.name}</td>
                  <td className='py-4 px-6'>{data?.slug}</td>
                  <td className='py-4 px-6'>{data?.post.length}</td>
                </tr>)
              }
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default AllCategory;
