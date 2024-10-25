import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// BUTTONS

// Standard

import TrainingModules from "./modules/index";
import TrainingRequests from "./requests";
import MyTrainings from "./myTrainings";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options

import ThemeOptions from "../../Layout/ThemeOptions/";

const Elements = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Training Section Items */}
          <Route path={`${match.url}/module`} component={TrainingModules}/>
          <Route path={`${match.url}/requests`} component={TrainingRequests}/>
          <Route path={`${match.url}/my-trainings`} component={MyTrainings}/>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Elements;
