import React from 'react';
import SearchStyle from './style';
import {Col, Row, Form, Select, Button} from 'antd';
import zipcodes from '../../_helpers/zipcodes.json';

const Search = () => {
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <SearchStyle justify='center'>
      <Col span={24} className='main-content'>
        <h1 className='text-header'>Einfach Helfen </h1>
        <h2 className='text'>Finde jetzt dein Project</h2>
        <Row justify='center' className='search-container'>
          <Form
            onFinish={onSearch}
            size='large'
            wrapperCol={{span: 20}}
            layout='inline'
            name='horizontal_login'
          >
            <Form.Item name='city'>
              <Select
                placeholder='Select a city'
                showSearch
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
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
        </Row>
      </Col>
    </SearchStyle>
  );
};

export default Search;
