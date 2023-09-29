import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
};

export const admissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { setStudent } = admissionSlice.actions;

export default admissionSlice.reducer;
