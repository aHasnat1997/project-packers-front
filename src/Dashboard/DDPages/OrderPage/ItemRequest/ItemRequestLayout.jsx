import React from 'react';
import AllRequestProductProvider from '../../../../context/AllRequestProductProvider';
import { Outlet } from 'react-router-dom';

const ItemRequestLayout = () => {
  return (
    <section className='dd-section-div'>
      <AllRequestProductProvider>
        <Outlet />
      </AllRequestProductProvider>
    </section>
  );
};

export default ItemRequestLayout;
