import React from 'react';
import { useContext } from 'react';
import { AllOrdersProductContext } from '../../../../context/AllOrdersProductProvider';
import AdminHeaders from '../../../DDComponents/AdminHeaders';
import Overview from '../../DashboardPage/Overview';
import assets from '../../../../assets/icon/Assets-caret-down_minor.svg';
import { SearchField } from '../../../../components/SearchField';
import search from '../../../../assets/icon/cd-search-01.svg';
import filter from '../../../../assets/icon/cd-filter.svg';
import cd_delete from '../../../../assets/icon/cd-delete-01.svg';
import cd_edit from '../../../../assets/icon/cd-edit-01.svg';
import cd_arrow from '../../../../assets/icon/cd-arrow-data-transfer-vertical-round 1-01.svg';
import select from '../../../../assets/icon/cd-select_minor-01.svg';
import { Link } from 'react-router-dom';
import StatusBadge from '../../../../components/StatusBadge';

const AllOrders = () => {
  const { ordersProductData } = useContext(AllOrdersProductContext);

  return (
    <>
      <AdminHeaders location='all-orders' />
      <Overview />

      <div className='mt-8 flex items-center justify-between'>
        <div className='flex items-center gap-8'>
          <p
            className='flex items-center bg-accent/40 py-3 px-2 rounded-md'
          >
            All
            <img src={assets} alt="assets" />
          </p>
          <p>Pending</p>
          <p>Processing</p>
          <p>Shipping</p>
          <p>Canceled</p>
          <p>Completed</p>
        </div>
        <div className='flex items-center gap-2'>
          <SearchField
            placeholder={'Search'}
            icon={search}
            fieldStyle='input-field-dd py-3'
          />
          <img
            src={filter}
            alt='calendar'
            className='p-3 border-2 rounded-md'
          />
          <img
            src={cd_arrow}
            alt="cd_arrow"
            className='p-3 border-2 rounded-md'
          />
        </div>
      </div>
      <table className='w-full mt-8'>
        <thead>
          <tr className='bg-slate-200'>
            <td className='py-4 px-6'><input type="checkbox" /></td>
            <td className='py-4 px-6 flex items-center gap-1'>
              ID <img src={select} alt="select" />
            </td>
            <td className='py-4 px-6'>Product name</td>
            <td className='py-4 px-6'>Date</td>
            <td className='py-4 px-6'>Customer</td>
            <td className='py-4 px-6'>Status</td>
            <td className='py-4 px-6'>Items</td>
            <td className='py-4 px-6'>Total</td>
            <td className='py-4 px-6'>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            ordersProductData?.map(data => <tr
              key={data?.id}
              className='hover:bg-[#FEF9DC] border-b'
            >
              <td className='py-4 px-6'><input type="checkbox" /></td>
              <td className='py-4 px-6'># {data?.id}</td>
              <td className='py-4 px-6'>
                <Link to={`${data?.id}`}>{data?.orders[0]?.productName}</Link>
              </td>
              <td className='py-4 px-6'>{data?.orders[0]?.date}</td>
              <td className='py-4 px-6'>{data?.name}</td>
              <td className='py-4 px-6'>
                <StatusBadge badgeTitle={data?.orders[0]?.status} />
              </td>
              <td className='py-4 px-6'>{data?.orders.length} Items</td>
              <td className='py-4 px-6'>
                $ {
                  data.orders.reduce((total, item) => (parseFloat(total + item.price)), 0)
                }
              </td>
              <td className='py-4 px-6'>
                <div className='flex items-center justify-center gap-2'>
                  <img
                    src={cd_delete}
                    alt="delete"
                    className='btn cursor-pointer'
                  />
                  <img
                    src={cd_edit}
                    alt="edit"
                    className='btn cursor-pointer'
                  />
                </div>
              </td>
            </tr>)
          }
        </tbody>
      </table>

    </>
  );
};

export default AllOrders;
