import React from 'react';
import { useContext } from 'react';
import { AllOrdersProductContext } from '../../../../context/AllOrdersProductProvider';
import AdminHeaders from '../../../DDComponents/AdminHeaders';
import Overview from '../../DashboardPage/Overview';
import assets from '../../../../assets/icon/Assets-caret-down_minor.svg';
import { SearchField } from '../../../../components/SearchField';
import search from '../../../../assets/icon/cd-search-01.svg';
import filter from '../../../../assets/icon/cd-filter.svg';
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
            <td className='py-4 px-6'>Link</td>
            <td className='py-4 px-6'>Date</td>
            <td className='py-4 px-6'>Customer</td>
            <td className='py-4 px-6'>Status</td>
          </tr>
        </thead>
        <tbody>
          {
            ordersProductData?.map(data => <tr key={data?.id} className='hover:bg-[#FEF9DC]'>
              <td className='py-4 px-6 border-b'><input type="checkbox" /></td>
              <td className='py-4 px-6 border-b'># {data?.id}</td>
              <td className='py-4 px-6 border-b'>
                <Link to={`${data?.id}`}>{data?.productName}</Link>
              </td>
              <td className='py-4 px-6 border-b text-[#3E949A]'>{data?.webSiteLink}</td>
              <td className='py-4 px-6 border-b'>{data?.date}</td>
              <td className='py-4 px-6 border-b'>{data?.customer?.name}</td>
              <td className='py-4 px-6 border-b'>
                <StatusBadge badgeTitle={data?.status} />
              </td>
            </tr>)
          }
        </tbody>
      </table>

    </>
  );
};

export default AllOrders;