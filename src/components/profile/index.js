import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, database} from '../../firebase';
import {ref, onValue} from 'firebase/database';
import {
  UserOutlined,
  MailOutlined,
  BarcodeOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {Col, Row, Space, Avatar} from 'antd';

const Profile = () => {
  const [userData, loading, error] = useAuthState(auth);
  const [user, setUser] = useState({});
  console.log(userData);

  useEffect(() => {
    const userRef = ref(database, 'users/' + userData.uid);
    onValue(userRef, (snapshot) => {
      setUser(() => snapshot.val());
    });
  }, [userData.uid]);

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
              <div>Password.</div>
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
