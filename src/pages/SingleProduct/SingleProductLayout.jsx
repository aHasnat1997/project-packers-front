import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import { useTitle } from '../../Hooks/useTitle';
import Breadcrumb from '../../components/Breadcrumb';

const SingleProductLayout = () => {
    const product = {
        name: 'iConnect by Timex Active Smartwatch',
        description: [
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            'Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Exercitation veniam consequat sunt nostrud amet.'
        ]
    };
    const pageTitle = product.name
    useTitle(pageTitle);

    return (
        <>
            <Breadcrumb />
            <section className='section-div w-full h-full'>
                <div className='w-full lg:h-[70vh] flex flex-col lg:flex-row gap-8'>
                    <aside className='h-full lg:flex-1'>
                        <ProductGallery />
                    </aside>
                    <aside>
                        <ProductInfo />
                    </aside>
                </div>
                <div className='mt-12 grid lg:grid-cols-3'>
                    <div className='lg:col-span-2'>
                        <h3 className='text-2xl font-semibold'>
                            {
                                product.name
                            }
                        </h3>
                        <div className='mt-4 text-justify'>
                            {
                                product.description.map((paragraph, i) => (
                                    <p key={i} className='mt-2'>
                                        {
                                            paragraph
                                        }
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProductLayout;
