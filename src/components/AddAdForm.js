import React, {useState} from 'react';
import {StyledCol} from './style';
import {Row, Modal, Button, Form, Input} from 'antd';
import {auth, database} from '../firebase';
import {ref, set} from 'firebase/database';

const AddAdForm = () => {
  const [form] = Form.useForm();

  const onFinish = ({title, postCode}) => {
    set(ref(database, 'ads/' + postCode), {
      title: title,
      postCode: postCode,
    });
  };

  return (
    <Row>
      <StyledCol>
        <Form autoComplete='off' form={form} onFinish={onFinish}>
          <Form.Item name='title' label='Title'>
            <Input />
          </Form.Item>
          <Form.Item name='postCode' label='PostCode'>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit'>Onay</Button>
          </Form.Item>
        </Form>
      </StyledCol>
    </Row>
  );
};

export default AddAdForm;
