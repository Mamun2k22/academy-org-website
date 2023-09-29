import { configureStore } from "@reduxjs/toolkit";
import admissionReducer from "../redux/admissionSlice/admissionSlice";

export const store = configureStore({
  reducer: {
    admission: admissionReducer,
  },
});
