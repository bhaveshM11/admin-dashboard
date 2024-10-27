import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageTitle from "../../../../Layout/AppMain/PageTitle";

const WorkInfo = () => {
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
            heading="Work Info"
            subheading="Wide icons selection including from flag icons to FontAwesome and other icons libraries."
            icon="pe-7s-phone icon-gradient bg-night-fade" 
          />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default WorkInfo;
