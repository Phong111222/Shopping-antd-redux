import React from 'react';
import SearchForm from './SearchForm';
import Cart from './Cart';
import Logo from './Logo';
import { useSelector } from 'react-redux';
const Header = () => {
  const { CartReducer } = useSelector((state) => state);

  return (
    <div
      className='Header'
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 2,
        top: 0,
        background: 'white',
      }}
    >
      <div
        className='container flex j-center a-center '
        style={{ paddingTop: 20 }}
      >
        <Logo />
        <SearchForm />
        <Cart Cart={CartReducer} />
      </div>
    </div>
  );
};
export default Header;
