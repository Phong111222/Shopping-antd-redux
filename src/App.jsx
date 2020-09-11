import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Header, ListItems } from './components/';
import { loadProduct } from './store/reducer/Products';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Spin } from 'antd';
const App = () => {
  const dispatch = useDispatch();
  const {
    ProductsReducer: { loading },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadProduct());
  }, [loading]);
  return (
    <React.Fragment>
      <Header />

      <div style={{ paddingTop: 200 }}>
        {loading ? (
          <div className='flex j-center a-center' style={{ height: '70vh' }}>
            <Spin size='large' />
          </div>
        ) : (
          <ListItems />
        )}

        <Footer />
      </div>
    </React.Fragment>
  );
};
export default App;
