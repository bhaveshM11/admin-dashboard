import React, { Fragment, useEffect } from "react";
import { Route, Routes,useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

// USER PAGES

import Login from "./Login/";
import LoginBoxed from "./LoginBoxed/";

import Register from "./Register/";
import RegisterBoxed from "./RegisterBoxed/";

import ForgotPassword from "./ForgotPassword/";
import ForgotPasswordBoxed from "./ForgotPasswordBoxed/";

import AuthService from "../../services/authService";
import { useDispatch } from "react-redux";

const LoginError = ()=> {
  return (
    <div>Login Error Page</div>
  )
}
const UserPages = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const notify2 = () => {
    toast(
      "Already Logged In!!",
      {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: "bottom-center",
        type: "success",
      }
    );
  };
  useEffect(()=>{
    const LoggedInstatus = AuthService.checkLoggedIn(dispatch)
    if(LoggedInstatus){
      notify2()
      navigate("/dashboard")
    }
  },[])
  return(
  <Fragment>
    <div className="app-container">
      <Routes>
        <Route path={`login`} element={<Login/>} />
        <Route path={`login-boxed`} element={<LoginBoxed/>} />
        <Route path={`register`} element={<Register/>} />
        <Route path={`register-boxed`} element={<RegisterBoxed/>} />
        <Route path={`forgot-password`} element={<ForgotPassword/>} />
        <Route path={`forgot-password-boxed`} element={<ForgotPasswordBoxed/>}/>
        <Route path={`*`} element={<LoginError/>} />
      </Routes>
    </div>
  </Fragment>
)};

export default UserPages;
