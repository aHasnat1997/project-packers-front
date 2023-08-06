import React, { useContext, useEffect, useState } from 'react';
import { AllRequestProductContext } from '../../../../context/AllRequestProductProvider';
import { Link, useParams } from 'react-router-dom';
import { SearchField } from '../../../../components/SearchField';
import arrow from '../../../../assets/icon/cd-arrow-left-01.svg';
import cd_delete from '../../../../assets/icon/cd-delete-01.svg';
import CopyButton from '../../../../components/CopyButton';
import cancel from '../../../../assets/icon/cd-cancel-01.svg';
import internet from '../../../../assets/icon/cd-internet-01.svg';
import Counter from '../../../../components/Counter';
import upload from '../../../../assets/icon/cd-image-upload-primary-color.svg';

const SingleItemRequest = () => {
  const { requestProductData } = useContext(AllRequestProductContext);
  const { id } = useParams();
  const productData = requestProductData?.find(data => data.id === id);

  const [selectedImage, setSelectedImage] = useState();
  const [previewImage, setPreviewImage] = useState([]);
  const [totalPrice, setTotalPrice] = useState([{ value1: 0 }, { value2: 0 }, { value3: 0 }]);
  // const totalPrice = [{ value1: 0 }, { value2: 0 }, { value3: 0 }];

  useEffect(() => {
    if (!selectedImage) {
      setPreviewImage([]);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedImage);
    setPreviewImage((prev) => [...prev, objectUrl]);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);


  const handleFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    setSelectedImage(e.target.files[0]);
  };

  const handleDelete = id => {
    const newPreviewImage = previewImage.filter((img, i) => i !== id);
    setPreviewImage(newPreviewImage);
  }

  // const priceChange = (value1, value2, value3) => {
  //   setTotalPrice({ value1, value2, value3 });
  //   // console.log(value);
  // };
  // console.log(totalPrice);

  const total = parseFloat(totalPrice.value1) + parseFloat(totalPrice.value2) + parseFloat(totalPrice.value3);

  return (
    <>
      <div className='pb-4 border-b flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link to='/admin/request'>
            <img
              src={arrow}
              alt="arrow_left"
              className='btn border p-2 w-16'
            />
          </Link>
          <div>
            <p className='text-gray-400'>Back to item request</p>
            <h2 className='text-3xl font-semibold'>#{productData?.id}</h2>
          </div>
        </div>
        <div className='flex items-center gap-4'>
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
      <div className='mt-6 flex items-start gap-4'>
        <div className='w-3/4'>
          <div className='w-full border rounded-lg'>
            <h5 className='font-semibold p-5 text-xl'>Request Items</h5>
            <div className='w-full p-5 flex items-center gap-2'>
              <SearchField
                placeholder={'Search'}
                icon={internet}
                flexOne={true}
                searchValue={productData?.fullProductLink}
                fieldStyle='input-field-dd py-3 w-full'
              />
              <button className='btn border p-3'>GO</button>
            </div>
            <div className='p-5 flex items-center gap-4'>
              <h6 className='font-semibold'>Quantity</h6>
              <Counter fieldStyle='input-field-dd w-[8rem] py-4 px-2' />
            </div>
            <div className='p-5'>
              <h6 className='font-semibold'>Product images</h6>
              <div className='my-4 flex gap-2 overflow-x-auto no-scrollbar'>
                {
                  previewImage.map((img, i) => <div
                    key={i}
                    className='relative flex  overflow-x-auto no-scrollbar'
                  >
                    <img
                      src={img}
                      className='w-32 h-full rounded-2xl'
                    />
                    <button
                      className='btn-accent px-2  rounded-full absolute top-0 right-0'
                      onClick={() => handleDelete(i)}
                    >
                      X
                    </button>
                  </div>)
                }
                <label
                  htmlFor='file'
                  className='w-52 cursor-pointer border flex flex-col items-center py-6 px-4 rounded-2xl text-center'
                >
                  <img src={upload} alt='upload' />
                  <p>Drop you image here, <br /> or <span className='text-[#3E949A]'>browser</span> </p>
                  <p>Supports JPG, PNG</p>
                </label>
                <input
                  type='file'
                  name='file'
                  id='file'
                  onChange={handleFile}
                  className='hidden'
                />
              </div>
            </div>
            <div className='border-t p-5'>
              <h6 className='flex items-end justify-between'>
                <span className='font-semibold'>Note</span>
                <span className='text-accent'>Edit</span>
              </h6>
              <p className='text-gray-400 mt-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div className='mt-4 w-full border rounded-lg'>
            <h5 className='font-semibold p-5 text-xl'>Payment</h5>
            <div className='px-5 pb-5 flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <p className='text-gray-500'>Seller Takes</p>
                <input
                  type='number'
                  onChange={(e) => setTotalPrice({ value1: e.target.value })}
                  // onChange={(e) => totalPrice.value1 = e.target.value}
                  className='input-field-dd p-2 w-1/4 text-end font-semibold'
                />
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-gray-500'>US Sales Tax</p>
                <input
                  type='number'
                  onChange={(e) => setTotalPrice({ value2: e.target.value })}
                  // onChange={(e) => totalPrice.value2 = e.target.value}
                  className='input-field-dd p-2 w-1/4 text-end font-semibold'
                />
              </div>
              <div className='flex items-center justify-between'>
                <p className='text-gray-500'>Packers Fee</p>
                <input
                  type='number'
                  onChange={(e) => setTotalPrice({ value3: e.target.value })}
                  // onChange={(e) => totalPrice.value3 = e.target.value}
                  className='input-field-dd p-2 w-1/4 text-end font-semibold'
                />
              </div>
              <div className='flex items-center justify-between font-semibold'>
                <p>Total</p>
                <span className='py-2'>$ {total || 0}</span>
              </div>
            </div>
            <div className='border-t p-5 flex items-end gap-2 justify-end'>
              <button className='btn px-4 py-2 border'>Cancel</button>
              <button className='btn px-4 py-2 bg-secondary'>Send Invoice</button>
            </div>
          </div>
        </div>

        <div className='w-1/4 border rounded-lg'>
          <div className='p-5 flex flex-col gap-5 border-b'>
            <div className='flex items-center justify-between'>
              <h4 className='font-semibold'>Customer</h4>
              <img src={cancel} alt="cancel" />
            </div>
            <h5>{productData?.customer?.name}</h5>
          </div>
          <div className='p-5 flex flex-col gap-5 border-b'>
            <div className='flex items-center justify-between'>
              <h5 className='text-accent'>{productData?.customer?.email}</h5>
              <CopyButton textToCopy={productData?.customer?.email} />
            </div>
            <h5>{productData?.customer?.phone}</h5>
          </div>
          <div className='p-5 flex flex-col gap-5 border-b'>
            <div className='flex items-center justify-between'>
              <h4 className='font-semibold'>Shipping Address</h4>
              <p className='text-accent'>Edit</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5>{productData?.customer?.shippingAddress}</h5>
            </div>
          </div>
          <div className='p-5 flex flex-col gap-5 border-b'>
            <div className='flex items-center justify-between'>
              <h4 className='font-semibold'>Billing Address</h4>
              <p className='text-accent'>Edit</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5>{productData?.customer?.billingAddress}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItemRequest;
