import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageTitle from "../../../Layout/AppMain/PageTitle";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const LogInRequired = ({loggedIn}) => {

  return (
    <TransitionGroup>
      <CSSTransition 
        component="div" 
        classNames="TabsAnimation" 
        appear={true}
        timeout={1500} 
        enter={false} 
        exit={false}
      >
        <div>  
          <PageTitle 
            heading="Log In Required"
            subheading="To get the access to Data Login/Register on my admin"
            icon="pe-7s-plane icon-gradient bg-tempting-azure" 
          />
        <div>
          Click On <Link to="/user/login" ><Button>Log in</Button></Link>
        </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default LogInRequired;
