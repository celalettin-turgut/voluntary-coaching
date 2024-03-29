import React, {useEffect, useState} from 'react';
import {Row, Button, Form, Input, Checkbox, notification} from 'antd';
import {StyledCol} from './style';
import {Link} from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import PageLoading from '../UI/PageLoading';

const Signin = ({history}) => {
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = ({email, password}) => {
    setPageLoading(true);
    if (form.validateFields) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          history.push('/');
          notification.success({
            message: 'Sign in',
            description: 'Signed in successfully!',
            placement: 'topRight',
          });
        })
        .catch((err) => {

          notification.error({
            message: 'Error',
            description: err.message,
            placement: 'topRight',
          });
        })
        .finally(() => setPageLoading(false));
    }
  };

  useEffect(() => {
    if (loading) {
      return <h1>Loading..</h1>;
    }
  }, [loading]);

  const onFinishFailed = (errorInfo) => {

  };

  const validateMessages = {
    required: `is required`,
  };
  return (
    <Row justify='center'>
      <StyledCol
        xs={{span: 24}}
        sm={{span: 24}}
        md={{span: 16, offset: 4}}
        lg={{span: 8, offset: 0}}
      >
        <h1 style={{textAlign: 'center'}}>SIGN IN</h1>
        <Form
          name='signin'
          initialValues={{remember: true}}
          onFinish={onFinish}
          validateMessages={validateMessages}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            labelCol={{span: 24}}
            validateTrigger='onBlur'
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                message: 'Please input a valid email!',
              },
              {
                required: true,
                message: 'Please provide an E-Mail!',
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
            style={{marginBottom: '0'}}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item style={{marginBottom: '0'}}>
            <div>
              <p>
                No Account? <Link to='/signup'>Sign Up</Link>
              </p>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </StyledCol>
      <PageLoading loading={pageLoading} />
    </Row>
  );
};

export default Signin;
