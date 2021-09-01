/** https://redux-toolkit.js.org/tutorials/typescript */

import { configureStore } from "@reduxjs/toolkit";
import { systemSlice } from "./slices/system.slice";

export const rootReducers = {
  system: systemSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
