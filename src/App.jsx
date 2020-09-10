import React from 'react';
import 'antd/dist/antd.css';
import { Header, ListItems } from './components/';
import Footer from './components/Footer';
const App = () => {
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
