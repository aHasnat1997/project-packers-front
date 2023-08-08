import React from 'react';
import { Outlet } from 'react-router-dom';

const CategoryLayout = () => {
  return (
    <section className='dd-section-div'>
      <Outlet />
    </section>
  );
};

export default CategoryLayout;
