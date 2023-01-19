import React from "react";
import {ClientLogin} from '../components/LoginPage/ClientLogin'
import {CompanyLogin} from '../components/LoginPage/CompanyLogin.js'
import { useLocation } from "react-router-dom";
export const LoginPage = () => {
  const { pathname } = useLocation();
    if (pathname ==='/clientLogin')  return <div><ClientLogin/></div>;
    if (pathname ==='/companyLogin')  return <div><CompanyLogin/></div>;
};
