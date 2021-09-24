import "./App.css";
import { AppStyle } from "./style";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from "./pages/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/auth";
import { auth } from "./firebase";
import Footer from "./pages/Footer";

const App = () => {
  console.log(auth.currentUser);
  return (
    <AuthProvider>
      <Router>
        <AppStyle>
          <Header />
          <Switch>
            <div className="mainContainer">
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
    </AuthProvider>
  );
};

export default App;
