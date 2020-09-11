import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Input } from 'antd';

import { useDispatch } from 'react-redux';
import {
  RemoveItem,
  DecQuantities,
  IncQuantities,
} from '../../../../store/reducer/Cart';

const CartItem = ({ item }) => {
  const { name, quantities, price } = item;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(RemoveItem({ name, price, quantities }));
  };
  const handleIncreament = () => {
    // setValue(value + 1);
    dispatch(IncQuantities({ name, price }));
  };
  const handleDecreament = () => {
    if (quantities === 1) return;
    dispatch(DecQuantities({ name, price }));
  };

  return (
    <div className='w-100 flex j-between a-baseline'>
      <p style={{ color: 'black', width: '30%' }}>{name}</p>
      <div style={{ width: '40%' }}>
        <Input
          style={{ width: '50%' }}
          value={quantities}
          onChange={(handleIncreament, handleDecreament)}
        />

        <Button onClick={handleIncreament}>+</Button>
        <Button onClick={handleDecreament}>-</Button>
      </div>
      <Button onClick={handleRemove} style={{ width: '10%' }}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};

export default CartItem;
