import styled from 'styled-components';
import {Layout} from 'antd';

const {Header, Footer} = Layout;

const footerHeight = 70;
const headerHeight = 120;

export const AppStyle = styled.div`
  width: 100%;
  .main-content {
    min-height: calc(100vh - ${footerHeight + headerHeight}px);
  }
`;

export const HeaderStyle = styled(Header)`
  height: ${headerHeight}px;
  background-color: rgba(85, 104, 87, 0.4);
  //position: sticky;
  //top: 0;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  justify-content: space-between;
  .logo {
    margin-left: 60px;
    margin-top: 10px;
  }

  .menu {
    width: 14em;
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterStyle = styled(Footer)`
  height: ${footerHeight}px;
  background-color: rgba(85, 104, 87, 0.4);
  width: 100%;

  .footer-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
