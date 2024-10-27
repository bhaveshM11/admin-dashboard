import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// DASHBOARDS

import Dashboard from "./adminDashboard/index";
import DashboardUsers from "./adminDashboard/users-list";
import MinimalDashboard1 from "../../DemoPages/Dashboards/Minimal/Variation1";
import MinimalDashboard2 from "../../DemoPages/Dashboards/Minimal/Variation2";
// import CRMDashboard from "../../DemoPages/Dashboards/CRM"


// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import PageNotFound from "../../Layout/AppMain/PageNotFound";
import BasicInfo from "./portfolio/BasicInfo";
import WorkInfo from "./portfolio/WorkInfo";
import UserPages from "../UserPages";
import AuthService from "../../services/authService";
import { useSelector,useDispatch } from "react-redux";
import RequiredLogIn from "./portfolio/LoggedIn"

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = () => {
  const {isLoggedIn} = useSelector((state) => state.authSlice)
  const dispatch = useDispatch()
  useEffect(()=>{
    AuthService.checkLoggedIn(dispatch)
  },[isLoggedIn])
  return(
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Routes>
          <Route path={`/`} element={<MinimalDashboard1 />} />
          {/* <Route path={`crm`} element={<MinimalDashboard1 />} /> */}
          <Route exact path={`minimal-2`} element={<MinimalDashboard2 />} />
          <Route path={`users-list`} element={<DashboardUsers />} />
          <Route path={`portfolio/basic-info`} element={isLoggedIn ? <BasicInfo/> : <RequiredLogIn/>}/>
          <Route path={`portfolio/work-info`} element={isLoggedIn ? <WorkInfo />: <RequiredLogIn/>}/>
          <Route path={`*`} element={<PageNotFound/>}/>
          </Routes>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
)
};

export default Dashboards;
