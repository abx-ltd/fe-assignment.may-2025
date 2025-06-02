import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
  },
  reducers: {
    setFormData: (state, action) => {
      state.data = action.payload;
    },
    resetFormData: (state) => {
      state.data = {};
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export const formReducer = formSlice.reducer;
