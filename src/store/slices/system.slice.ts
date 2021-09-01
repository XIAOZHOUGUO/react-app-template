import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

interface State {
  token: string | null;
}

const initialState: State = {
  token: null,
};

export const systemSlice = createSlice({
  name: "systemSlice",
  initialState,
  reducers: {
    setAppToken(state, action: PayloadAction<string>) {
      console.log(`action`, action);
      state.token = action.payload;
    },
  },
});

export const { setAppToken } = systemSlice.actions;

export const systemActions = systemSlice.actions;

export const selectToken = (state: RootState) => state.system.token;
