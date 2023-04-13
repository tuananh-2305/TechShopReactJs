import { configureStore } from "@reduxjs/toolkit";
import changeDarkMode from "./reducer";

const store = configureStore({
  reducer: {
    darkMode: changeDarkMode,
  },
});

export default store;
