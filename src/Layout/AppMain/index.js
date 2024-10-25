import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";

// const UserPages = lazy(() => import("../../DemoPages/UserPages"));
// const Applications = lazy(() => import("../../DemoPages/Applications"));
// const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));

// const Widgets = lazy(() => import("../../DemoPages/Widgets"));
// const Elements = lazy(() => import("../../DemoPages/Elements"));
// const Components = lazy(() => import("../../DemoPages/Components"));
// const Charts = lazy(() => import("../../DemoPages/Charts"));
// const Forms = lazy(() => import("../../DemoPages/Forms"));
// const Tables = lazy(() => import("../../DemoPages/Tables"));

const Trainings = lazy(() => import("../../Pages/Trainings"));
const ERPDashboards = lazy(() => import("../../Pages/Dashboards"));

const AppMain = () => {
    console.log(window.location.href)
    return (
        <Fragment>
            {/* Trainings */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="line-scale"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Elements examples
                            <small>Because this is a demonstration we load at once all the Elements examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/trainings" component={Trainings}/>
            </Suspense>

            {/* Dashboards */}

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <div className="text-center">
                            <Loader type="ball-grid-cy"/>
                        </div>
                        <h6 className="mt-3">
                            Please wait while we load all the Dashboards examples
                            <small>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</small>
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={ERPDashboards}/>
            </Suspense>


            <Route exact path="/" render={() => (
                <Redirect to="/dashboards/erp"/>
            )}/>
            {/* <ToastContainer/> */}

        </Fragment>
    )
};

export default AppMain;

