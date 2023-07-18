import React, { useState } from 'react';
import img1 from '../../assets/Rectangle 1.png';
import img2 from '../../assets/product-2.png';
import img3 from '../../assets/product-3.png';

const ProductGallery = () => {
    const [presentImage, setPresentImage] = useState(img1);

    return (
        <div className='w-full flex gap-4'>
            <aside className='w-1/4 flex flex-col gap-4'>
                <img
                    onClick={()=>setPresentImage(img1)}
                    className='border rounded-xl cursor-pointer duration-200 active:scale-75'
                    src={img1} alt="product image"
                />
                <img
                    onClick={()=>setPresentImage(img2)}
                    className='border rounded-xl cursor-pointer duration-200 active:scale-75'
                    src={img2} alt="product image"
                />
                <img
                    onClick={()=>setPresentImage(img3)}
                    className='border rounded-xl cursor-pointer duration-200 active:scale-75'
                    src={img3} alt="product image"
                />
            </aside>
            <aside className='flex-1 w-full'>
                <img
                    className='w-full h-full border rounded-xl'
                    src={presentImage} alt="product image"
                />
            </aside>
        </div>
    );
};

export default ProductGallery;
