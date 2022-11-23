import { configureStore, createSlice } from "@reduxjs/toolkit";

let instance = createSlice({
  name: "instance",
  initialState: {},
  reducers: {
    initInstance(state, a) {
      return a.payload;
    },
  },
});
export let { initInstance } = instance.actions;

export default configureStore({
  reducer: {
    instance: instance.reducer,
  },
});
