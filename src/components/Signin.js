import React, { useEffect } from "react";
import { Row, Button, Form, Input, Checkbox } from "antd";
import { StyledCol } from "./style";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signIn } from "../firebase";

const Signin = () => {
  const history = useHistory();
  const [user, loading, error] = useAuthState(auth);

  const onFinish = ({ email, password }) => {
    signIn(email, password);
  };

  useEffect(() => {
    if (loading) {
      return <h1>Loading..</h1>;
    }
    if (user) {
      history.push("/dashboard");
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
      <Row justify="center">
        <StyledCol
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 8, offset: 0 }}
        >
          <h1 style={{ textAlign: "center" }}>SIGN IN</h1>
          <Form
            name="signin"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            validateMessages={validateMessages}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              labelCol={{ span: 24 }}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input a valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
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
