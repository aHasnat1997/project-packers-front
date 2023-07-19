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
                className='border rounded-xl cursor-pointer duration-200 active:scale-75'
                src={imgSrc} alt="product image"
            />
        );
    };

    return (
        // to-do: responsive 
        <div className='w-full flex gap-4'>
            <aside className='w-1/4 flex flex-col gap-4'>
                {imgFn(img1)}
                {imgFn(img2)}
                {imgFn(img3)}
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
