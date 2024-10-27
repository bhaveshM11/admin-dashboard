import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PageTitle from "../../../../Layout/AppMain/PageTitle";
import DataTable from "react-data-table-component";
import DataTableBasic from "../../../../DemoPages/Tables/RegularTables/Examples/TableBordered"

const BasicInfo = ({loggedIn}) => {

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
            heading="Basic Info"
            subheading="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
            icon="pe-7s-plane icon-gradient bg-tempting-azure" 
          />
          {/* <DataTable data={data}
                columns={columns}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
              /> */}
            <DataTableBasic />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default BasicInfo;
