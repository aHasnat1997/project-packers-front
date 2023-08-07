import React from 'react';
import { AllOrdersProductContext } from '../../../../context/AllOrdersProductProvider';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../../../assets/icon/cd-arrow-left-01.svg';
import cd_delete from '../../../../assets/icon/cd-delete-01.svg';
import cancel from '../../../../assets/icon/cd-cancel-01.svg';
import { SearchField } from '../../../../components/SearchField';
import search from '../../../../assets/icon/cd-search-01.svg';
import Counter from '../../../../components/Counter';
import CopyButton from '../../../../components/CopyButton';

const SingleOrder = () => {
  const { ordersProductData } = useContext(AllOrdersProductContext);
  const { id } = useParams();
  const ordersData = ordersProductData?.find(data => data.id === parseInt(id));
  // console.log(ordersData);

  return (
    <>
      <div className='pb-4 border-b flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link to='/admin/orders'>
            <img
              src={arrow}
              alt='arrow_left'
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
            <img src={cd_delete} alt='delete' />
            Delete
          </button>
          <button
            className='btn bg-secondary px-4 py-2'
          >
            Update
          </button>
        </div>
      </div>

      <div className='mt-6 flex items-start gap-4'>
        <div className='w-3/4'>
          <div className='w-full border rounded-lg'>
            <div className='flex p-5 items-center justify-between'>
              <h5 className='font-semibold text-xl'>Products</h5>
              <p className='text-accent'>Add custom item</p>
            </div>
            <div className='w-full p-5 flex items-center gap-2'>
              <SearchField
                placeholder={'Search'}
                icon={search}
                flexOne={true}
                fieldStyle='input-field-dd py-3 w-full'
              />
              <button className='btn border p-3'>Browse</button>
            </div>
            <table className='w-full'>
              <thead>
                <tr className='font-semibold'>
                  <td className='py-4 px-6'>Product</td>
                  <td className='py-4 px-6'>Quantity</td>
                  <td className='py-4 px-6'>Total</td>
                </tr>
              </thead>
              <tbody>
                {
                  ordersData?.orders?.map(order => <tr key={order.id} className='border-t'>
                    <td className='py-4 px-6 flex items-center gap-2'>
                      <img
                        src={order.productImg}
                        alt='product image'
                        className='w-16 border rounded-lg'
                      />
                      <div>
                        <h6>{order.productName}</h6>
                        <p>$ {order.price}</p>
                      </div>
                    </td>
                    <td className='px-6'><Counter fieldStyle='w-32 py-3' /></td>
                    <td className='py-4 px-6'>$ {order.price}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>

          <div className='w-full mt-6 p-5 border rounded-lg'>
            <h5 className='font-semibold text-xl '>Payment</h5>
            <table className='w-full mt-5'>
              <tbody className='w-full'>
                <tr>
                  <td>Subtotal</td>
                  <td></td>
                  <td className='text-end'>$ {
                    ordersData?.orders?.reduce((total, item) => (parseFloat(total + item.price)), 0)
                  }</td>
                </tr>
                <tr>
                  <td className='text-accent underline'>Add discount</td>
                  <td>-</td>
                  <td className='text-end'>$ 00</td>
                </tr>
                <tr>
                  <td className='text-accent underline'>Add shipping</td>
                  <td>-</td>
                  <td className='text-end'>$ 00</td>
                </tr>
                <tr>
                  <td className='text-accent underline'>Estimated tax</td>
                  <td>-</td>
                  <td className='text-end'>$ 00</td>
                </tr>
                <tr className='font-semibold'>
                  <td>Total</td>
                  <td></td>
                  <td className='text-end'>$ 00</td>
                </tr>
              </tbody>
            </table>
            <div className='flex border-t'>
              <select className='input-field-dd ml-auto mt-5 px-4 py-2'>
                <option value='completed'>Completed</option>
                <option value='pending'>Pending</option>
                <option value='processing'>Processing</option>
                <option value='shipping'>Shipping</option>
                <option value='cancel'>Cancel</option>
              </select>
            </div>
          </div>
        </div>

        <div className='w-1/4 flex flex-col gap-4'>
          <div className='w-full border rounded-lg'>
            <div className='p-5 flex flex-col gap-5 border-b'>
              <div className='flex items-center justify-between'>
                <h4 className='font-semibold text-xl'>Customer</h4>
                <img src={cancel} alt='cancel' />
              </div>
              <h6 className='text-accent underline '>{ordersData?.name}</h6>
            </div>
            <div className='p-5 border-b flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h5 className='font-semibold'>Contact information</h5>
                <p className='text-accent'>Edit</p>
              </div>
              <div className='flex items-center justify-between'>
                <h5 className='text-accent'>{ordersData?.email}</h5>
                <CopyButton textToCopy={ordersData?.email} />
              </div>
              <h5>{ordersData?.phone}</h5>
            </div>
            <div className='p-5 border-b flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h5 className='font-semibold'>Shipping address</h5>
                <p className='text-accent'>Edit</p>
              </div>
              <div className='flex items-center justify-between'>
                <h5>{ordersData?.location}</h5>
                <CopyButton textToCopy={ordersData?.location} />
              </div>
            </div>
            <div className='p-5 flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h5 className='font-semibold'>Billing address</h5>
                <p className='text-accent'>Label</p>
              </div>
              <div className='flex items-center justify-between'>
                <h5>{ordersData?.locationBilling ? ordersData?.locationBilling : 'Same as shipping address'}</h5>
              </div>
            </div>
          </div>
          <div className='w-full p-5 border rounded-lg'>
            <div className='flex items-center justify-between'>
              <h4 className='font-semibold text-xl'>Note</h4>
              <img src={cancel} alt='cancel' />
            </div>
                  <p className='mt-5'>No note</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOrder;
