import React from 'react';
import Cart from '../../components/Cart';
import image from '../../assets/Rectangle 1.png';

const AllProducts = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3'>
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
                <Cart img={image} title='iConnect by Timex Active Smartwatch' price='28.95' />
            </div>
            <div>
                
            </div>
        </>
    );
};

export default AllProducts;
