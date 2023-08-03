import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../../assets/icon/cd-arrow-right-2.svg';

/**
 * Nav with dropdown
 * @param {Object} list Array of Object with Nav data 
 * @returns Dropdown Nav component
 */

const NavDropdown = ({ list = Object }) => {
  // console.log(list);
  return (
    <>
      <div className='flex items-center justify-between w-full px-6'>
        <div className='flex items-center gap-2 py-2'>
          <img src={list.icon} alt={list.icon} />
          <p>{list.title}</p>
        </div>
        <img src={arrow} alt="arrow" />
      </div>
      <ul className='flex flex-col'>
        {
          list.isDropdown.map(drop => <li
            key={drop.id}
            className='w-full flex items-center gap-2'
          >
            <NavLink
              to={drop.to}
              end={drop.end && true}
              className={({ isActive }) => isActive ? 'bg-secondary w-2 h-10 rounded-full' : 'w-2 h-10 rounded-full'}
            />
            <NavLink
              to={drop.to}
              end={drop.end && true}
              className={({ isActive }) => isActive ? 'bg-primary text-white w-full rounded-lg px-10' : 'w-full px-10'}
            >
              <p className='py-2'>{drop.title}</p>
            </NavLink>
          </li>)
        }
      </ul>
    </>
  );
};

export default NavDropdown;
