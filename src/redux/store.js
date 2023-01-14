import { configureStore } from "@reduxjs/toolkit";
import { userSlice, counterSlice } from "./slices/sampleSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});
