import React, { useContext } from 'react';
import AdminHeaders from '../../DDComponents/AdminHeaders';
import { Link } from 'react-router-dom';
import { AllProductsContext } from '../../../context/AllProductsProvider';
import select from '../../../assets/icon/cd-select_minor-01.svg';
import assets from '../../../assets/icon/Assets-caret-down_minor.svg';
import search from '../../../assets/icon/cd-search-01.svg';
import filter_minor from '../../../assets/icon/filter_minor.svg';
import sort_minor from '../../../assets/icon/sort_minor.svg';

const AllProducts = () => {
  const { productData } = useContext(AllProductsContext);
  // console.log(productData);

  return (
    <>
      <AdminHeaders location='all-products' />
      <div className='mt-6 flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <p
            className='flex items-center bg-accent/40 py-3 px-2 rounded-md'
          >
            All
            <img src={assets} alt="assets" />
          </p>
          <p>New</p>
          <p>Draft</p>
          <p>Abandoned Checkouts</p>
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
              Product <img src={select} alt="select" />
            </td>
            <td className='py-4 px-6'>Inventory</td>
            <td className='py-4 px-6'>Price</td>
            <td className='py-4 px-6'>Category</td>
            <td className='py-4 px-6'>Published Date</td>
          </tr>
        </thead>
        <tbody>
          {
            productData?.map(data => <tr key={data?.id} className='hover:bg-[#FEF9DC]'>
              <td className='py-4 px-6 border-b'><input type="checkbox" /></td>
              <td className='py-4 px-6 border-b'>
                <Link
                  to={`${data?.id}`}
                  className='flex items-center gap-3'
                >
                  <img src={data?.productImg} alt='product image' className='w-10' />
                  <h4>{data?.productName}</h4>
                </Link>
              </td>
              <td className='py-4 px-6 border-b'>{data?.productQuantity} in stock</td>
              <td className='py-4 px-6 border-b'>$ {data?.price}</td>
              <td className='py-4 px-6 border-b'>{data?.category}</td>
              <td className='py-4 px-6 border-b'>{data?.publishedDate}</td>
            </tr>)
          }
        </tbody>
      </table>
    </>
  );
};

export default AllProducts;
