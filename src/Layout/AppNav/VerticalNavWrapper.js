import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import MetisMenu from "react-metismenu";
import { Link } from "react-router-dom";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import { useNavigate } from 'react-router-dom';
import {
  MainNav,
  PorfolioNav,
  ComponentsNav,
  WidgetsNav,
  FormsNav,
  ChartsNav
} from "./NavItems";

const Nav = () => {
  const enableMobileMenu = useSelector((state) => state.ThemeOptions.enableMobileMenu);
  const dispatch = useDispatch();

  // const toggleMobileSidebar = () => {
  //   dispatch(setEnableMobileMenu(!enableMobileMenu));
  // };
  const navigate = useNavigate();


const toggleMobileSidebar = (selectedItem) => {
   
    dispatch(setEnableMobileMenu(!enableMobileMenu));
    if (selectedItem && selectedItem.to) {
        navigate(selectedItem.to, { replace: true }); // Use navigate to switch routes
    }
};

  return (
    <Fragment>

        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu content={MainNav} onSelected={(selectedItem) => toggleMobileSidebar(selectedItem)} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Portfolio</h5>
      <MetisMenu
        content={PorfolioNav}
        onSelected={toggleMobileSidebar}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />

      <h5 className="app-sidebar__heading">Forms</h5>
      <MetisMenu content={FormsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

     <h5 className="app-sidebar__heading">UI Components</h5>
      <MetisMenu content={ComponentsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      {/* Uncomment if needed */}
      {/* <h5 className="app-sidebar__heading">Pro Version</h5>
      <MetisMenu content={UpgradeNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}

      {/* <h5 className="app-sidebar__heading">Menu</h5>
      <MetisMenu content={MainNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}

      {/* <h5 className="app-sidebar__heading">UI Components</h5>
      <MetisMenu content={ComponentsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
      <MetisMenu content={WidgetsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Forms</h5>
      <MetisMenu content={FormsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
{/* 
      <h5 className="app-sidebar__heading">Charts</h5>
      <MetisMenu content={ChartsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/> */}
    </Fragment>
  );
};

export default Nav;
