import React, { useState } from 'react';
import img1 from '../../assets/Rectangle 1.png';
import img2 from '../../assets/product-2.png';
import img3 from '../../assets/product-3.png';

const ProductGallery = () => {
    const [presentImage, setPresentImage] = useState(img1);

    const imgFn = (imgSrc) => <img
        onClick={() => setPresentImage(imgSrc)}
        className='border rounded-xl cursor-pointer duration-200 active:scale-75 w-full'
        src={imgSrc} alt="product image"
    />;

    const imgSrc = [img1, img2, img3, img1, img2, img3]

    return (
        <div className='w-full h-[50vh] lg:h-full flex gap-4'>
            <aside className='w-1/4 h-full flex flex-col gap-4 overflow-auto no-scrollbar'>
                {
                    imgSrc.map(src => imgFn(src))
                }
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
