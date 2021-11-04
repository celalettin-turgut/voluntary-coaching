import React, {Suspense} from 'react';
import {AppStyle} from './style';
import {ConfigProvider} from 'antd';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import {theme} from './config/theme';
import {ThemeProvider} from 'styled-components';
import Main from './Main';
import PageLoading from './components/UI/PageLoading';

const App = () => {
  return (
    <Suspense fallback={PageLoading}>
      <ConfigProvider componentSize='large'>
        <ThemeProvider theme={theme}>
          <Router>
            <AppStyle>
              <Header />
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
