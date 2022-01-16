import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {StyledCol, StyledRow} from '../pages/style';
import zipcodes from '../_helpers/zipcodes.json';
import {Button, Form, Input, Select, notification} from 'antd';
import {auth, database} from '../firebase';
import {ref, set, push} from 'firebase/database';
import PageLoading from '../UI/PageLoading';

const {Option} = Select;

const AddAdForm = () => {
  const [userData, userLoading, error] = useAuthState(auth);
  const [form] = Form.useForm();
  const history = useHistory();
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async ({title, description, tasks, city}) => {
    setLoading(true);
    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'ehrenamtboerse');
    data.append('cloud_name', 'dceod0qel');

    try {
      const uploadData = await fetch(
        '  https://api.cloudinary.com/v1_1/dceod0qel/image/upload',
        {
          method: 'post',
          body: data,
        }
      ).then((r) => r.json());

      if (!uploadData?.secure_url)
        throw Error('The image couldnt be uploaded!!');
      const idRef = ref(database, 'ads');
      const newIdRef = push(idRef);
      //console.log(newIdRef.key); it is unique key for realtime database

      set(newIdRef, {
        title: title,
        description: description,
        tasks: tasks,
        city: city,
        date: Date(),
        imageUrl: uploadData?.secure_url,
        id: newIdRef.key,
        uid: userData.uid,
      });
      history.push('/');
      setLoading(false);
    } catch (err) {
      notification.error({
        message: 'Error',
        description: err.message,
        placement: 'topRight',
      });
      setLoading(false);
    }
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

  // const fileUpload = (event) => {
  //   setPicture(event?.target?.files[0]);
  // };

  const handleFiles = (e) => {
    setImageFile(e.target.files[0]);
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

          <Form.Item name='picture' label='Picture'>
            <input type='file' accept='image/*' onChange={handleFiles} />
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
      <PageLoading loading={loading} />
    </StyledRow>
  );
};

export default AddAdForm;
