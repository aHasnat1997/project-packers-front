import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../../assets/icon/cd-arrow-left-01.svg';
import { useForm } from 'react-hook-form';
import upload from '../../../assets/icon/cd-image-upload-primary-color.svg';
import { SearchField } from '../../../components/SearchField';
import internet from '../../../assets/icon/cd-internet-01.svg';
import { AllProductsContext } from '../../../context/AllProductsProvider';

const AddProduct = () => {
  const { productData } = useContext(AllProductsContext);
  const { id } = useParams();
  const productInfo = productData?.find(data => data?.id === id);
  // console.log(productInfo);

  const { register, handleSubmit, reset } = useForm();

  const [selectedImage, setSelectedImage] = useState();
  const [previewImage, setPreviewImage] = useState([]);

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

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className='pb-4 border-b flex items-center gap-2'>
        <Link to='/admin/products'>
          <img
            src={arrow}
            alt='arrow_left'
            className='btn border p-2 w-16'
          />
        </Link>
        <div>
          <p className='text-gray-400'>Back to product</p>
          <h2 className='text-3xl font-semibold'>{
            productInfo ? 'Update Product' : 'Add New Product'
          }</h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full mt-5 flex items-start justify-between gap-5'
      >
        <div className='w-full'>
          <div className='w-full'>
            <h5 className='font-semibold text-xl'>Description</h5>
            <div className='mt-5 border rounded-lg p-3'>
              <div>
                <label>Product name</label>
                <input
                  type='text'
                  {...register('productName')}
                  defaultValue={productInfo && productInfo?.productName}
                  className='input-field-dd w-full p-2'
                />
              </div>
              <div className='mt-3'>
                <label>Description</label>
                <textarea
                  {...register('description')}
                  className='input-field-dd w-full p-2'
                  rows='10'
                  defaultValue={productInfo && productInfo?.description}
                />
              </div>
            </div>
          </div>
          <div className='w-full mt-5'>
            <h5 className='font-semibold text-xl'>Category</h5>
            <div className='mt-5 border rounded-lg p-3'>
              <div>
                <label>Product Category</label>
                <input
                  type='text'
                  {...register('category')}
                  className='input-field-dd w-full p-2'
                  defaultValue={productInfo && productInfo?.category}
                />
              </div>
              <div className='my-3'>
                <label>Sub Category</label>
                <input
                  type='text'
                  {...register('subCategory')}
                  className='input-field-dd w-full p-2'
                  // defaultValue={productInfo && productInfo?.subCategory}
                />
              </div>
              <div>
                <label>Tags</label>
                <input
                  type='text'
                  {...register('tags')}
                  className='input-field-dd w-full p-2'
                  defaultValue={productInfo && productInfo?.tags.map(tag => tag)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div>
            <h5 className='font-semibold text-xl'>Product Images</h5>
            <div className='mt-5 border rounded-lg p-3'>
              <div className='my-4 flex gap-2 overflow-x-auto no-scrollbar'>
                <label
                  htmlFor='file'
                  className='w-40 cursor-pointer border flex flex-col items-center py-16 rounded-2xl text-center'
                >
                  <img src={upload} alt='upload' />
                  <p><span className='text-accent underline'>Click to Upload</span> <br /> or drag and drop </p>
                </label>
                <input
                  type='file'
                  name='file'
                  id='file'
                  onChange={handleFile}
                  className='hidden'
                />
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
              </div>
            </div>
          </div>
          <div className='w-full mt-5'>
            <h5 className='font-semibold text-xl'>Pricing</h5>
            <div className='mt-5 border rounded-lg p-3 flex items-center justify-between gap-5'>
              <div className='w-full'>
                <label>Price</label>
                <input
                  type='number'
                  {...register('price')}
                  className='input-field-dd w-full p-2'
                  defaultValue={productInfo && productInfo?.price}
                />
              </div>
              <div className='w-full'>
                <label>Compare at Price</label>
                <input
                  type='number'
                  {...register('comparePrice')}
                  className='input-field-dd w-full p-2'
                  defaultValue={productInfo && productInfo?.comparePrice}
                />
              </div>
            </div>
          </div>
          <div className='w-full mt-5'>
            <h5 className='font-semibold text-xl'>
              Product link (Only admin can show this link)
            </h5>
            <div className='mt-5 border rounded-lg p-3'>
              <SearchField
                icon={internet}
                fieldStyle='input-field-dd w-full p-2'
                placeholder='Search'
                flexOne={true}
              searchValue={productInfo && productInfo?.productLink}
              />
            </div>
          </div>
          <div className='mt-5 flex items-center justify-between'>
            <p className='btn px-4 py-2 cursor-pointer border'>Discard</p>
            <div className='flex items-center gap-5'>
              <p className='btn px-4 py-2 cursor-pointer border'>Draft</p>
              <input
                type='submit'
                value='Publish'
                className='btn px-4 py-2 bg-secondary'
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
