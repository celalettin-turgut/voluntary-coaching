import { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";
import { SIGNUP } from "./actions";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const initialState = { user: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  const signup = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", user.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const value = { user: state.user, signup };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export { authContext };

export default AuthProvider;
