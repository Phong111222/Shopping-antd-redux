import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faTrash,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Select, InputNumber } from 'antd';
import './Cart.scss';
const Arr = [
  { key: 1, name: 'option 1', quantities: 1 },
  { key: 2, name: 'option 2', quantities: 3 },
  { key: 3, name: 'option 3', quantities: 5 },
  { key: 4, name: 'option 4', quantities: 6 },
  { key: 5, name: 'option 4', quantities: 6 },
  { key: 6, name: 'option 4', quantities: 6 },
  { key: 7, name: 'option 4', quantities: 6 },
];

const Cart = () => {
  return (
    <div
      className='Cart'
      style={{ display: 'flex', width: '25%', alignItems: 'center' }}
    >
      <div style={{ marginRight: 15 }}>
        <p>No. of items : 0</p>
        <p>Sub Total : 0</p>
      </div>
      <div className=''>
        <Select
          listItemHeight={5}
          listHeight={300}
          focus={false}
          defaultOpen={true}
          dropdownMatchSelectWidth='false'
          dropdownClassName='Selected_list'
          virtual={true}
          showArrow={false}
          menuItemSelectedIcon={<FontAwesomeIcon icon={faShoppingCart} />}
          size='large'
        >
          {Arr.map((item) => {
            return (
              <Select.Option key={item.key} disabled={true}>
                <div className='w-100 flex j-between'>
                  <p style={{ color: 'black' }}>{item.name}</p>
                  <InputNumber />
                  <Button>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </Select.Option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};
export default Cart;
