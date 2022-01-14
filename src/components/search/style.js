import styled from 'styled-components';
import {Row} from 'antd';

const SearchStyle = styled(Row)`
  //background-color: #47c9ad;
  background-image: url('images/solidarity.jpg');
  backgroun-repeate: no-repeat;
  background-size: cover;
  // background-position: 1px -200px;
  height: 420px;

  .main-content {
    .text-header {
      width: 100%;
      font-size: 65px;
      color: white;
      font-weight: 700;
      line-height: 1;
      margin-top: 20px;
      text-align: center;
    }
    .text {
      width: 100%;
      font-size: 26px;
      color: white;
      font-weight: 400;
      line-height: 1;
      letter-spacing: 5px;
      margin-top: 20px;
      text-align: center;
    }
  }

  .search-container {
    margin-top: 70px;
  }
`;

export default SearchStyle;
