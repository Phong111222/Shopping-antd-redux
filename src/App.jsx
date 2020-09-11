import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Header, ListItems } from './components/';
import { loadProduct } from './store/reducer/Products';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Header />
      <div style={{ paddingTop: 200 }}>
        <ListItems />
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default App;
