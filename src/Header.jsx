// Header.js
import React from 'react';
import logo from './shop.png'
import cart from './shopping-cart.png'
import admin from './Admin.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex justify-around px-4 py-2 shadow-md'> 
    {/* fixed w-full transition-all */}
      <div>
        <img src={logo} alt="image" width={100} />
      </div>
      <div className='flex  gap-[50px] mt-3 ml-[15%]'>
        <ul className='flex gap-[50px] font-bold'>
          <Link to="/"><li className='mt-2'>Home</li></Link>
          <Link to="/Login"><li className='border-2 rounded-xl py-[6px] px-[9px]'>Login</li></Link>
        </ul>

        <img className='h-[33px]' src={cart} alt="" width='30px'/>
        <img className='h-[35px]' src={admin} alt="" width='30px'/>
      </div>
    </div>
    
  );
};

export default Header;
