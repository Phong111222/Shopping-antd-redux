import React from 'react';
import Item from './Item/';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';

const ListItems = () => {
  const { ProductsReducer } = useSelector((state) => state);
  const { listProduct, filterList } = ProductsReducer;
  return (
    <div
      className='List_Items'
      style={{ background: '#F5F5F5', paddingBottom: 30 }}
    >
      <div className='container'>
        <Row gutter={{ lg: 50 }}>
          {filterList.length
            ? filterList.map((item) => (
                <Col key={item.id} style={{ marginTop: 25 }}>
                  <Item item={item} />
                </Col>
              ))
            : listProduct.map((item) => (
                <Col key={item.id} style={{ marginTop: 25 }}>
                  <Item item={item} />
                </Col>
              ))}
        </Row>
      </div>
    </div>
  );
};

export default ListItems;
