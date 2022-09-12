import React from 'react';
import SearchStyle from './style';
import {Col, Row, Form, Select, Button} from 'antd';
import zipcodes from '../../_helpers/zipcodes.json';
import {auth, database} from '../../firebase';
import {ref, set, onValue} from 'firebase/database';

const Search = ({projects, handleChange}) => {
  const onSearch = ({city}) => {
  
    const starCountRef = ref(database, 'ads');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().city == city) {
          handleChange((prev) => [...prev, child.val()]);
        }
      });
      // const data = snapshot.val();
      // const arr = Object.values(data);
      // const myArr = arr.filter((project) => project.city === city);
      // handleChange(myArr);
    });
  };
  return (
    <SearchStyle>
      <Col span={14} offset={5} className='main-content'>
        <h1 className='text-header'>Sharing is Caring </h1>
        <h2 className='text'>Find Your Project</h2>

        <Form
          style={{display: 'flex', justifyContent: 'center'}}
          onFinish={onSearch}
          size='large'
          layout='inline'
          name='horizontal_login'
        >
          <Form.Item style={{marginBottom: '15px'}} name='city'>
            <Select
              style={{width: '400px'}}
              showSearch
              placeholder='Select a city'
              optionFilterProp='children'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {zipcodes.map((city) => {
                return (
                  <Select.Option key={city} value={city}>
                    {city}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit'>Search</Button>
          </Form.Item>
        </Form>
      </Col>
    </SearchStyle>
  );
};

export default Search;
