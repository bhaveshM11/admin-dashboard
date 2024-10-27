import React from "react";
import { Routes, Route } from "react-router-dom";

// Tables
import DataTableBasic from "./DataTables/Examples/Basic";
import DataTableFixedHeader from "./DataTables/Examples/FixedHeader";
import DataTablePivoting from "./DataTables/Examples/Pivoting";
import RegularTables from "./RegularTables";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Tables = () => (
  <>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Tables */}
          <Routes>
            <Route path="data-tables" element={<DataTableBasic />} />
            <Route path="datatables-fixed-header" element={<DataTableFixedHeader />} />
            <Route path="datatables-selectable-rows" element={<DataTablePivoting />} />
            <Route path="regular-tables" element={<RegularTables />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  </>
);

export default Tables;
