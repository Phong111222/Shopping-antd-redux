import React from 'react';

import { Form, Input, Button } from 'antd';

const SearchForm = () => {
  return (
    <div className='ant-form-control' style={{ width: '45%', marginLeft: 25 }}>
      <Form style={{ display: 'flex', width: '100%', padding: 20 }}>
        <Input placeholder='SEARCH FORM ...' style={{ height: 45 }} />
        <Button type='primary' style={{ height: 45 }}>
          {' '}
          SEARCH
        </Button>
      </Form>
    </div>
  );
};
export default SearchForm;
