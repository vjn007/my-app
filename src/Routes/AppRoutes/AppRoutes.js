// src > AppRoutes > AppRoutes.js

import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SubHeader from "../../Components/Header/SubHeader/SubHeader";
import Sidebar from "../../Components/SideBar/SideBar";


const Main = lazy(() => import("../../Components/Main/Main"));
const Home = lazy(() => import("../../Components/Home/Home"));
const Landing = lazy(() => import("../../Components/Landing/Landing"));
const SignIn = lazy(() => import("../../Components/SignIn/SignIn"));
const SignUp = lazy(() => import("../../Components/SignUp/SignUp"));
const ForgotPassword = lazy(() => import("../../Components/User/ForgotPassword/ForgotPassword"));
const ResetPassword = lazy(() => import("../../Components/User/ResetPassword/ResetPassword"));

const AppRoutes = () => {
  let location = useLocation();

  return (
    <>
      {
        location.pathname !== "/" ?
          (
            <>
              <SubHeader />
              <Sidebar />
            </>
          )
          : ""
      }
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />   
        <Route path="/reset-password/:token" element={<ResetPassword />} />   
      </Routes>
    </>
  );
};

export default AppRoutes;