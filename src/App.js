import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Header from "./pages/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/auth";
import { auth } from "./firebase";

const App = () => {
  console.log(auth.currentUser);
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
