import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase';
import {
  UserOutlined,
  MailOutlined,
  BarcodeOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {Col, Row, Space, Avatar} from 'antd';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(error);
  return (
    <>
      <Row justify='center'>
        <h2>Profile</h2>
      </Row>
      <Row justify='space-around'>
        <Col span={8} justify='center'>
          <h2 style={{textAlign: 'center'}}>Avatar</h2>
          <center>
            <Avatar size={150} icon={<UserOutlined />} />
          </center>
        </Col>
        <Col span={16}>
          <Space direction='vertical'>
            <div>
              <div>Name</div>
              <div>
                <UserOutlined /> {user && user.displayName}
              </div>
            </div>
            <div>
              <div>Email</div>
              <div>
                <MailOutlined /> {user && user.email}
              </div>
            </div>
            <div>
              <div>Phone</div>
              <div>
                <PhoneOutlined /> {user && user.phoneNumber}
              </div>
            </div>
            <div>
              <div>Password</div>
              <div>
                <BarcodeOutlined className='profileFieldIcon' /> ******
              </div>
            </div>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
