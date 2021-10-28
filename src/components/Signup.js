import React, { useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, register } from "../firebase";
import { StyledCol, StyledRow } from "./style";

const Signup = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const onFinish = ({ name, email, password }) => {
    console.log("Merhaba");
    register(name, email, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  useEffect(() => {
    if (loading) return <p>Loading...</p>;
    if (user) {
      history.replace("/dashboard");
    }
  }, [user, loading]);
  return (
    <React.Fragment>
      <StyledRow>
        <StyledCol
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 16, offset: 4 }}
          lg={{ span: 8, offset: 0 }}
        >
          <h1 style={{ textAlign: "center" }}>SIGN UP</h1>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              labelCol={{ span: 24 }}
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
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

            <Form.Item
              name="remember"
              valuePropName="checked"
              //wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            //</Form>wrapperCol={{ offset: 8, span: 16 }}
            >
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </StyledCol>
      </StyledRow>
    </React.Fragment>
  );
};

export default Signup;
