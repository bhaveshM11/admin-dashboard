import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../Layout/AppMain/PageTitle";
export default class MyTrainings extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="MY TRAINING"
                subheading="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
                icon="pe-7s-phone icon-gradient bg-night-fade"/>
                
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
