import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {StyledCol, StyledRow} from '../pages/style';
import zipcodes from '../_helpers/zipcodes.json';
import {Button, Form, Input, Select} from 'antd';
import {auth, database} from '../firebase';
import {ref, set, push} from 'firebase/database';

const {Option} = Select;

const AddAdForm = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [city, setCity] = useState('');

  const onFinish = ({title, description, tasks, city}) => {
    const idRef = ref(database, 'ads');
    const newIdRef = push(idRef);
    //console.log(newIdRef.key); it is unique key for realtime database

    set(newIdRef, {
      title: title,
      description: description,
      tasks: tasks,
      city: city,
      date: Date(),
      imageUrl: 'defaulUrlComesToHere',
      id: newIdRef.key,
    });
    history.push('/');
  };

  const validateMessages = {
    required: 'This field cannot be empty!',
    types: {
      email: '${label} is not a valid email!',
    },
    string: {
      min: '${label} must be minimum ${min} characters',
    },
  };

  return (
    <StyledRow style={{marginBottom: '30px'}}>
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
          validateMessages={validateMessages}
          validateTrigger='onBlur'
          scrollToFirstError='true'
        >
          <Form.Item
            name='title'
            label='Title: What is the goal of your project?'
            rules={[{required: true}, {min: 3}]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name='description'
            label='Description: What is supposed to do?'
            rules={[{required: true}, {min: 3}]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name='tasks'
            label='Tasks: What is your expectations from the volunteer? '
            rules={[{required: true}, {min: 3}]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item name='postCode' label='PostCode'>
            <Input value={zip} onChange={(e) => setZip(e.target.value)} />
          </Form.Item> */}

          <Form.Item name='city' label='City' rules={[{required: true}]}>
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
