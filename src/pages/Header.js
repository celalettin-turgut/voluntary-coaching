import React from 'react';
import {Menu, Layout, Space} from 'antd';
import {Link} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, logout} from '../firebase';
import {HeaderStyle} from '../style';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const menu = (
    <React.Fragment>
      <Menu.Item>
        <Link to='/signin'>Sign In</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/signup'>Sign Up</Link>
      </Menu.Item>
    </React.Fragment>
  );

  const authMenu = (
    <React.Fragment>
      <Menu.Item>
        <Link to='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <button onClick={logout}>Log Out</button>
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
