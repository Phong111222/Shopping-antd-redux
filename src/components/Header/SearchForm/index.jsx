import React from 'react';

import { Form, Input, Button } from 'antd';
import './searchForm.scss';
const SearchForm = () => {
  return (
    <div className='ant-form-control' style={{ width: '45%', marginLeft: 25 }}>
      <Form style={{ display: 'flex', width: '100%', padding: 20 }}>
        <Input placeholder='SEARCH FORM ...' style={{ height: 45 }} />
        <Button
          style={{ height: 45, background: '#F9971F', borderColor: '#F9971F' }}
        >
          SEARCH
        </Button>
      </Form>
    </div>
  );
};
export default SearchForm;
