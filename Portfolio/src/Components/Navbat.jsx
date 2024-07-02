import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Link} from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-transparent backdrop-blur-md fixed px-4'>
      <div>
        <h1 className='text-3xl md:text-4xl font-signature ml-2'>Atif</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize text-gray-500 font-medium hover:scale-105 duration-200'
          >
            <Link to={link} smooth duration={500}>  {link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col items-center justify-center left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 absolute top-0'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-2xl' // Smaller text size for the mobile menu
            >
            <Link onClick={()=> (setNav(!nav))} to={link} smooth duration={500}> {link}</Link>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
