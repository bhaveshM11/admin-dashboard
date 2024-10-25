import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from "../../../Layout/AppMain/PageTitle";
import DataTable from "react-data-table-component";

export default class TrainingModules extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>  
              <PageTitle heading="TRAINING MODULES"
                subheading="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
                icon="pe-7s-plane icon-gradient bg-tempting-azure" />
            <DataTable/>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
