import React, { useState } from 'react';
import { Button, InputNumber, Modal } from 'antd';
import './item.scss';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../../store/reducer/Cart';
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { name, price, image } = item;
  const handleAddToCart = (e) => {
    const quantities = parseInt(document.getElementById(`${name}`).value);
    dispatch(AddToCart({ name, quantities, price }));
  };
  return (
    <React.Fragment>
      <div
        className='Product_item '
        style={{ cursor: 'pointer', background: 'white' }}
      >
        <div className='product_img'>
          <img
            onClick={() => setVisible(true)}
            style={{ width: 200 }}
            src={image}
            alt=''
          />
        </div>

        <div
          onClick={() => setVisible(true)}
          className='flex a-center j-center'
        >
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
      <Modal
        centered
        visible={visible}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <div className='flex j-center'>
          <div>
            <img style={{ width: 300 }} src={image} alt='' />
            <p
              className='t-center'
              style={{ fontWeight: 'bold', fontSize: 30 }}
            >{`$${price}`}</p>
            <p className='t-center' style={{ fontSize: 20 }}>
              {name}
            </p>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Item;
