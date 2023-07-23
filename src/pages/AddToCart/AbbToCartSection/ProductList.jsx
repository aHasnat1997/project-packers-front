import React from 'react';

const ProductList = ({ productArray = Array }) => {

    return (
        <section className='w-full col-span-2'>
            <table className='w-full'>
                <thead className='text-primary font-semibold text-left border-b'>
                    <tr>
                        <th className='pb-3'>Product list</th>
                        <th className='pb-3'>Quantity</th>
                        <th className='pb-3 hidden lg:block'>Price</th>
                    </tr>
                </thead>
                {
                    productArray.map((product, i) => (
                        <tbody key={i}>
                            <tr className='border-b'>
                                <td className='py-3 pr-4 flex gap-4 items-center'>
                                    <img
                                        src={product.img}
                                        alt="product image"
                                        className='w-16'
                                    />
                                    <div>
                                        <h4>{product.title}</h4>
                                        <p className='font-semibold lg:hidden'>$ {product.price}</p>
                                    </div>

                                </td>
                                <td>
                                    <input
                                        className='border-2 text-[14px] w-20 py-2 text-center'
                                        type="text"
                                        maxLength={1}
                                        readOnly
                                        value={5}
                                    />
                                </td>
                                <td className='font-semibold invisible lg:visible'>
                                    $ {product.price}
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
            <div className='mt-6 flex justify-between items-center'>
                <div>
                    <input
                        type="text"
                        className='input-field py-3 px-5'
                        placeholder='Discount code'
                    />
                    <button className='bg-[#CFF6EF] font-bold rounded-full py-3 px-5 bg-opacity-50 ml-2 duration-200 active:scale-[.90]'>
                        Apply
                    </button>
                </div>
                <button className='bg-slate-200 font-bold rounded-full py-3 px-5 bg-opacity-50 ml-2 duration-200 active:scale-[.90] hidden lg:block'>
                    Update cart
                </button>
            </div>
        </section>
    );
};

export default ProductList;
