import styled from "styled-components";
import { Layout } from "antd";

const { Header, Footer } = Layout;

const footerHeight = 70;
const headerHeight = 70;

export const AppStyle = styled(Layout)`
  width: 100%;
  //font-family: "open sans";

  .main-content {
    min-height: calc(100vh - ${footerHeight + headerHeight}px);
  }
`;

export const HeaderStyle = styled(Header)`
  height: ${headerHeight}px;
  background-color: #fff;
  //position: sticky;
  //top: 0;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  justify-content: flex-end;

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
