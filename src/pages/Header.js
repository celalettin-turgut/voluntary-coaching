import React from "react";
import { Menu, Layout, Space } from "antd";
import { Link } from "react-router-dom";
import { HeaderStyle } from "../style";

const Header = () => {
  const token = null;

  const menu = (
    <React.Fragment>
      <Menu.Item>
        <Link to="/signin">Sign In</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signup">Sign Up</Link>
      </Menu.Item>
    </React.Fragment>
  );

  const authMenu = (
    <React.Fragment>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signout">Sign Out</Link>
      </Menu.Item>
    </React.Fragment>
  );
  return (
    <HeaderStyle>
      <Menu className="menu" mode="horizontal">
        {token ? authMenu : menu}
      </Menu>
    </HeaderStyle>
  );
};

export default Header;
