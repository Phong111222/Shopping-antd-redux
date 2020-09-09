import React from 'react';
import SearchForm from './SearchForm';
import Cart from './Cart';
import Logo from './Logo';
const Header = () => {
  return (
    <div className='SearchForm'>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0 20px 0',
        }}
      >
        <Logo />
        <SearchForm />
        <Cart />
      </div>
    </div>
  );
};
export default Header;
