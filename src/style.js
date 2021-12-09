import styled from 'styled-components';
import {Layout} from 'antd';

const {Header, Footer} = Layout;

const footerHeight = 70;
const headerHeight = 120;

export const AppStyle = styled.div`
  font-family: Ubuntu, Verdana, 'Verdana Ref', 'Lucida Grande',
    'Lucida Sans Unicode', 'DejaVu Sans', 'Bitstream Vera Sans',
    'Liberation Sans', Corbel, sans-serif;
  width: 100%;
  .main-content {
    min-height: calc(100vh - ${footerHeight + headerHeight}px);
  }
`;

export const HeaderStyle = styled.div`
  height: ${headerHeight}px;
`;

export const FooterStyle = styled(Footer)`
  min-height: ${footerHeight}px;
  background-color: rgba(85, 104, 87, 0.4);
  width: 100%;

  .footer-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 790px) {
      justify-content: center;
      .ant-col {
        //margin-bottom: 10px;
      }
    }
  }
`;
