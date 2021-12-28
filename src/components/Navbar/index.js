import React, {useState} from 'react';
import Menu from './menu';
import {Link} from 'react-router-dom';
import {HeaderStyle} from '../../style';
import {Drawer} from 'antd';
import {MenuOutlined} from '@ant-design/icons';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(() => true);
  };

  const onClose = () => {
    setVisible(() => false);
  };

  return (
    <HeaderStyle>
      <nav className='menuBar'>
        <div className='logo'>
          <Link to='/'>Logo</Link>
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
    </HeaderStyle>
  );
};

export default Navbar;
