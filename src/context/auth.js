import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthWrapper({ children }) {
  const [globalState, SetGlobalState] = useState({
    token: localStorage.getItem("token"),

    Register,
    login,
    logout,
  });

  async function Register(userInfo) {
    const url = process.env.REACT_APP_BACKEND_URL + "/auth/register/";
    const res = await axios.post(url, userInfo);
  }

  async function login(userInfo) {
    const url = process.env.REACT_APP_BACKEND_URL + "/auth/login/";
    const res = await axios.post(url, userInfo);
    console.log(res.data);
    SetGlobalState({
      ...globalState,
      token: res.data.token,
    });

    localStorage.setItem("token", res.data);
  }

  async function logout() {
    SetGlobalState({
      ...globalState,
      token: null,
    });

    localStorage.removeItem("token");
  }

  async function EmailResetPassword(userInfo) {
    const url =
      process.env.REACT_APP_BACKEND_URL + "/auth/request-reset-email/";
    const res = await axios.post(url, userInfo);
    console.log(res.data);
    SetGlobalState({
      ...globalState,
    });

    localStorage.setItem("token", res.data);
  }

  async function ResetPassword(userInfo) {
    const url =
      process.env.REACT_APP_BACKEND_URL + "/auth/password-reset-complete/";
    const res = await axios.post(url, userInfo);
    console.log(res.data);
    SetGlobalState({
      ...globalState,
    });

    localStorage.setItem("token", res.data);
  }

  return (
    <AuthContext.Provider value={globalState}>{children}</AuthContext.Provider>
  );
}
