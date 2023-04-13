import { createSlice } from "@reduxjs/toolkit";

const changeDarkMode = createSlice({
  name: "darkMode",
  initialState: {
    mode: false,
  },
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
    },
  },
});
export const { changeMode } = changeDarkMode.actions;
export default changeDarkMode.reducer;
