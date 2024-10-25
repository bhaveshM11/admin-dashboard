import "./polyfills";
import React from "react";
import { createRoot } from 'react-dom/client';

import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import "./assets/base.scss";
import Main from "./Pages/Main";
import configureStore from "./config/configureStore";
import {store} from "./config/store"
import { Provider } from "react-redux";

// const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => (
  <Provider store={store}>
    <HashRouter>
      <Component />
    </HashRouter>
  </Provider>
);

const root = createRoot(rootElement).render(renderApp(Main));

if (module.hot) {
  module.hot.accept("./Pages/Main", () => {
    const NextApp = require("./Pages/Main").default;
    root.render(renderApp(NextApp));
  });
}
serviceWorker.unregister();