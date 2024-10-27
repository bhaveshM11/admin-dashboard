import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// COMPONENTS

// Tabs
import TabExample from "./Tabs/";
// Accordion
import AccordionExample from "./Accordion/";
// Notifications
import NotificationsExamples from "./Notifications/";
// Block Loading
import BlockLoadingExample from "./BlockLoading/";
// Progress Bar
import ProgressBarsExamples from "./ProgressBar/";
// Tooltips & Popovers
import TooltipsPopoversExample from "./TooltipsPopovers/";
// Modals
import ModalsExample from "./Modal/";
// Ratings
import RatingsExample from "./Ratings/";
// Image Crop
import ImageCropExample from "./ImageCropper/";
// Carousel
import CarouselExample from "./Carousel/";
// Count Up
import CountUpExample from "./CountUp/";
// Sticky Elements
import StickyElements from "./StickyElements/";
// Scrollable Elements
import ScrollableElements from "./ScrollableElements/";
// Tree View
import TreeView from "./TreeView/";
// Guided Tours
import GuidedToursExample from "./GuidedTours/";
// Maps
import MapsExample from "./Maps/";
// Pagination
import PaginationExamples from "./Pagination";
// Calendar
import CalendarExample from "./Calendar";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Components = () => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          {/* Define Routes */}
          <Routes>
            {/* Components */}

            {/* Tabs */}
            <Route path="tabs" element={<TabExample />} />

            {/* Accordion */}
            <Route path="accordions" element={<AccordionExample />} />

            {/* Notifications */}
            <Route path="notifications" element={<NotificationsExamples />} />

            {/* Block Loading */}
            <Route path="loading-blocks" element={<BlockLoadingExample />} />

            {/* Tooltips & Popovers */}
            <Route path="tooltips-popovers" element={<TooltipsPopoversExample />} />

            {/* Progress Bar */}
            <Route path="progress-bar" element={<ProgressBarsExamples />} />

            {/* Count Up */}
            <Route path="count-up" element={<CountUpExample />} />

            {/* Sticky Elements */}
            <Route path="sticky-elements" element={<StickyElements />} />

            {/* Scrollable Elements */}
            <Route path="scrollable-elements" element={<ScrollableElements />} />

            {/* Carousel */}
            <Route path="carousel" element={<CarouselExample />} />

            {/* Calendar */}
            <Route path="calendar" element={<CalendarExample />} />

            {/* Modals */}
            <Route path="modals" element={<ModalsExample />} />

            {/* Maps */}
            <Route path="maps" element={<MapsExample />} />

            {/* Image Crop */}
            <Route path="image-crop" element={<ImageCropExample />} />

            {/* Guided Tours */}
            <Route path="guided-tours" element={<GuidedToursExample />} />

            {/* Pagination */}
            <Route path="pagination" element={<PaginationExamples />} />

            {/* Ratings */}
            <Route path="ratings" element={<RatingsExample />} />

            {/* Tree View */}
            <Route path="tree-view" element={<TreeView />} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Components;
