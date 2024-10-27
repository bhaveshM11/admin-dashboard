import { Route, Navigate , Routes } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import { ToastContainer } from "react-toastify";
import PageNotFound from "./PageNotFound";

const UserPages = lazy(() => import("../../Pages/UserPages"));

const DashboardMain = lazy(() => import("../../Pages/Dashboards"));



// const Applications = lazy(() => import("../../DemoPages/Applications"));
// const Dashboards = lazy(() => import("../../DemoPages/Dashboards"));

// const Widgets = lazy(() => import("../../DemoPages/Widgets"));
const Elements = lazy(() => import("../../DemoPages/Elements"));
const Components = lazy(() => import("../../DemoPages/Components"));
const Forms = lazy(() => import("../../DemoPages/Forms"));
const Tables = lazy(() => import("../../DemoPages/Tables"));

const ManLoader = () =>{
    return(
        <div className="loader-container">
        <div className="loader-container-inner">
            <div className="text-center">
                <Loader type="line-scale" />
            </div>
            <h6 className="mt-3">
                Please wait while we load all the Elements examples
                <small>
                    Because this is a demonstration, we load at once all the Elements examples. This wouldn't happen in a real live app!
                </small>
            </h6>
        </div>
    </div>
    )
}

const AppMain = () => {
    return (
        
        <Fragment>
        <Suspense
            fallback={<ManLoader/>}
        >
            <Routes>
                <Route path="/dashboard/*" element={<DashboardMain />} />
                <Route path="/user/*" element={<UserPages />} />
                <Route path="/elements/*" element={<Elements />} />
                <Route path="/forms/*" element={<Forms />} />
                <Route path="/components/*" element={<Components />} />
                {/* <Route path="/tables/*" element={<Tables />} /> */}
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </Suspense>
        {/* Uncomment if needed */}
        <ToastContainer/>
    </Fragment>
       
    )
};

export default AppMain;

