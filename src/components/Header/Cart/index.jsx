import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Select } from 'antd';

import './Cart.scss';
import CartItem from './CartItem/CartItem';

const Cart = ({ Cart }) => {
  const { selectedtList, TotalAmount } = Cart;

  return (
    <div
      className='Cart flex j-end'
      style={{
        width: '25%',
      }}
    >
      <div className=''>
        <Select
          listItemHeight={5}
          listHeight={300}
          dropdownMatchSelectWidth='false'
          dropdownClassName='Selected_list'
          virtual={true}
          showArrow={false}
          menuItemSelectedIcon={<FontAwesomeIcon icon={faShoppingCart} />}
          size='large'
        >
          {selectedtList.length &&
            selectedtList.map((item) => {
              return (
                <Select.Option disabled={true} key={item.name}>
                  <CartItem item={item} />
                </Select.Option>
              );
            })}
        </Select>
      </div>
      <div style={{ marginLeft: 15 }}>
        <p style={{ marginBottom: 0 }}>No. of items : {selectedtList.length}</p>
        <p style={{ marginBottom: 0 }}>Sub Total : {TotalAmount}</p>
      </div>
    </div>
  );
};
export default Cart;
