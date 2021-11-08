import React, {useEffect} from 'react';
import {Row, Button, Form, Input, Checkbox, notification} from 'antd';
import {StyledCol} from './style';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';

const Signin = ({history}) => {
  const [user, loading, error] = useAuthState(auth);
  const [form] = Form.useForm();

  const onFinish = ({email, password}) => {
    if (form.validateFields) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          notification.success({
            message: 'Sign in',
            description: 'Signed in successfully!',
            placement: 'topRight',
          });
        })
        .catch((err) => {
          console.log(err.message);

          notification.error({
            message: 'Error',
            description: err.message,
            placement: 'topRight',
          });
        });
    }
  };

  useEffect(() => {
    if (loading) {
      return <h1>Loading..</h1>;
    }
    if (user) {
      history.push('/dashboard');
    }
  }, [loading, user, history]);

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  const validateMessages = {
    required: `is required`,
  };
  return (
    <React.Fragment>
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

            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </StyledCol>
      </Row>
    </React.Fragment>
  );
};

export default Signin;
