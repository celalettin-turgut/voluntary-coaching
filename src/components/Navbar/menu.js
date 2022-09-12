import React from 'react';
import {Menu as AntMenu, Grid, notification} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {auth} from '../../firebase';
import {signOut} from '@firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';

const {useBreakpoint} = Grid;

const Menu = () => {
  const [user, loading, error] = useAuthState(auth);
  const {md} = useBreakpoint();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        notification.info({
          message: 'Sign Out',
          description: 'Signed out successfully!',
          placement: 'topRight',
        });
      })
      .catch(() =>
        notification.error({
          message: 'Sign Out',
          description: 'An error occured signing out',
          placement: 'topRight',
        })
      );
  };

  return (
    <AntMenu
      inlineCollapsed={false}
      mode={md ? 'horizontal' : 'inline'}
      style={{flex: 'auto'}}
    >
      <AntMenu.Item key='1'>
        <Link to='/'>Home</Link>
      </AntMenu.Item>

      <AntMenu.Item key='2'>
        <Link to='/create'>Create Your Project</Link>
      </AntMenu.Item>

      <AntMenu.Item key='3'>
        <Link to='/contact'>Contact Us</Link>
      </AntMenu.Item>

      {!user ? (
        <>
          <AntMenu.Item key='4'>
            <Link to='/signin'>Sign In</Link>
          </AntMenu.Item>
          <AntMenu.Item key='5'>
            <Link to='/signup'>Sign Up</Link>
          </AntMenu.Item>
        </>
      ) : (
        <>
          <AntMenu.Item icon={<UserOutlined />} key='4'>
            <Link to='/profile'>Profile</Link>
          </AntMenu.Item>
          <AntMenu.Item key='5'>
            <Link to='/' onClick={() => logOut()}>
              Log Out
            </Link>
          </AntMenu.Item>
        </>
      )}
    </AntMenu>
  );
};

export default Menu;
