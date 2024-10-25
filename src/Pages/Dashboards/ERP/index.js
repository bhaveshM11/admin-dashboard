import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitleAlt2 from "../../../Layout/AppMain/PageTitleAlt2";

export default class ERPDashboard extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitleAlt2 heading="ERP TOPRANKERS ADMIN DASHBOARD"
                subheading="Yet another dashboard built using only the included Architech elements and components."
                icon="pe-7s-graph icon-gradient bg-ripe-malin"/>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
