import React from 'react';

export default function Navbar() {
  return (
      <div className="w-full bg-pink-600 text-white px-20 ">
        <nav className='flex justify-between items-center h-[50px]'>
            <div className="logo font-bold text-2xl">
              Myntra
            </div>
            <ul className='menu flex'>
              <li >Men</li>
              <li >Women</li>
              <li>Kids</li>
            </ul>
            <div className="auth flex items-center">
              <button className='btn btn-secondary mx-2'>Login</button>
              <button className='btn btn-secondary mx-2'>Sign up</button>
            </div>
        </nav>
      </div>
  );
}
