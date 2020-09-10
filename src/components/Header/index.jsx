import React from 'react';
import SearchForm from './SearchForm';
import Cart from './Cart';
import Logo from './Logo';
const Header = () => {
  return (
    <div
      className='Header'
      style={{ position: 'fixed', width: '100%', zIndex: 2, top: 0 }}
    >
      <div className='container flex j-center a-center py-20'>
        <Logo />
        <SearchForm />
        <Cart />
      </div>
    </div>
  );
};
export default Header;
