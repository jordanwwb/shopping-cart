import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {

  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className='bg-black'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src={`${process.env.PUBLIC_URL}/home-icon.png`} alt="Home Icon" />
          </a>
        </div>
        <div className='content-center lg:flex lg:gap-x-12'>
          <a href='/' className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Home
          </a>
          <a href='/Cart' className="flex items-center text-sm font-semibold leading-6 text-white hover:text-gray-300">
            <FaShoppingCart className="w-6 h-6 mr-2" />
            <span className="mr-2">{totalItems} {totalItems == 0 ? 'item' : 'items'}</span>
          </a>
        </div>
        {/* 
        QUESTION TO MYSELF: DO I NEED A LOGIN??  
        */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
