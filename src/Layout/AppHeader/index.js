import React, { Fragment, useEffect, useState } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HeaderLogo from "../AppLogo";

import SearchBox from "./Components/SearchBox";
import UserBox from "./Components/UserBox";
// import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import useAuth from "../../services/useAuth";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AuthService from "../../services/authService";

const Header = (props) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.authSlice);
  const [userData,setUserData] = useState({});
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = props;
    useEffect( ()=>{
      AuthService.checkLoggedIn(dispatch)
      if(isLoggedIn){
        const user = AuthService.getUsersData()
        if(user){
          setUserData((prev)=>({prev,...user}))
        }
      }
    
    },[isLoggedIn])
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div"
            className={cx("app-header", headerBackgroundColor, {
              "header-shadow": enableHeaderShadow,
            })}
            appear={true} timeout={1500} enter={false} exit={false}>
            <div>
              <HeaderLogo />
              <div className={cx("app-header__content", {
                  "header-mobile-open": enableMobileMenuSmall,
                })}>
                <div className="app-header-right">
                 {isLoggedIn == true ?  <UserBox userData={userData} /> : <Link to={"/user/login"}><Button>Log In</Button></Link>}
                 
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
