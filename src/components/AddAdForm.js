import React, {useState, useEffect} from 'react';
import {StyledCol, StyledRow} from './style';
import zipcodes from '../_helpers/zipcodes.json';
import {Button, Form, Input, Select} from 'antd';
import {auth, database} from '../firebase';
import {ref, set} from 'firebase/database';

const {Option} = Select;

const AddAdForm = () => {
  const [form] = Form.useForm();
  const [city, setCity] = useState('');
  console.log(city);

  const onFinish = ({title, description, tasks, city}) => {
    console.log(city);
    set(ref(database, 'ads/' + new Date().getTime()), {
      title: title,
      description: description,
      tasks: tasks,
      city: city,
    });
  };

  return (
    <StyledRow>
      <StyledCol
        xs={{span: 23}}
        sm={{span: 23}}
        md={{span: 16, offset: 0}}
        lg={{span: 12, offset: 0}}
      >
        <h2>Create Your Project</h2>
        <Form
          labelCol={{span: 24}}
          autoComplete='off'
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name='title'
            label='Title: What is the goal of your project?'
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='description'
            label='Description: What is supposed to do?'
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name='tasks'
            label='Tasks: What is your expectations from the volunteer? '
          >
            <Input />
          </Form.Item>

          {/* <Form.Item name='postCode' label='PostCode'>
            <Input value={zip} onChange={(e) => setZip(e.target.value)} />
          </Form.Item> */}

          <Form.Item name='city' label='City'>
            <Select
              showSearch
              optionFilterProp='children'
              //onChange={onChange}
              //onFocus={onFocus}
              //onBlur={onBlur}
              //onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {zipcodes.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type='link' htmlType='button'>
              Cancel
            </Button>
            <Button type='primary' htmlType='submit'>
              Create
            </Button>
          </Form.Item>
        </Form>
      </StyledCol>
    </StyledRow>
  );
};

export default AddAdForm;
