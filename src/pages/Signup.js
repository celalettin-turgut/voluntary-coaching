import React, {useEffect, useState} from 'react';
import {Form, Input, Checkbox, Button, notification} from 'antd';
import {Link} from 'react-router-dom';
import PageLoading from '@UI/PageLoading';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, database} from '../firebase';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {ref, set} from 'firebase/database';
import {StyledCol, StyledRow} from './style';

const Signup = ({history}) => {
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async ({name, email, password}) => {
    setPageLoading(true);
    if (form.validateFields) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        if (user.accessToken) {
          await updateProfile(auth.currentUser, {
            displayName: name,
          });

          set(ref(database, 'users/' + user.uid), {
            displayName: name,
            email,
            profile_picture: 'httpLinkToProfilePicture',
          });

          notification.success({
            message: 'New Account',
            description: 'The account created successfully!',
            placement: 'topRight',
          });
          history.push('/');
          setPageLoading(false);
        }
      } catch (err) {

        notification.error({
          message: 'Error',
          description: err.message,
          placement: 'topRight',
        });
        setPageLoading(false);
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('valid', form.validateFields);
  };

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
  }, [loading]);

  return (
    <React.Fragment>
      <StyledRow>
        <StyledCol
          xs={{span: 24}}
          sm={{span: 24}}
          md={{span: 16, offset: 4}}
          lg={{span: 8, offset: 0}}
        >
          <h1 style={{textAlign: 'center'}}>SIGN UP</h1>
          <Form
            name='basic'
            form={form}
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              labelCol={{span: 24}}
              label='Name'
              name='name'
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{span: 24}}
              validateTrigger='onBlur'
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                {
                  type: 'email',
                  message: 'The input is not valid E-Mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              labelCol={{span: 24}}
              label='Password'
              name='password'
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='remember'
              valuePropName='checked'
              //wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item style={{marginBottom: '0'}}>
              <div>
                <p>
                  Already member? <Link to='/signin'>Sign In</Link>
                </p>
              </div>
            </Form.Item>

            <Form.Item
            //</Form>wrapperCol={{ offset: 8, span: 16 }}
            >
              <Button type='primary' htmlType='submit'>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </StyledCol>
      </StyledRow>
      <PageLoading loading={pageLoading} />
    </React.Fragment>
  );
};

export default Signup;
