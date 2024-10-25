import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../reducers/slice";
import ThemeOptions from "../reducers/ThemeOptions";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    ThemeOptions: ThemeOptions,
    // Add other reducers as needed
  },
});