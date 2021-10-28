import "./App.less";
import { AppStyle } from "./style";
import { ConfigProvider } from "antd";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/auth";
import { theme } from "./config/theme";
import { ThemeProvider } from "styled-components";
import { auth } from "./firebase";

const App = () => {
  console.log(auth.currentUser);
  return (
    <AuthProvider>
      <ConfigProvider componentSize="large">
        <ThemeProvider theme={theme}>
          <Router>
            <AppStyle>
              <Header />
              <Switch>
                <div className="main-content">
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/signin">
                    <Signin />
                  </Route>
                </div>
              </Switch>
              <Footer />
            </AppStyle>
          </Router>
        </ThemeProvider>
      </ConfigProvider>
    </AuthProvider>
  );
};

export default App;
