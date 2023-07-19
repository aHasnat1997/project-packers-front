import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';

const SingleProductLayout = () => {
    return (
        <section className='section-div w-full'>
            <div className='min-w-max flex flex-col lg:flex-row justify-between gap-8'>
                <aside className='flex-1'>
                    <ProductGallery />
                </aside>
                <aside>
                    <ProductInfo />
                </aside>
            </div>
            {/* to-do: width */}
            <div className='mt-12'>
                <h3 className='text-2xl font-semibold'>iPad Air 64Gb Wi-Fi Space Gray</h3>
                <p className='mt-4'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. <br /> <br />

                    Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
        </section>
    );
};

export default SingleProductLayout;
