import { AppStyle } from "./style";
import { ConfigProvider } from "antd";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { theme } from "./config/theme";
import { ThemeProvider } from "styled-components";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
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
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
              </div>
            </Switch>
            <Footer />
          </AppStyle>
        </Router>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
