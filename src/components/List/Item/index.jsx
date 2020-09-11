import React from 'react';
import { Button, InputNumber } from 'antd';
import './item.scss';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../store/reducer/Cart';
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, image } = item;
  const handleAddToCart = (e) => {
    // console.log(name);
    const quantities = parseInt(document.getElementById(`${name}`).value);
    dispatch(AddToCart({ name, quantities, price }));
  };
  return (
    <div
      className='Product_item '
      style={{ cursor: 'pointer', background: 'white' }}
    >
      <div className='product_img'>
        <img style={{ width: 200 }} src={image} alt='' />
      </div>

      <div className='flex a-center j-center'>
        <div>
          <h3>{name}</h3>
          <h2 className='t-center'>{`$${price}`}</h2>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InputNumber
          id={`${name}`}
          min={1}
          defaultValue={1}
          style={{ paddingLeft: 25, width: 80 }}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Button
          onClick={(e) => handleAddToCart(e)}
          style={{
            width: '100%',
            height: 50,
            background: '#F9971F',
            borderColor: '#F9971F',
          }}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default Item;
