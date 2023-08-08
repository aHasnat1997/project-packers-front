import React from 'react';
import { Outlet } from 'react-router-dom';
import DiscountProvider from '../../../context/DiscountProvider';

const DiscountLayout = () => {
  return (
    <section className='dd-section-div'>
      <DiscountProvider>
        <Outlet />
      </DiscountProvider>
    </section>
  );
};

export default DiscountLayout;
