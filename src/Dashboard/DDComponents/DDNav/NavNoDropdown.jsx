import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Nav without dropdown
 * @param {Object} list Array of Object with Nav data 
 * @returns Nav component
 */

const NavNoDropdown = ({ list }) => {
  return (
    <div className='w-full flex items-center gap-2'>
      <NavLink
        to={list.to}
        end={list.end && true}
        className={({ isActive }) => isActive ? 'bg-secondary w-2 h-10 rounded-full' : 'w-2 h-10 rounded-full'}
      />
      <NavLink
        to={list.to}
        end={list.end && true}
        className={({ isActive }) => isActive ? 'bg-primary text-white w-full rounded-lg px-2' : 'w-full px-2'}
      >
        <div className='flex items-center gap-2 py-2'>
          <img src={list.icon} alt={list.icon} />
          <p>{list.title}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavNoDropdown;
