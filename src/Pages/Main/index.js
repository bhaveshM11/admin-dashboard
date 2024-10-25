import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter } from "react-router-dom";
import ResizeDetector from "react-resize-detector";
import AppMain from "../../Layout/AppMain";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, increment,decrement } from "../../reducers/slice";
import Dummy from "./dummy.tsx";
import Practice from "./Practice.tsx";

const Main = (props) => {
  const [closedSmallerSidebar, setClosedSmallerSidebar] = useState(false);
  const {
    colorScheme,
    enableFixedHeader,
    enableFixedSidebar,
    enableFixedFooter,
    enableClosedSidebar,
    enableMobileMenu,
    enablePageTabsAlt,
  } = useSelector((state) => state.ThemeOptions);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  const counter = useSelector((state) => state.items.counter);
  console.log(counter)
  useEffect(() => {
    // dispatch(fetchItems());
    console.log(status)
  }, []);

  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (status === "failed") {
  //   return <div>Error: {error}</div>;
  // }

  // const helloclick = () => {
  //   console.log("Hello Clicked!");
  //   // Add your logic here
  //   dispatch(fetchItems());
  // };

  return (
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <>
          <div
            className={cx(
              "app-container app-theme-" + colorScheme,
              { "fixed-header": enableFixedHeader },
              { "fixed-sidebar": enableFixedSidebar || width < 1250 },
              { "fixed-footer": enableFixedFooter },
              { "closed-sidebar": enableClosedSidebar || width < 1250 },
              { "closed-sidebar-mobile": closedSmallerSidebar || width < 1250 },
              { "sidebar-mobile-open": enableMobileMenu },
              { "body-tabs-shadow-btn": enablePageTabsAlt }
            )}
          >
            <AppMain/>
          </div>
        </>
      )}
    />
  );
};

export default withRouter(Main);