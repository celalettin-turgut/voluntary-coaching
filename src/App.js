import React, {Suspense} from 'react';
import './App.less';
import {AppStyle} from './style';
import {ConfigProvider} from 'antd';
import Footer from './layout/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import {theme} from './config/theme';
import {ThemeProvider} from 'styled-components';
import Main from './Main';
import PageLoading from './UI/PageLoading';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Suspense fallback={<PageLoading loading={true} />}>
      <ConfigProvider componentSize='large'>
        <ThemeProvider theme={theme}>
          <Router>
            <AppStyle>
              <Navbar />
              <Main />
              <Footer />
            </AppStyle>
          </Router>
        </ThemeProvider>
      </ConfigProvider>
    </Suspense>
  );
};

export default App;
