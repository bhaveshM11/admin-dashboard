import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// BUTTONS

// Standard
import ButtonsStandard from "./Button/Standard/";
// Pills
import ButtonsPill from "./Button/Pill/";
// Shadows
import ButtonsShadow from "./Button/Shadow/";
// Square
import ButtonsSquare from "./Button/Square/";
// Icons
import ButtonsIcons from "./Button/Icons/";

// DROPDOWNS
import DropdownExamples from "./Dropdowns/";

// BADGES & LABELS
import BadgesLabels from "./BadgesLabels/";

// ICONS
import IconsExamples from "./Icons/";

// CARDS
import CardsExamples from "./Cards/";

// LOADERS
import LoadersExample from "../Elements/Loaders/";

// LIST GROUP
import ListGroupExample from "../Elements/ListGroup/";

// TIMELINE
import TimelineExample from "../Elements/Timeline/";

// NAVIGATION
import NavigationExample from "./Navs/";

// DRAG & DROP
import ScreenVisibilityExamples from "./ScreenVisibility/";

// UTILITIES
import UtilitiesExamples from "../Elements/Utilities/";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Elements = () => {
  const location = useLocation();

  return (
    <Fragment>
      <ThemeOptions />
      <AppHeader />
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            {/* Define Routes */}
            <Routes>
              <Route path="buttons-standard" element={<ButtonsStandard />} />
              <Route path="buttons-square" element={<ButtonsSquare />} />
              <Route path="buttons-pills" element={<ButtonsPill />} />
              <Route path="buttons-shadow" element={<ButtonsShadow />} />
              <Route path="buttons-icons" element={<ButtonsIcons />} />

              {/* Dropdowns */}
              <Route path="dropdowns" element={<DropdownExamples />} />

              {/* Badges & Labels */}
              <Route path="badges-labels" element={<BadgesLabels />} />

              {/* Icons */}
              <Route path="icons" element={<IconsExamples />} />

              {/* Cards */}
              <Route path="cards" element={<CardsExamples />} />

              {/* Loaders */}
              <Route path="loaders" element={<LoadersExample />} />

              {/* List Group */}
              <Route path="list-group" element={<ListGroupExample />} />

              {/* Timeline */}
              <Route path="timelines" element={<TimelineExample />} />

              {/* Navs */}
              <Route path="navigation" element={<NavigationExample />} />

              {/* Screen Visibility */}
              <Route path="visibility-sensor" element={<ScreenVisibilityExamples />} />

              {/* Utilities */}
              <Route path="utilities" element={<UtilitiesExamples />} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </div>
    </Fragment>
  );
};

export default Elements;
