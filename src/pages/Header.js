import React from 'react';
import {Menu, Layout, Space} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import {signOut} from '@firebase/auth';
import {HeaderStyle} from '../style';
import {Alert} from 'antd';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        return console.log('Logged out');
      })
      .catch(() => console.log('Error'));
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
        <Link to='/merhaba' onClick={() => logOut()}>
          Log Out
        </Link>
      </Menu.Item>
    </React.Fragment>
  );
  return (
    <HeaderStyle>
      <Menu className='menu' mode='horizontal'>
        {user ? authMenu : menu}
      </Menu>
    </HeaderStyle>
  );
};

export default Header;
