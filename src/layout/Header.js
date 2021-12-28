import React from 'react';
import {Menu, Image} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import {signOut} from '@firebase/auth';
import {HeaderStyle} from '../style';
import {notification} from 'antd';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

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

  const menu = (
    <React.Fragment>
      <Menu.Item key='1'>
        <Link to='/signin'>Sign In</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/signup'>Sign Up</Link>
      </Menu.Item>
    </React.Fragment>
  );

  const authMenu = (
    <React.Fragment>
      <Menu.Item key='1'>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item key='2'>
        <Link to='/' onClick={() => logOut()}>
          Log Out
        </Link>
      </Menu.Item>
    </React.Fragment>
  );
  return (
    <HeaderStyle>
      <div className='logo' onClick={() => history.push('/')}>
        <Image src='logo.png' preview={false} />
      </div>
      <Menu className='menu' mode='horizontal'>
        {user ? authMenu : menu}
      </Menu>
    </HeaderStyle>
  );
};

export default Header;
