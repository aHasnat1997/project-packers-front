import React, { useState } from 'react';
import img1 from '../../assets/Rectangle 1.png';
import img2 from '../../assets/product-2.png';
import img3 from '../../assets/product-3.png';

const ProductGallery = () => {
    const [presentImage, setPresentImage] = useState(img1);

    const imgFn = (imgSrc) => {
        return (
            <img
                onClick={() => setPresentImage(imgSrc)}
                className='border rounded-xl cursor-pointer duration-200 active:scale-75 w-full'
                src={imgSrc} alt="product image"
            />
        );
    };

    return (
        // to-do: make array for image
        <div className='w-full h-full flex gap-4'>
            <aside className='w-1/4 lg:h-full flex flex-col gap-4 overflow-auto no-scrollbar'>
                {imgFn(img1)}
                {imgFn(img2)}
                {imgFn(img3)}
                {imgFn(img1)}
                {imgFn(img2)}
                {imgFn(img3)}
            </aside>
            <aside className='w-full h-full flex-1'>
                <img
                    className='h-full w-full border rounded-xl'
                    src={presentImage} alt="product image"
                />
            </aside>
        </div>
    );
};

export default ProductGallery;
