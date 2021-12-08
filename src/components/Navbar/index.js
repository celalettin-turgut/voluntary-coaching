import React, {useState} from 'react';
import Menu from './menu';
import {Drawer} from 'antd';
import {MenuOutlined} from '@ant-design/icons';

const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(() => true);
  };

  const onClose = () => {
    setVisible(() => false);
  };

  return (
    <nav className='menuBar'>
      <div className='logo'>
        <a href='www'>logo</a>
      </div>
      <div className='menuContainer'>
        <div className='leftMenu'>
          <Menu />
        </div>

        <div className='barsMenu' type='primary' onClick={showDrawer}>
          <span>
            <MenuOutlined />
          </span>
        </div>
        <Drawer
          title='Menu'
          placement='right'
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <Menu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
