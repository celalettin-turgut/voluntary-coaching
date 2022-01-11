import React from 'react';
import SearchStyle from './style';
import {Col, Row, Form, Select, Button} from 'antd';
import zipcodes from '../../_helpers/zipcodes.json';
import {auth, database} from '../../firebase';
import {ref, set, onValue} from 'firebase/database';

const Search = ({projects, handleChange}) => {
  const onSearch = ({city}) => {
    console.log(city);
    const starCountRef = ref(database, 'ads');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      const arr = Object.values(data);
      console.log(arr);
      const myArr = arr.filter((project) => project.city === city);
      handleChange(myArr);
    });
  };
  return (
    <SearchStyle justify='center'>
      <Col span={24} className='main-content'>
        <h1 className='text-header'>Sharing is Caring </h1>
        <h2 className='text'>Find Your Project</h2>
        <Row justify='center' className='search-container'>
          <Col span={20} offset={2}>
            <Form
              onFinish={onSearch}
              size='large'
              layout='inline'
              name='horizontal_login'
            >
              <Form.Item name='city'>
                <Select
                  placeholder='Select a city'
                  showSearch
                  optionFilterProp='children'
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
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
        </Row>
      </Col>
    </SearchStyle>
  );
};

export default Search;
