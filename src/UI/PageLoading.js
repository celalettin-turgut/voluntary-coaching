import React from 'react';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import styled from 'styled-components';

const antIcon = <LoadingOutlined style={{fontSize: 75}} spin />;

const PageLoagingStyle = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

// @params: @message
const PageLoading = ({message = 'Loading', loading = false}) => {
  return (
    <React.Fragment>
      {loading ? (
        <PageLoagingStyle>
          <Spin tip={message} indicator={antIcon} size='large' />
        </PageLoagingStyle>
      ) : null}
    </React.Fragment>
  );
};

export default PageLoading;
