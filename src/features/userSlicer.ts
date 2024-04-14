import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../utils/store";

export interface userState {
  id: null | number;
  token: string | null;
}

const initialState: userState = {
  id: null,
  token: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<userState>) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      console.log(state.id, state.token, " state curr");
    },
    removeUser: (state) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { saveUser, removeUser } = userSlice.actions;

export const getUserData = (state: RootState) => state?.users;

export default userSlice.reducer;
