import styled from 'styled-components';
import {Row} from 'antd';

const SearchStyle = styled(Row)`
  background-color: #47c9ad;
  height: 500px;

  .main-content {
    .text-header {
      text-align: 'center';
    }
    .text {
      text-align: 'center';
    }
  }

  .search-container {
    margin-top: 70px;
  }
`;

export default SearchStyle;
