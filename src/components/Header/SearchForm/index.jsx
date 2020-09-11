import React, { useState, useEffect } from 'react';
import { searchProduct } from '../../../store/reducer/Products';
import { Form, Input, Button } from 'antd';
import './searchForm.scss';
import { useDispatch } from 'react-redux';
const SearchForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    dispatch(searchProduct({ input }));
  }, [input, dispatch]);

  return (
    <div className='ant-form-control' style={{ width: '45%', marginLeft: 25 }}>
      <Form style={{ display: 'flex', width: '100%', padding: 20 }}>
        <Input
          placeholder='SEARCH FORM ...'
          style={{ height: 45 }}
          value={input}
          onChange={handleChange}
        />
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
