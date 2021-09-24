import styled from "styled-components";
import { Layout } from "antd";

const { Header, Footer } = Layout;

const footerHeight = 70;
const headerHeight = 50;

export const AppStyle = styled(Layout)`
  width: 100%;
  //font-family: "open sans";

  .mainContainer {
    min-height: calc(100vh - ${footerHeight + headerHeight}px);
  }
`;

export const HeaderStyle = styled(Header)`
  height: ${headerHeight}px;
  background-color: rgba(85, 104, 87, 0.4);
  //position: sticky;
  //top: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

export const FooterStyle = styled(Footer)`
  height: ${footerHeight}px;
  background-color: rgba(85, 104, 87, 0.4);
  width: 100%;
`;
